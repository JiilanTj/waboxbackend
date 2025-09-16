import makeWASocket, { 
  ConnectionState, 
  DisconnectReason, 
  useMultiFileAuthState,
  WASocket,
  AuthenticationState,
  BaileysEventMap,
  WAMessageKey,
  WAMessageUpdate,
  MessageReceiptType,
  MessageUserReceipt,
  MessageUpsertType,
  WAMessage
} from '@whiskeysockets/baileys';
import { Boom } from '@hapi/boom';
import path from 'path';
import fs from 'fs';
import QRCode from 'qrcode';
import { PrismaClient, SessionStatus } from '../../generated/prisma';
import { phoneToWhatsAppJID, jidToPhoneNumber } from '../../utils/phoneUtils';
import { chatService } from '../chat/ChatService';
import { getSocketService } from '../socket/SocketService';

const prisma = new PrismaClient();

// Logger interface for Baileys - Ultra Clean version
const P = (level: 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace') => ({
  level,
  info: () => {}, // Completely disable info logs
  error: (msg: any, ...args: any[]) => {
    // Only log critical errors, filter out normal operation logs
    const criticalErrors = ['Connection failed', 'Authentication failed', 'Socket error'];
    const msgStr = typeof msg === 'string' ? msg : String(msg);
    if (criticalErrors.some(err => msgStr.includes(err))) {
      console.error(`📱 WhatsApp Error:`, msgStr);
    }
  },
  warn: () => {}, // Completely disable warn logs
  debug: () => {}, // Completely disable debug
  trace: () => {}, // Completely disable trace  
  child: () => P(level)
});

export interface WhatsAppSessionData {
  id: string;
  whatsappNumberId: number;
  phoneNumber: string;
  socket: WASocket | null;
  qrCode: string | null;
  status: SessionStatus;
  retryCount: number;
}

export class WhatsAppSessionManager {
  private sessions: Map<string, WhatsAppSessionData> = new Map();
  private readonly sessionsPath: string;
  private readonly maxRetries = 3;

  constructor() {
    this.sessionsPath = path.join(process.cwd(), 'sessions');
    this.ensureSessionsDir();
  }

  private ensureSessionsDir(): void {
    if (!fs.existsSync(this.sessionsPath)) {
      fs.mkdirSync(this.sessionsPath, { recursive: true });
    }
  }

  private getSessionPath(sessionId: string): string {
    return path.join(this.sessionsPath, sessionId);
  }

  /**
   * Create or get existing session
   */
  async createSession(whatsappNumberId: number, phoneNumber: string): Promise<string> {
    // Check if session already exists for this WhatsApp number
    const existingSession = await prisma.whatsAppSession.findFirst({
      where: { 
        whatsappNumberId,
        isActive: true 
      }
    });

    let sessionId: string;
    
    if (existingSession) {
      sessionId = existingSession.id;
    } else {
      // Create new session in database
      const newSession = await prisma.whatsAppSession.create({
        data: {
          whatsappNumberId,
          status: SessionStatus.PENDING,
          isActive: true,
        }
      });
      sessionId = newSession.id;
    }

    // Initialize session data
    const sessionData: WhatsAppSessionData = {
      id: sessionId,
      whatsappNumberId,
      phoneNumber,
      socket: null,
      qrCode: null,
      status: SessionStatus.PENDING,
      retryCount: 0
    };

    this.sessions.set(sessionId, sessionData);
    
    // Start connection process
    await this.connectSession(sessionId);
    
    return sessionId;
  }

