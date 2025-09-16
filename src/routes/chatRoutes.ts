import { Router } from 'express';
import { 
  getChatList, 
  getChatHistory, 
  markChatAsRead, 
  searchChats 
} from '../controllers/chatController';
import { authenticateToken } from '../utils/middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     ChatPreview:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique chat ID
 *         contactName:
 *           type: string
 *           description: Display name of the contact
 *         contactNumber:
 *           type: string
 *           description: Phone number of the contact
 *         contactJid:
 *           type: string
 *           description: WhatsApp JID of the contact
 *         lastMessage:
 *           type: string
 *           description: Preview of the last message
 *         lastMessageTime:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: Timestamp of the last message
 *         unreadCount:
 *           type: integer
 *           description: Number of unread messages
 *         isGroup:
 *           type: boolean
 *           description: Whether this is a group chat
 *         groupName:
 *           type: string
 *           nullable: true
 *           description: Group name if it's a group chat
 *         isPinned:
 *           type: boolean
 *           description: Whether the chat is pinned
 *         isArchived:
 *           type: boolean
 *           description: Whether the chat is archived
 *     
 *     MessageData:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique message ID
 *         messageId:
 *           type: string
 *           description: WhatsApp message ID
 *         fromJid:
 *           type: string
 *           description: Sender's WhatsApp JID
 *         fromNumber:
 *           type: string
 *           description: Sender's phone number
 *         fromName:
 *           type: string
 *           nullable: true
 *           description: Sender's display name
 *         content:
 *           type: string
 *           nullable: true
 *           description: Message content/text
 *         type:
 *           type: string
 *           enum: [TEXT, IMAGE, VIDEO, AUDIO, DOCUMENT, LOCATION, CONTACT, STICKER, SYSTEM]
 *           description: Message type
 *         mediaUrl:
 *           type: string
 *           nullable: true
 *           description: URL for media content
 *         mediaCaption:
 *           type: string
 *           nullable: true
 *           description: Caption for media messages
 *         quotedMessageId:
 *           type: string
 *           nullable: true
 *           description: ID of quoted/replied message
 *         quotedContent:
 *           type: string
 *           nullable: true
 *           description: Content of quoted/replied message
 *         isFromMe:
 *           type: boolean
 *           description: Whether message was sent by us
 *         status:
 *           type: string
 *           enum: [PENDING, SENT, DELIVERED, READ, FAILED]
 *           description: Message delivery status
 *         timestamp:
 *           type: string
 *           format: date-time
 *           description: Message timestamp
 */

/**
 * @swagger
 * /api/v1/chats/{whatsappNumberId}:
 *   get:
 *     summary: Get chat list for a WhatsApp number
 *     description: Retrieve all chats (conversation list) for a specific WhatsApp number
 *     tags: [Chats]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: whatsappNumberId
 *         required: true
 *         schema:
 *           type: integer
 *         description: WhatsApp number ID
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 50
 *         description: Number of chats to return
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *         description: Number of chats to skip
 *     responses:
 *       200:
 *         description: Chat list retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ChatPreview'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     limit:
 *                       type: integer
 *                     offset:
 *                       type: integer
 *                     total:
 *                       type: integer
 *       400:
 *         description: Invalid WhatsApp number ID
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get('/api/v1/chats/:whatsappNumberId', authenticateToken, getChatList);

/**
 * @swagger
 * /api/v1/chats/{chatId}/messages:
 *   get:
 *     summary: Get chat history/messages
 *     description: Retrieve message history for a specific chat
 *     tags: [Chats]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: chatId
 *         required: true
 *         schema:
 *           type: string
 *         description: Chat ID
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 50
 *         description: Number of messages to return
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *         description: Number of messages to skip
 *     responses:
 *       200:
 *         description: Chat history retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/MessageData'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     limit:
 *                       type: integer
 *                     offset:
 *                       type: integer
 *                     total:
 *                       type: integer
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get('/api/v1/chats/:chatId/messages', authenticateToken, getChatHistory);

/**
 * @swagger
 * /api/v1/chats/{chatId}/read:
 *   patch:
 *     summary: Mark chat as read
 *     description: Reset unread message count for a specific chat
 *     tags: [Chats]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: chatId
 *         required: true
 *         schema:
 *           type: string
 *         description: Chat ID
 *     responses:
 *       200:
 *         description: Chat marked as read successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.patch('/api/v1/chats/:chatId/read', authenticateToken, markChatAsRead);

/**
 * @swagger
 * /api/v1/chats/{whatsappNumberId}/search:
 *   get:
 *     summary: Search chats
 *     description: Search chats by contact name, number, or group name
 *     tags: [Chats]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: whatsappNumberId
 *         required: true
 *         schema:
 *           type: integer
 *         description: WhatsApp number ID
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: Chat search completed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ChatPreview'
 *                 query:
 *                   type: string
 *       400:
 *         description: Invalid parameters or missing query
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get('/api/v1/chats/:whatsappNumberId/search', authenticateToken, searchChats);

export default router;
