import { PrismaClient, Chat, Message, MessageType, MessageStatus } from '../../generated/prisma';
import { jidToPhoneNumber, normalizePhoneNumber, formatPhoneForDisplay } from '../../utils/phoneUtils';
import { WAMessage, WAMessageUpdate } from '@whiskeysockets/baileys';
import { getSocketService } from '../socket/SocketService';

const prisma = new PrismaClient();

export interface ChatPreview {
  id: string;
  contactName: string;
  contactNumber: string;
  contactJid: string;
  lastMessage: string;
  lastMessageTime: Date | null;
  unreadCount: number;
  isGroup: boolean;
  groupName?: string | null;
  isPinned: boolean;
  isArchived: boolean;
}

export interface MessageData {
  id: string;
  messageId: string;
  fromJid: string;
  fromNumber: string;
  fromName?: string | null;
  content?: string | null;
  type: MessageType;
  mediaUrl?: string | null;
  mediaCaption?: string | null;
  quotedMessageId?: string | null;
  quotedContent?: string | null;
  isFromMe: boolean;
  status: MessageStatus;
  timestamp: Date;
}

export class ChatService {
  
  /**
   * Process incoming WhatsApp message and store in database
   */
  async processIncomingMessage(whatsappNumberId: number, message: WAMessage): Promise<void> {
    try {
      const messageId = message.key.id;
      const fromJid = message.key.remoteJid;
      const isFromMe = message.key.fromMe || false;
      
      if (!messageId || !fromJid) return;

      // Check if message already exists to prevent duplicates
      const existingMessage = await prisma.message.findFirst({
        where: {
          messageId: messageId,
          fromJid: fromJid
        }
      });

      if (existingMessage) {
        console.log(`⚠️  Message already exists, skipping: ${messageId}`);
        return;
      }

      // Extract message content
      const messageContent = this.extractMessageContent(message);
      const timestamp = new Date((message.messageTimestamp as number) * 1000);
      
      // Get or create chat
      const chat = await this.getOrCreateChat(whatsappNumberId, fromJid, !isFromMe);
      
      // Extract phone numbers
      const fromNumber = jidToPhoneNumber(fromJid) || fromJid;
      const toJid = isFromMe ? fromJid : `${whatsappNumberId}@s.whatsapp.net`; // Simplified
      const toNumber = isFromMe ? fromNumber : whatsappNumberId.toString();

      // Create message record
      const newMessage = await prisma.message.create({
        data: {
          chatId: chat.id,
          messageId: messageId,
          fromJid: fromJid,
          fromNumber: fromNumber,
          fromName: messageContent.senderName,
          toJid: toJid,
          toNumber: toNumber,
          type: messageContent.type,
          content: messageContent.text,
          mediaUrl: messageContent.mediaUrl,
          mediaCaption: messageContent.caption,
          quotedMessageId: messageContent.quotedMessageId,
          quotedContent: messageContent.quotedText,
          status: MessageStatus.DELIVERED,
          isFromMe: isFromMe,
          timestamp: timestamp
        }
      });

      // Update chat with last message info
      await this.updateChatLastMessage(chat.id, messageContent.text || '[Media]', timestamp, !isFromMe);

      console.log(`💾 Message stored: ${fromNumber} - ${messageContent.text || '[Media]'}`);
      
      // Broadcast new message via Socket.io
      const socketService = getSocketService();
      if (socketService) {
        const messageData: MessageData = {
          id: newMessage.id,
          messageId: newMessage.messageId,
          fromJid: newMessage.fromJid,
          fromNumber: newMessage.fromNumber,
          fromName: newMessage.fromName,
          content: newMessage.content,
          type: newMessage.type,
          mediaUrl: newMessage.mediaUrl,
          mediaCaption: newMessage.mediaCaption,
          quotedMessageId: newMessage.quotedMessageId,
          quotedContent: newMessage.quotedContent,
          isFromMe: newMessage.isFromMe,
          status: newMessage.status,
          timestamp: newMessage.timestamp
        };

        await socketService.broadcastNewMessage(whatsappNumberId, chat.id, messageData);
        console.log(`📡 Message broadcasted via Socket.io: ${fromNumber}`);
      }
      
    } catch (error) {
      console.error('Error processing incoming message:', error);
    }
  }