  /**
   * Connect WhatsApp session
   */
  async connectSession(sessionId: string): Promise<void> {
    const sessionData = this.sessions.get(sessionId);
    if (!sessionData) {
      console.log(`⚠️  Session ${sessionId} not found, likely disconnected permanently`);
      return; // Don't throw error, just return silently
    }

    try {
      const sessionPath = this.getSessionPath(sessionId);
      
      // Create session directory if it doesn't exist
      if (!fs.existsSync(sessionPath)) {
        fs.mkdirSync(sessionPath, { recursive: true });
      }

      // Load auth state
      const { state, saveCreds } = await useMultiFileAuthState(sessionPath);

      // Create socket connection with suppressed console output
      const originalConsoleLog = console.log;
      const originalConsoleInfo = console.info;
      const originalConsoleWarn = console.warn;
      
      // Temporarily suppress Baileys console output during socket creation
      console.log = (...args: any[]) => {
        const msg = args.join(' ');
        // Filter out Baileys noise
        if (!msg.includes('connected to WA') && 
            !msg.includes('logging in') && 
            !msg.includes('offline messages') && 
            !msg.includes('History sync') && 
            !msg.includes('mutex') && 
            !msg.includes('prekey') && 
            !msg.includes('session') && 
            !msg.includes('Closing')) {
          originalConsoleLog(...args);
        }
      };
      
      console.info = () => {}; // Suppress all info
      console.warn = () => {}; // Suppress all warnings during connection
      
      const socket = makeWASocket({
        auth: state,
        printQRInTerminal: false,
        logger: P('error'),
      });

      // Restore original console after socket creation
      console.log = originalConsoleLog;
      console.info = originalConsoleInfo;
      console.warn = originalConsoleWarn;

      sessionData.socket = socket;

      // Handle QR code generation
      socket.ev.on('connection.update', async (update: Partial<ConnectionState>) => {
        await this.handleConnectionUpdate(sessionId, update);
      });

      // Save credentials when updated
      socket.ev.on('creds.update', saveCreds);

      // Handle messages - Store in database and broadcast real-time
      socket.ev.on('messages.upsert', async (m: { messages: WAMessage[]; type: MessageUpsertType; requestId?: string }) => {
        // Process each message immediately
        for (const msg of m.messages) {
          try {
            // Only process non-status messages
            if (msg.key.remoteJid && !msg.key.remoteJid.includes('status@broadcast')) {
              // Extract basic info for logging
              const from = msg.key.remoteJid?.replace('@s.whatsapp.net', '');
              const isFromMe = msg.key.fromMe ? '(Sent)' : '(Received)';
              const text = msg.message?.conversation || 
                          msg.message?.extendedTextMessage?.text || 
                          '[Media/Other]';
              
              console.log(`💬 Message ${isFromMe}: ${from} - ${text.substring(0, 50)}${text.length > 50 ? '...' : ''}`);
              
              // Store in database immediately via ChatService
              await chatService.processIncomingMessage(sessionData.whatsappNumberId, msg);
              
            }
          } catch (error) {
            console.error(`❌ Error processing message:`, error);
          }
        }
      });

      console.log(`🔄 Connecting WhatsApp: ${sessionData.phoneNumber}`);

    } catch (error) {
      console.error(`❌ Error connecting session ${sessionId}:`, error);
      await this.updateSessionStatus(sessionId, SessionStatus.ERROR, `Connection error: ${error}`);
    }
  }

