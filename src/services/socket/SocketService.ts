import { Server, Socket } from 'socket.io';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../../generated/prisma';
import { ChatPreview, MessageData } from '../chat/ChatService';

const prisma = new PrismaClient();

interface AuthenticatedSocket extends Socket {
  userId?: number;
  whatsappNumberIds?: number[];
}

interface UserRoom {
  userId: number;
  whatsappNumberIds: number[];
}

export class SocketService {
  private io: Server;
  private userRooms: Map<string, UserRoom> = new Map();

  constructor(io: Server) {
    this.io = io;
  }

  setupHandlers() {
    this.io.use(this.authMiddleware.bind(this));
    
    this.io.on('connection', (socket: AuthenticatedSocket) => {
      console.log(`🔌 User connected: ${socket.id} (User ID: ${socket.userId})`);
      
      this.handleConnection(socket);
      this.handleDisconnection(socket);
      this.handleChatEvents(socket);
      this.handleWhatsAppEvents(socket);
    });
  }

  /**
   * Authentication middleware for Socket.io
   */
  private async authMiddleware(socket: AuthenticatedSocket, next: (err?: any) => void) {
    try {
      const token = socket.handshake.auth.token;
      
      console.log(`🔐 Socket auth attempt: ${socket.id}, token: ${token ? 'present' : 'missing'}`);
      
      if (!token) {
        console.log('❌ Socket auth failed: No token provided');
        return next(new Error('Authentication required'));
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
      console.log(`🔍 Decoded JWT:`, { userId: decoded.userId, username: decoded.username });
      
      // Fix: Use decoded.userId instead of decoded.id
      if (!decoded.userId) {
        console.log('❌ Socket auth failed: No userId in token');
        return next(new Error('Invalid token: missing userId'));
      }

      // Get user's WhatsApp numbers (filter by actual user ownership if needed)
      const whatsappNumbers = await prisma.whatsAppNumber.findMany({
        where: { 
          isActive: true,
          // TODO: Add user ownership filter if WhatsApp numbers belong to specific users
          // userId: decoded.userId 
        },
        select: { id: true }
      });

      socket.userId = decoded.userId;
      socket.whatsappNumberIds = whatsappNumbers.map(num => num.id);
      
      console.log(`✅ Socket auth success: User ${decoded.userId} connected with ${whatsappNumbers.length} WhatsApp numbers`);
      next();
    } catch (error) {
      console.log('❌ Socket auth failed:', error instanceof Error ? error.message : String(error));
      next(new Error('Invalid token'));
    }
  }

  /**
   * Handle user connection
   */
  private handleConnection(socket: AuthenticatedSocket) {
    if (!socket.userId) {
      console.log(`❌ Connection rejected: No userId for socket ${socket.id}`);
      socket.disconnect(true);
      return;
    }

    console.log(`🎯 Setting up connection for User ${socket.userId} (${socket.id})`);

    // Store user room info
    this.userRooms.set(socket.id, {
      userId: socket.userId,
      whatsappNumberIds: socket.whatsappNumberIds || []
    });

    // Join user to their rooms (based on their WhatsApp numbers)
    socket.whatsappNumberIds?.forEach(whatsappNumberId => {
      socket.join(`whatsapp:${whatsappNumberId}`);
      console.log(`📡 User ${socket.userId} joined room: whatsapp:${whatsappNumberId}`);
    });

    // Send initial chat list
    console.log(`📋 Sending initial chat list to User ${socket.userId}`);
    this.sendInitialChatList(socket);
  }

  /**
   * Handle user disconnection
   */
  private handleDisconnection(socket: AuthenticatedSocket) {
    socket.on('disconnect', (reason) => {
      console.log(`🔌 User disconnected: ${socket.id} (User ID: ${socket.userId})`);
      console.log(`❓ Disconnect reason: ${reason}`);
      this.userRooms.delete(socket.id);
    });

    socket.on('error', (error) => {
      console.log(`❌ Socket error for ${socket.id}:`, error);
    });
  }

  /**
   * Handle chat-related events
   */
  private handleChatEvents(socket: AuthenticatedSocket) {
    // Request chat list
    socket.on('chat:get-list', async (data: { whatsappNumberId: number, limit?: number, offset?: number }) => {
      try {
        if (!socket.whatsappNumberIds?.includes(data.whatsappNumberId)) {
          socket.emit('error', { message: 'Unauthorized access to WhatsApp number' });
          return;
        }

        const { ChatService } = await import('../chat/ChatService');
        const chatService = new ChatService();
        
        const chatList = await chatService.getChatList(
          data.whatsappNumberId,
          data.limit || 50,
          data.offset || 0
        );

        socket.emit('chat:list', {
          whatsappNumberId: data.whatsappNumberId,
          chats: chatList
        });
      } catch (error) {
        console.error('Error getting chat list:', error);
        socket.emit('error', { message: 'Failed to get chat list' });
      }
    });

    // Request chat history
    socket.on('chat:get-history', async (data: { chatId: string, limit?: number, offset?: number }) => {
      try {
        // Verify user has access to this chat
        const chat = await prisma.chat.findFirst({
          where: {
            id: data.chatId,
            whatsappNumberId: { in: socket.whatsappNumberIds || [] }
          }
        });

        if (!chat) {
          socket.emit('error', { message: 'Chat not found or unauthorized' });
          return;
        }

        const { ChatService } = await import('../chat/ChatService');
        const chatService = new ChatService();
        
        const messages = await chatService.getChatHistory(
          data.chatId,
          data.limit || 50,
          data.offset || 0
        );

        socket.emit('chat:history', {
          chatId: data.chatId,
          messages: messages
        });
      } catch (error) {
        console.error('Error getting chat history:', error);
        socket.emit('error', { message: 'Failed to get chat history' });
      }
    });

    // Mark chat as read
    socket.on('chat:mark-read', async (data: { chatId: string }) => {
      try {
        // Verify user has access to this chat
        const chat = await prisma.chat.findFirst({
          where: {
            id: data.chatId,
            whatsappNumberId: { in: socket.whatsappNumberIds || [] }
          }
        });

        if (!chat) {
          socket.emit('error', { message: 'Chat not found or unauthorized' });
          return;
        }

        const { ChatService } = await import('../chat/ChatService');
        const chatService = new ChatService();
        
        await chatService.markChatAsRead(data.chatId);

        // Emit to all user's connected sockets
        this.io.to(`whatsapp:${chat.whatsappNumberId}`).emit('chat:read', {
          chatId: data.chatId,
          whatsappNumberId: chat.whatsappNumberId
        });
      } catch (error) {
        console.error('Error marking chat as read:', error);
        socket.emit('error', { message: 'Failed to mark chat as read' });
      }
    });
  }

  /**
   * Handle WhatsApp-related events
   */
  private handleWhatsAppEvents(socket: AuthenticatedSocket) {
    // Request WhatsApp session status
    socket.on('whatsapp:get-status', async (data: { whatsappNumberId: number }) => {
      try {
        if (!socket.whatsappNumberIds?.includes(data.whatsappNumberId)) {
          socket.emit('error', { message: 'Unauthorized access to WhatsApp number' });
          return;
        }

        const session = await prisma.whatsAppSession.findFirst({
          where: { whatsappNumberId: data.whatsappNumberId },
          include: { whatsappNumber: true }
        });

        socket.emit('whatsapp:status', {
          whatsappNumberId: data.whatsappNumberId,
          status: session?.status || 'DISCONNECTED',
          isActive: session?.isActive || false,
          lastConnected: session?.lastConnected,
          qrCode: session?.qrCode
        });
      } catch (error) {
        console.error('Error getting WhatsApp status:', error);
        socket.emit('error', { message: 'Failed to get WhatsApp status' });
      }
    });
  }

  /**
   * Send initial chat list when user connects
   */
  private async sendInitialChatList(socket: AuthenticatedSocket) {
    try {
      if (!socket.whatsappNumberIds || socket.whatsappNumberIds.length === 0) {
        console.log(`⚠️  No WhatsApp numbers for user ${socket.userId}, skipping initial chat list`);
        return;
      }

      const { ChatService } = await import('../chat/ChatService');
      const chatService = new ChatService();

      console.log(`📊 Loading initial chat list for ${socket.whatsappNumberIds.length} WhatsApp numbers...`);

      for (const whatsappNumberId of socket.whatsappNumberIds) {
        console.log(`📋 Loading chat list for WhatsApp number ${whatsappNumberId}...`);
        
        const chatList = await chatService.getChatList(whatsappNumberId, 20, 0);
        
        console.log(`✅ Found ${chatList.length} chats for WhatsApp number ${whatsappNumberId}`);
        
        socket.emit('chat:list', {
          whatsappNumberId,
          chats: chatList
        });
        
        console.log(`📤 Sent chat list to user ${socket.userId} for WhatsApp ${whatsappNumberId}`);
      }
      
      console.log(`🎉 Initial chat list sending completed for user ${socket.userId}`);
    } catch (error) {
      console.error(`❌ Error sending initial chat list to user ${socket.userId}:`, error instanceof Error ? error.message : String(error));
      // Don't disconnect on error, just log it
    }
  }

  /**
   * Broadcast new message to relevant users
   */
  async broadcastNewMessage(whatsappNumberId: number, chatId: string, message: MessageData) {
    try {
      // Emit to all users connected to this WhatsApp number
      this.io.to(`whatsapp:${whatsappNumberId}`).emit('message:new', {
        whatsappNumberId,
        chatId,
        message
      });

      // Also update chat list (for last message preview)
      const { ChatService } = await import('../chat/ChatService');
      const chatService = new ChatService();
      
      const chatList = await chatService.getChatList(whatsappNumberId, 1, 0);
      
      if (chatList.length > 0) {
        this.io.to(`whatsapp:${whatsappNumberId}`).emit('chat:updated', {
          whatsappNumberId,
          chat: chatList[0]
        });
      }
    } catch (error) {
      console.error('Error broadcasting new message:', error);
    }
  }

  /**
   * Broadcast message status update
   */
  async broadcastMessageStatusUpdate(whatsappNumberId: number, chatId: string, messageId: string, status: string) {
    this.io.to(`whatsapp:${whatsappNumberId}`).emit('message:status', {
      whatsappNumberId,
      chatId,
      messageId,
      status
    });
  }

  /**
   * Broadcast WhatsApp connection status
   */
  async broadcastWhatsAppStatus(whatsappNumberId: number, status: string, data?: any) {
    this.io.to(`whatsapp:${whatsappNumberId}`).emit('whatsapp:status', {
      whatsappNumberId,
      status,
      ...data
    });
  }

  /**
   * Broadcast QR code update
   */
  async broadcastQRCode(whatsappNumberId: number, qrCode: string) {
    this.io.to(`whatsapp:${whatsappNumberId}`).emit('whatsapp:qr', {
      whatsappNumberId,
      qrCode
    });
  }

  /**
   * Get Socket.io instance (for use in other services)
   */
  getIO(): Server {
    return this.io;
  }

  /**
   * Get connected users count
   */
  getConnectedUsersCount(): number {
    return this.userRooms.size;
  }
}

// Global socket service instance
let socketService: SocketService | null = null;

export const initializeSocketService = (io: Server): SocketService => {
  socketService = new SocketService(io);
  socketService.setupHandlers();
  return socketService;
};

export const getSocketService = (): SocketService | null => {
  return socketService;
};