  /**
   * Process sent message (from our side) and store in database
   */
  async processSentMessage(
    whatsappNumberId: number, 
    toJid: string, 
    content: string, 
    messageId?: string
  ): Promise<void> {
    try {
      // Get or create chat
      const chat = await this.getOrCreateChat(whatsappNumberId, toJid, false);
      
      const toNumber = jidToPhoneNumber(toJid) || toJid;
      const fromJid = `${whatsappNumberId}@s.whatsapp.net`; // Our JID
      const timestamp = new Date();

      // Create message record
      const newMessage = await prisma.message.create({
        data: {
          chatId: chat.id,
          messageId: messageId || `msg_${Date.now()}`,
          fromJid: fromJid,
          fromNumber: whatsappNumberId.toString(),
          toJid: toJid,
          toNumber: toNumber,
          type: MessageType.TEXT,
          content: content,
          status: MessageStatus.SENT,
          isFromMe: true,
          timestamp: timestamp
        }
      });

      // Update chat with last message info
      await this.updateChatLastMessage(chat.id, content, timestamp, false);

      console.log(`📤 Sent message stored: ${toNumber} - ${content}`);
      
      // Broadcast sent message via Socket.io
      const socketService = getSocketService();
      if (socketService) {
        const messageData: MessageData = {
          id: newMessage.id,
          messageId: newMessage.messageId,
          fromJid: newMessage.fromJid,
          fromNumber: newMessage.fromNumber,
          fromName: newMessage.fromName,
          content: newMessage.content,
          type: newMessage.type,
          mediaUrl: newMessage.mediaUrl,
          mediaCaption: newMessage.mediaCaption,
          quotedMessageId: newMessage.quotedMessageId,
          quotedContent: newMessage.quotedContent,
          isFromMe: newMessage.isFromMe,
          status: newMessage.status,
          timestamp: newMessage.timestamp
        };

        await socketService.broadcastNewMessage(whatsappNumberId, chat.id, messageData);
        console.log(`📡 Sent message broadcasted via Socket.io: ${toNumber}`);
      }
      
    } catch (error) {
      console.error('Error processing sent message:', error);
    }
  }

  /**
   * Get chat list for a WhatsApp number
   */
  async getChatList(whatsappNumberId: number, limit: number = 50, offset: number = 0): Promise<ChatPreview[]> {
    try {
      const chats = await prisma.chat.findMany({
        where: { 
          whatsappNumberId,
          isArchived: false
        },
        orderBy: [
          { isPinned: 'desc' },
          { lastMessageTime: 'desc' }
        ],
        take: limit,
        skip: offset
      });

      return chats.map(chat => ({
        id: chat.id,
        contactName: chat.contactName || formatPhoneForDisplay(chat.contactNumber),
        contactNumber: chat.contactNumber,
        contactJid: chat.contactJid,
        lastMessage: chat.lastMessageText || '',
        lastMessageTime: chat.lastMessageTime,
        unreadCount: chat.unreadCount,
        isGroup: chat.isGroup,
        groupName: chat.groupName,
        isPinned: chat.isPinned,
        isArchived: chat.isArchived
      }));
      
    } catch (error) {
      console.error('Error getting chat list:', error);
      return [];
    }
  }

  /**
   * Get chat history/messages for a specific chat
   */
  async getChatHistory(chatId: string, limit: number = 50, offset: number = 0): Promise<MessageData[]> {
    try {
      const messages = await prisma.message.findMany({
        where: { chatId },
        orderBy: { timestamp: 'desc' },
        take: limit,
        skip: offset
      });

      return messages.map(msg => ({
        id: msg.id,
        messageId: msg.messageId,
        fromJid: msg.fromJid,
        fromNumber: msg.fromNumber,
        fromName: msg.fromName,
        content: msg.content,
        type: msg.type,
        mediaUrl: msg.mediaUrl,
        mediaCaption: msg.mediaCaption,
        quotedMessageId: msg.quotedMessageId,
        quotedContent: msg.quotedContent,
        isFromMe: msg.isFromMe,
        status: msg.status,
        timestamp: msg.timestamp
      })).reverse(); // Return in chronological order
      
    } catch (error) {
      console.error('Error getting chat history:', error);
      return [];
    }
  }

  /**
   * Mark chat messages as read
   */
  async markChatAsRead(chatId: string): Promise<void> {
    try {
      await prisma.chat.update({
        where: { id: chatId },
        data: { unreadCount: 0 }
      });
    } catch (error) {
      console.error('Error marking chat as read:', error);
    }
  }