  /**
   * Handle connection state updates
   */
  private async handleConnectionUpdate(sessionId: string, update: Partial<ConnectionState>): Promise<void> {
    const sessionData = this.sessions.get(sessionId);
    if (!sessionData) return;

    const { connection, lastDisconnect, qr } = update;
    const socketService = getSocketService();

    if (qr) {
      // Generate QR code
      try {
        const qrCodeDataURL = await QRCode.toDataURL(qr, { width: 300 });
        sessionData.qrCode = qrCodeDataURL;
        
        // Update QR code in database
        await prisma.whatsAppSession.update({
          where: { id: sessionId },
          data: { 
            qrCode: qrCodeDataURL,
            status: SessionStatus.PAIRING,
            updatedAt: new Date()
          }
        });

        sessionData.status = SessionStatus.PAIRING;
        console.log(`📱 QR Code ready for ${sessionData.phoneNumber}`);
        
        // Broadcast QR code via Socket.io
        if (socketService) {
          await socketService.broadcastQRCode(sessionData.whatsappNumberId, qrCodeDataURL);
          await socketService.broadcastWhatsAppStatus(sessionData.whatsappNumberId, 'PAIRING', {
            qrCode: qrCodeDataURL
          });
        }
      } catch (error) {
        console.error(`❌ Error generating QR code for ${sessionData.phoneNumber}:`, error);
      }
    }

    if (connection === 'close') {
      const shouldReconnect = (lastDisconnect?.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut;
      
      if (shouldReconnect && sessionData.retryCount < this.maxRetries) {
        sessionData.retryCount++;
        console.log(`🔄 Reconnecting session for ${sessionData.phoneNumber} (attempt ${sessionData.retryCount}/${this.maxRetries})`);
        
        // Broadcast reconnecting status
        if (socketService) {
          await socketService.broadcastWhatsAppStatus(sessionData.whatsappNumberId, 'RECONNECTING', {
            retryCount: sessionData.retryCount,
            maxRetries: this.maxRetries
          });
        }
        
        setTimeout(() => {
          // Check if session still exists before reconnecting
          if (this.sessions.has(sessionId)) {
            this.connectSession(sessionId);
          } else {
            console.log(`⚠️  Session ${sessionId} was removed, skipping reconnection`);
          }
        }, 5000); // Wait 5 seconds before retry
      } else {
        console.log(`❌ Session for ${sessionData.phoneNumber} disconnected permanently`);
        await this.updateSessionStatus(sessionId, SessionStatus.DISCONNECTED, 'Connection closed');
        
        // Broadcast disconnection via Socket.io
        if (socketService) {
          await socketService.broadcastWhatsAppStatus(sessionData.whatsappNumberId, 'DISCONNECTED', {
            reason: 'Connection closed'
          });
        }
        
        this.sessions.delete(sessionId);
      }
    } else if (connection === 'open') {
      console.log(`✅ WhatsApp connected: ${sessionData.phoneNumber}`);
      sessionData.status = SessionStatus.CONNECTED;
      sessionData.retryCount = 0;
      sessionData.qrCode = null; // Clear QR code after successful connection
      
      await this.updateSessionStatus(sessionId, SessionStatus.CONNECTED);
      
      // Clear QR code from database
      await prisma.whatsAppSession.update({
        where: { id: sessionId },
        data: { 
          qrCode: null,
          lastConnected: new Date(),
          updatedAt: new Date()
        }
      });
      
      // Broadcast successful connection via Socket.io
      if (socketService) {
        await socketService.broadcastWhatsAppStatus(sessionData.whatsappNumberId, 'CONNECTED', {
          lastConnected: new Date(),
          phoneNumber: sessionData.phoneNumber
        });
      }
    }
  }

  /**
   * Update session status in database
   */
  private async updateSessionStatus(sessionId: string, status: SessionStatus, errorMessage?: string): Promise<void> {
    try {
      await prisma.whatsAppSession.update({
        where: { id: sessionId },
        data: {
          status,
          errorMessage: errorMessage || null,
          lastConnected: status === SessionStatus.CONNECTED ? new Date() : undefined,
          updatedAt: new Date()
        }
      });

      // Update local session data
      const sessionData = this.sessions.get(sessionId);
      if (sessionData) {
        sessionData.status = status;
      }
    } catch (error) {
      console.error(`❌ Error updating session ${sessionId} status:`, error);
    }
  }

  /**
   * Get session data
   */
  getSession(sessionId: string): WhatsAppSessionData | null {
    return this.sessions.get(sessionId) || null;
  }

  /**
   * Get all active sessions
   */
  getAllSessions(): WhatsAppSessionData[] {
    return Array.from(this.sessions.values());
  }

  /**
   * Disconnect session (soft - without logout for server restart)
   */
  async disconnectSession(sessionId: string, forceLogout: boolean = false): Promise<void> {
    const sessionData = this.sessions.get(sessionId);
    if (!sessionData) {
      throw new Error('Session not found');
    }

    if (sessionData.socket) {
      if (forceLogout) {
        // Hard disconnect - logout and clear credentials
        await sessionData.socket.logout();
        console.log(`🔌 ${sessionData.phoneNumber} logged out permanently`);
      } else {
        // Soft disconnect - just close connection, keep credentials
        sessionData.socket.end(undefined);
        console.log(`🔌 ${sessionData.phoneNumber} disconnected (credentials saved)`);
      }
      sessionData.socket = null;
    }

    await this.updateSessionStatus(sessionId, SessionStatus.DISCONNECTED);
    this.sessions.delete(sessionId);

    if (forceLogout) {
      // Only deactivate session in database for permanent logout
      await prisma.whatsAppSession.update({
        where: { id: sessionId },
        data: { 
          isActive: false,
          updatedAt: new Date()
        }
      });
    } else {
      // Keep session active in database for restart
      await prisma.whatsAppSession.update({
        where: { id: sessionId },
        data: { 
          status: SessionStatus.DISCONNECTED,
          updatedAt: new Date()
        }
      });
    }
  }

  /**
   * Permanently disconnect and logout session
   */
  async logoutSession(sessionId: string): Promise<void> {
    return this.disconnectSession(sessionId, true);
  }

  /**
   * Send message through session
   */
  async sendMessage(sessionId: string, to: string, message: string): Promise<any> {
    const sessionData = this.sessions.get(sessionId);
    if (!sessionData || !sessionData.socket) {
      throw new Error('Session not found or not connected');
    }

    if (sessionData.status !== SessionStatus.CONNECTED) {
      throw new Error('Session is not connected');
    }

    try {
      const jid = phoneToWhatsAppJID(to);
      const result = await sessionData.socket.sendMessage(jid, { text: message });
      
      // Store sent message in database via ChatService
      if (result) {
        try {
          await chatService.processSentMessage(
            sessionData.whatsappNumberId,
            jid,
            message,
            result.key.id || undefined
          );
          console.log(`💾 Sent message stored: ${jidToPhoneNumber(jid) || to} - ${message.substring(0, 50)}${message.length > 50 ? '...' : ''}`);
        } catch (dbError) {
          console.error(`❌ Error storing sent message:`, dbError);
          // Don't throw error here, message was sent successfully
        }
      }
      
      return result;
    } catch (error) {
      console.error(`❌ Error sending message from session ${sessionId}:`, error);
      throw error;
    }
  }

  /**
   * Get session QR code
   */
  getSessionQR(sessionId: string): string | null {
    const sessionData = this.sessions.get(sessionId);
    return sessionData?.qrCode || null;
  }

  /**
   * Initialize existing sessions on startup
   */
  async initializeExistingSessions(): Promise<void> {
    try {
      const activeSessions = await prisma.whatsAppSession.findMany({
        where: { isActive: true },
        include: { whatsappNumber: true }
      });

      for (const dbSession of activeSessions) {
        const sessionData: WhatsAppSessionData = {
          id: dbSession.id,
          whatsappNumberId: dbSession.whatsappNumberId,
          phoneNumber: dbSession.whatsappNumber.phoneNumber,
          socket: null,
          qrCode: null,
          status: SessionStatus.PENDING,
          retryCount: 0
        };

        this.sessions.set(dbSession.id, sessionData);
        
        // Try to reconnect existing sessions
        console.log(`🔄 Reconnecting ${dbSession.whatsappNumber.phoneNumber}`);
        await this.connectSession(dbSession.id);
      }

      console.log(`✅ Initialized ${activeSessions.length} WhatsApp session(s)`);
    } catch (error) {
      console.error('❌ Error initializing existing sessions:', error);
    }
  }

  /**
   * Cleanup - soft disconnect all sessions (for server restart)
   */
  async cleanup(): Promise<void> {
    const sessionIds = Array.from(this.sessions.keys());
    
    console.log(`🔄 Gracefully disconnecting ${sessionIds.length} WhatsApp session(s)...`);
    
    for (const sessionId of sessionIds) {
      try {
        // Soft disconnect - don't logout, just close connections
        await this.disconnectSession(sessionId, false);
      } catch (error) {
        console.error(`❌ Error disconnecting session during cleanup:`, error);
      }
    }
    
    console.log('✅ All WhatsApp sessions gracefully disconnected (credentials preserved)');
  }

  /**
   * Force cleanup - hard disconnect all sessions (logout permanently)
   */
  async forceCleanup(): Promise<void> {
    const sessionIds = Array.from(this.sessions.keys());
    
    console.log(`🔄 Force disconnecting and logging out ${sessionIds.length} sessions...`);
    
    for (const sessionId of sessionIds) {
      try {
        // Hard disconnect - logout permanently
        await this.disconnectSession(sessionId, true);
      } catch (error) {
        console.error(`❌ Error disconnecting session ${sessionId} during force cleanup:`, error);
      }
    }
    
    console.log('✅ All sessions logged out permanently');
  }
}

// Singleton instance
export const whatsappSessionManager = new WhatsAppSessionManager();
