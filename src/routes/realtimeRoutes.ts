import express from 'express';
import { authenticateToken, requireAdmin } from '../utils/middleware';
import { getRealtimeStatus, testBroadcast } from '../controllers/realtimeController';

const router = express.Router();

/**
 * @swagger
 * /api/v1/realtime/status:
 *   get:
 *     summary: Get real-time service status
 *     description: Check if Socket.io service is running and get connection statistics
 *     tags: [Real-time]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Real-time service status retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Real-time service is active"
 *                 data:
 *                   type: object
 *                   properties:
 *                     socketService:
 *                       type: string
 *                       example: "active"
 *                     connectedUsers:
 *                       type: number
 *                       example: 5
 *                     features:
 *                       type: array
 *                       items:
 *                         type: string
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
router.get('/status', authenticateToken, getRealtimeStatus);

/**
 * @swagger
 * /api/v1/realtime/test-broadcast:
 *   post:
 *     summary: Test broadcast message (Admin only)
 *     description: Send a test broadcast message via Socket.io for testing purposes
 *     tags: [Real-time]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - whatsappNumberId
 *               - message
 *             properties:
 *               whatsappNumberId:
 *                 type: number
 *                 description: WhatsApp number ID to broadcast to
 *                 example: 1
 *               message:
 *                 type: string
 *                 description: Test message to broadcast
 *                 example: "This is a test broadcast message"
 *               type:
 *                 type: string
 *                 description: Type of broadcast
 *                 example: "test"
 *                 default: "test"
 *     responses:
 *       200:
 *         description: Test broadcast sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Test broadcast sent successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     whatsappNumberId:
 *                       type: number
 *                       example: 1
 *                     message:
 *                       type: string
 *                       example: "This is a test broadcast message"
 *                     type:
 *                       type: string
 *                       example: "test"
 *                     broadcasted:
 *                       type: boolean
 *                       example: true
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       403:
 *         $ref: '#/components/responses/Forbidden'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
router.post('/test-broadcast', authenticateToken, requireAdmin, testBroadcast);

export default router;