  /**
   * Search chats by contact name or number
   */
  async searchChats(whatsappNumberId: number, query: string): Promise<ChatPreview[]> {
    try {
      const chats = await prisma.chat.findMany({
        where: {
          whatsappNumberId,
          OR: [
            { contactName: { contains: query } },
            { contactNumber: { contains: query } },
            { groupName: { contains: query } }
          ]
        },
        orderBy: { lastMessageTime: 'desc' },
        take: 20
      });

      return chats.map(chat => ({
        id: chat.id,
        contactName: chat.contactName || formatPhoneForDisplay(chat.contactNumber),
        contactNumber: chat.contactNumber,
        contactJid: chat.contactJid,
        lastMessage: chat.lastMessageText || '',
        lastMessageTime: chat.lastMessageTime,
        unreadCount: chat.unreadCount,
        isGroup: chat.isGroup,
        groupName: chat.groupName,
        isPinned: chat.isPinned,
        isArchived: chat.isArchived
      }));
      
    } catch (error) {
      console.error('Error searching chats:', error);
      return [];
    }
  }

  /**
   * Get or create chat for a contact
   */
  private async getOrCreateChat(whatsappNumberId: number, contactJid: string, isIncoming: boolean = false): Promise<Chat> {
    try {
      // Try to find existing chat
      let chat = await prisma.chat.findFirst({
        where: {
          whatsappNumberId,
          contactJid
        }
      });

      if (!chat) {
        // Create new chat
        const contactNumber = jidToPhoneNumber(contactJid) || contactJid;
        const normalizedNumber = normalizePhoneNumber(contactNumber) || contactNumber;
        
        chat = await prisma.chat.create({
          data: {
            whatsappNumberId,
            contactJid,
            contactNumber: normalizedNumber,
            contactName: formatPhoneForDisplay(normalizedNumber),
            isGroup: contactJid.includes('@g.us'),
            unreadCount: isIncoming ? 1 : 0
          }
        });
      } else if (isIncoming) {
        // Increment unread count for incoming messages
        await prisma.chat.update({
          where: { id: chat.id },
          data: { unreadCount: { increment: 1 } }
        });
      }

      return chat;
      
    } catch (error) {
      console.error('Error getting/creating chat:', error);
      throw error;
    }
  }

  /**
   * Update chat with last message information
   */
  private async updateChatLastMessage(chatId: string, messageText: string, timestamp: Date, isIncoming: boolean): Promise<void> {
    try {
      await prisma.chat.update({
        where: { id: chatId },
        data: {
          lastMessageText: messageText.substring(0, 100), // Limit preview length
          lastMessageTime: timestamp,
          updatedAt: new Date()
        }
      });
    } catch (error) {
      console.error('Error updating chat last message:', error);
    }
  }

  /**
   * Extract message content from WhatsApp message
   */
  private extractMessageContent(message: WAMessage): {
    text?: string;
    type: MessageType;
    mediaUrl?: string;
    caption?: string;
    senderName?: string;
    quotedMessageId?: string;
    quotedText?: string;
  } {
    const msg = message.message;
    if (!msg) return { type: MessageType.TEXT };

    // Text message
    if (msg.conversation) {
      return {
        text: msg.conversation,
        type: MessageType.TEXT
      };
    }

    // Extended text message
    if (msg.extendedTextMessage) {
      return {
        text: msg.extendedTextMessage.text || undefined,
        type: MessageType.TEXT,
        quotedMessageId: msg.extendedTextMessage.contextInfo?.quotedMessage ? 
          msg.extendedTextMessage.contextInfo.stanzaId || undefined : undefined,
        quotedText: msg.extendedTextMessage.contextInfo?.quotedMessage?.conversation || undefined
      };
    }

    // Image message
    if (msg.imageMessage) {
      return {
        text: msg.imageMessage.caption || undefined,
        type: MessageType.IMAGE,
        caption: msg.imageMessage.caption || undefined
      };
    }

    // Video message
    if (msg.videoMessage) {
      return {
        text: msg.videoMessage.caption || undefined,
        type: MessageType.VIDEO,
        caption: msg.videoMessage.caption || undefined
      };
    }

    // Audio message
    if (msg.audioMessage) {
      return {
        text: '[Audio]',
        type: MessageType.AUDIO
      };
    }

    // Document message
    if (msg.documentMessage) {
      return {
        text: msg.documentMessage.fileName || '[Document]',
        type: MessageType.DOCUMENT
      };
    }

    // Location message
    if (msg.locationMessage) {
      return {
        text: '[Location]',
        type: MessageType.LOCATION
      };
    }

    // Contact message
    if (msg.contactMessage) {
      return {
        text: '[Contact]',
        type: MessageType.CONTACT
      };
    }

    // Sticker message
    if (msg.stickerMessage) {
      return {
        text: '[Sticker]',
        type: MessageType.STICKER
      };
    }

    // Default fallback
    return {
      text: '[Message]',
      type: MessageType.TEXT
    };
  }
}

export const chatService = new ChatService();
