import { Router } from 'express';
import { getHealth, getApiInfo } from '../controllers/appController';

const router = Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check
 *     description: Check if the API server is running
 *     tags: [System]
 *     security: []
 *     responses:
 *       200:
 *         description: Server is running
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "OK"
 *                 message:
 *                   type: string
 *                   example: "WaBox Backend is running"
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 */
router.get('/health', getHealth);

/**
 * @swagger
 * /api:
 *   get:
 *     summary: API information
 *     description: Get basic API information and version
 *     tags: [System]
 *     security: []
 *     responses:
 *       200:
 *         description: API information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "WaBox Backend API"
 *                 version:
 *                   type: string
 *                   example: "1.0.0"
 *                 description:
 *                   type: string
 *                   example: "Backend untuk aplikasi pengelola pesan WhatsApp multi-account dan multi-CS"
 */
router.get('/api', getApiInfo);

export default router;
