import { Router } from 'express';
import { 
  createOrUpdateSession, 
  getSessionByWhatsappNumber, 
  getAllSessions, 
  updateSessionStatus, 
  getSessionQR, 
  deactivateSession, 
  deleteSession,
  sendMessage
} from '../controllers/sessionController';
import { authenticateToken, requireAdmin } from '../utils/middleware';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     SessionStatus:
 *       type: string
 *       enum: [PENDING, CONNECTED, DISCONNECTED, PAIRING, ERROR]
 *       description: Status of the WhatsApp session
 *     
 *     WhatsAppSession:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the session
 *         whatsappNumberId:
 *           type: integer
 *           description: ID of the associated WhatsApp number
 *         whatsappNumber:
 *           $ref: '#/components/schemas/WhatsAppNumber'
 *         status:
 *           $ref: '#/components/schemas/SessionStatus'
 *         qrCode:
 *           type: string
 *           nullable: true
 *           description: Base64 encoded QR code for pairing
 *         lastConnected:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: Last connection timestamp
 *         isActive:
 *           type: boolean
 *           description: Whether the session is active
 *         errorMessage:
 *           type: string
 *           nullable: true
 *           description: Error message if status is ERROR
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     
 *     CreateSessionRequest:
 *       type: object
 *       properties:
 *         sessionData:
 *           type: object
 *           nullable: true
 *           description: Baileys session data (encrypted)
 *         qrCode:
 *           type: string
 *           nullable: true
 *           description: Base64 encoded QR code
 *         status:
 *           $ref: '#/components/schemas/SessionStatus'
 *         connectionInfo:
 *           type: object
 *           nullable: true
 *           description: Additional connection metadata
 *         errorMessage:
 *           type: string
 *           nullable: true
 *           description: Error message if status is ERROR
 *     
 *     UpdateStatusRequest:
 *       type: object
 *       required:
 *         - status
 *       properties:
 *         status:
 *           $ref: '#/components/schemas/SessionStatus'
 *         errorMessage:
 *           type: string
 *           nullable: true
 *           description: Error message if status is ERROR
 */

/**
 * @swagger
 * /api/v1/sessions/{whatsappNumberId}:
 *   post:
 *     summary: Create or update WhatsApp session
 *     description: Create a new session or update existing active session for a WhatsApp number (Admin only)
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: whatsappNumberId
 *         required: true
 *         schema:
 *           type: integer
 *         description: WhatsApp number ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateSessionRequest'
 *     responses:
 *       200:
 *         description: Session created or updated successfully
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
 *                   $ref: '#/components/schemas/WhatsAppSession'
 *       400:
 *         description: Invalid WhatsApp number ID
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       403:
 *         description: Forbidden - Admin role required
 *       404:
 *         description: WhatsApp number not found
 *       500:
 *         description: Internal server error
 *   get:
 *     summary: Get session by WhatsApp number ID
 *     description: Retrieve active session for a specific WhatsApp number
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: whatsappNumberId
 *         required: true
 *         schema:
 *           type: integer
 *         description: WhatsApp number ID
 *     responses:
 *       200:
 *         description: Session retrieved successfully
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
 *                   $ref: '#/components/schemas/WhatsAppSession'
 *       400:
 *         description: Invalid WhatsApp number ID
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       404:
 *         description: Active session not found for this WhatsApp number
 *       500:
 *         description: Internal server error
 */
router.post('/api/v1/sessions/:whatsappNumberId', authenticateToken, requireAdmin, createOrUpdateSession);
router.get('/api/v1/sessions/:whatsappNumberId', authenticateToken, getSessionByWhatsappNumber);

/**
 * @swagger
 * /api/v1/sessions:
 *   get:
 *     summary: Get all sessions with pagination
 *     description: Retrieve all WhatsApp sessions with filtering and pagination (Admin only)
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of sessions per page
 *       - in: query
 *         name: status
 *         schema:
 *           $ref: '#/components/schemas/SessionStatus'
 *         description: Filter by session status
 *       - in: query
 *         name: isActive
 *         schema:
 *           type: boolean
 *         description: Filter by active status
 *     responses:
 *       200:
 *         description: Sessions retrieved successfully
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
 *                     $ref: '#/components/schemas/WhatsAppSession'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     currentPage:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 *                     totalItems:
 *                       type: integer
 *                     itemsPerPage:
 *                       type: integer
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       403:
 *         description: Forbidden - Admin role required
 *       500:
 *         description: Internal server error
 */
