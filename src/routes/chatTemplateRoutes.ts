import { Router } from 'express';
import { authenticateToken } from '../utils/middleware';
import { createTemplate, getTemplates, getTemplateById, updateTemplate, deleteTemplate, getTemplateByCommand } from '../controllers/chatTemplateController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Chat Templates
 *   description: Manage chat message templates
 */

/**
 * @swagger
 * /api/v1/chat-templates:
 *   get:
 *     summary: List chat templates
 *     tags: [Chat Templates]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *       - in: query
 *         name: isActive
 *         schema:
 *           type: string
 *           enum: ["true", "false"]
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Search by name, content, or commands
 *       - in: query
 *         name: command
 *         schema:
 *           type: string
 *         description: Filter by exact caller command (e.g., "/greetings")
 *     responses:
 *       200:
 *         description: Chat templates retrieved
 */
router.get('/api/v1/chat-templates', authenticateToken, getTemplates);

/**
 * @swagger
 * /api/v1/chat-templates/{id}:
 *   get:
 *     summary: Get chat template by ID
 *     tags: [Chat Templates]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chat template retrieved
 */
router.get('/api/v1/chat-templates/:id', authenticateToken, getTemplateById);

/**
 * @swagger
 * /api/v1/chat-templates/by-command/{command}:
 *   get:
 *     summary: Get chat template by caller command
 *     tags: [Chat Templates]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: command
 *         required: true
 *         schema:
 *           type: string
 *         example: "/greetings"
 *     responses:
 *       200:
 *         description: Chat template retrieved
 */
router.get('/api/v1/chat-templates/by-command/:command', authenticateToken, getTemplateByCommand);

/**
 * @swagger
 * /api/v1/chat-templates:
 *   post:
 *     summary: Create chat template
 *     tags: [Chat Templates]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, content]
 *             properties:
 *               name:
 *                 type: string
 *               content:
 *                 type: string
 *               commands:
 *                 type: string
 *                 description: Caller command trigger (e.g., "/greetings")
 *               isActive:
 *                 type: boolean
 *           example:
 *             name: "*HALO* \n saya cs 1"
 *             content: "Terima kasih sudah menghubungi kami. Ada yang bisa dibantu?"
 *             commands: "/greetings"
 *             isActive: true
 *     responses:
 *       201:
 *         description: Chat template created
 */
router.post('/api/v1/chat-templates', authenticateToken, createTemplate);

/**
 * @swagger
 * /api/v1/chat-templates/{id}:
 *   put:
 *     summary: Update chat template
 *     tags: [Chat Templates]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               content:
 *                 type: string
 *               commands:
 *                 type: string
 *                 description: Caller command trigger (e.g., "/greetings")
 *               isActive:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Chat template updated
 */
router.put('/api/v1/chat-templates/:id', authenticateToken, updateTemplate);

/**
 * @swagger
 * /api/v1/chat-templates/{id}:
 *   delete:
 *     summary: Delete chat template
 *     tags: [Chat Templates]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chat template deleted
 */
router.delete('/api/v1/chat-templates/:id', authenticateToken, deleteTemplate);

export default router;