router.get('/api/v1/sessions', authenticateToken, getAllSessions);

/**
 * @swagger
 * /api/v1/sessions/{sessionId}/status:
 *   patch:
 *     summary: Update session status
 *     description: Update the status of a WhatsApp session (Admin only)
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sessionId
 *         required: true
 *         schema:
 *           type: string
 *         description: Session ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateStatusRequest'
 *     responses:
 *       200:
 *         description: Session status updated successfully
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
 *                   $ref: '#/components/schemas/WhatsAppSession'
 *       400:
 *         description: Invalid session status
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       403:
 *         description: Forbidden - Admin role required
 *       404:
 *         description: Session not found
 *       500:
 *         description: Internal server error
 */
router.patch('/api/v1/sessions/:sessionId/status', authenticateToken, requireAdmin, updateSessionStatus);

/**
 * @swagger
 * /api/v1/sessions/{sessionId}/qr:
 *   get:
 *     summary: Get QR code for session
 *     description: Retrieve the QR code for a WhatsApp session
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sessionId
 *         required: true
 *         schema:
 *           type: string
 *         description: Session ID
 *     responses:
 *       200:
 *         description: QR code retrieved successfully
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
 *                   type: object
 *                   properties:
 *                     sessionId:
 *                       type: string
 *                     whatsappNumber:
 *                       $ref: '#/components/schemas/WhatsAppNumber'
 *                     qrCode:
 *                       type: string
 *                     status:
 *                       $ref: '#/components/schemas/SessionStatus'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       404:
 *         description: Session not found or QR code not available
 *       500:
 *         description: Internal server error
 */
router.get('/api/v1/sessions/:sessionId/qr', authenticateToken, getSessionQR);

/**
 * @swagger
 * /api/v1/sessions/{sessionId}:
 *   delete:
 *     summary: Deactivate session
 *     description: Deactivate (soft delete) a WhatsApp session (Admin only)
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sessionId
 *         required: true
 *         schema:
 *           type: string
 *         description: Session ID
 *     responses:
 *       200:
 *         description: Session deactivated successfully
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
 *         description: Unauthorized - Invalid or missing token
 *       403:
 *         description: Forbidden - Admin role required
 *       404:
 *         description: Session not found
 *       500:
 *         description: Internal server error
 */
router.delete('/api/v1/sessions/:sessionId', authenticateToken, deactivateSession);

/**
 * @swagger
 * /api/v1/sessions/{sessionId}/permanent:
 *   delete:
 *     summary: Permanently delete session
 *     description: Permanently delete a WhatsApp session from database (Admin only)
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sessionId
 *         required: true
 *         schema:
 *           type: string
 *         description: Session ID
 *     responses:
 *       200:
 *         description: Session deleted permanently
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
 *         description: Unauthorized - Invalid or missing token
 *       403:
 *         description: Forbidden - Admin role required
 *       404:
 *         description: Session not found
 *       500:
 *         description: Internal server error
 */
router.delete('/api/v1/sessions/:sessionId/permanent', authenticateToken, requireAdmin, deleteSession);

/**
 * @swagger
 * /api/v1/sessions/{sessionId}/send:
 *   post:
 *     summary: Send WhatsApp message
 *     description: Send a message through an active WhatsApp session (Admin only)
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sessionId
 *         required: true
 *         schema:
 *           type: string
 *         description: Session ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - to
 *               - message
 *             properties:
 *               to:
 *                 type: string
 *                 description: Recipient phone number (any format)
 *                 example: "08123456789"
 *               message:
 *                 type: string
 *                 description: Message text to send
 *                 example: "Hello from WaBox!"
 *     responses:
 *       200:
 *         description: Message sent successfully
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
 *                   type: object
 *                   properties:
 *                     sessionId:
 *                       type: string
 *                     from:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                         name:
 *                           type: string
 *                         phoneNumber:
 *                           type: string
 *                     to:
 *                       type: string
 *                     message:
 *                       type: string
 *                     messageId:
 *                       type: string
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *       400:
 *         description: Bad request - Missing required fields or session not active
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       403:
 *         description: Forbidden - Admin role required
 *       404:
 *         description: Session not found
 *       500:
 *         description: Internal server error or failed to send message
 */
router.post('/api/v1/sessions/:sessionId/send', authenticateToken, sendMessage);

export default router;
