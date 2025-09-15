import { Router } from 'express';
import { 
  getWhatsAppNumbers, 
  createWhatsAppNumber, 
  getWhatsAppNumberById, 
  updateWhatsAppNumber, 
  deleteWhatsAppNumber,
  toggleWhatsAppNumberStatus
} from '../controllers/whatsappController';
import { authenticateToken, requireAdmin } from '../utils/middleware';

const router = Router();

// All WhatsApp routes require authentication
router.use(authenticateToken);

/**
 * @swagger
 * /api/v1/whatsapp:
 *   get:
 *     summary: Get all WhatsApp numbers
 *     description: Retrieve all WhatsApp numbers with pagination and filtering
 *     tags: [WhatsApp Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of items per page
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search term for name or phone number
 *       - in: query
 *         name: isActive
 *         schema:
 *           type: boolean
 *         description: Filter by active status
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           default: createdAt
 *         description: Field to sort by
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: desc
 *         description: Sort order
 *     responses:
 *       200:
 *         description: WhatsApp numbers retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WhatsAppNumbersResponse'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get('/api/v1/whatsapp', getWhatsAppNumbers);

/**
 * @swagger
 * /api/v1/whatsapp:
 *   post:
 *     summary: Create new WhatsApp number (Admin only)
 *     description: Add a new WhatsApp number to the system
 *     tags: [WhatsApp Management]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateWhatsAppNumberRequest'
 *           example:
 *             name: "Customer Service 1"
 *             phoneNumber: "+6281234567890"
 *             isActive: false
 *     responses:
 *       201:
 *         description: WhatsApp number created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 whatsappNumber:
 *                   $ref: '#/components/schemas/WhatsAppNumber'
 *       400:
 *         description: Bad request - Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       403:
 *         description: Forbidden - Admin access required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       409:
 *         description: Conflict - Phone number already exists
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post('/api/v1/whatsapp', requireAdmin, createWhatsAppNumber);

/**
 * @swagger
 * /api/v1/whatsapp/{id}:
 *   get:
 *     summary: Get WhatsApp number by ID
 *     description: Retrieve a specific WhatsApp number by its ID
 *     tags: [WhatsApp Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: WhatsApp number ID
 *     responses:
 *       200:
 *         description: WhatsApp number retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 whatsappNumber:
 *                   $ref: '#/components/schemas/WhatsAppNumber'
 *       400:
 *         description: Bad request - Invalid ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: WhatsApp number not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get('/api/v1/whatsapp/:id', getWhatsAppNumberById);

/**
 * @swagger
 * /api/v1/whatsapp/{id}:
 *   put:
 *     summary: Update WhatsApp number (Admin only)
 *     description: Update an existing WhatsApp number's information
 *     tags: [WhatsApp Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: WhatsApp number ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Display name for the WhatsApp number
 *               phoneNumber:
 *                 type: string
 *                 description: WhatsApp phone number
 *               isActive:
 *                 type: boolean
 *                 description: Whether the number is active
 *           example:
 *             name: "Customer Service 1 - Updated"
 *             isActive: true
 *     responses:
 *       200:
 *         description: WhatsApp number updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 whatsappNumber:
 *                   $ref: '#/components/schemas/WhatsAppNumber'
 *       400:
 *         description: Bad request - Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       403:
 *         description: Forbidden - Admin access required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: WhatsApp number not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       409:
 *         description: Conflict - Phone number already exists
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.put('/api/v1/whatsapp/:id', requireAdmin, updateWhatsAppNumber);

/**
 * @swagger
 * /api/v1/whatsapp/{id}:
 *   delete:
 *     summary: Delete WhatsApp number (Admin only)
 *     description: Remove a WhatsApp number from the system
 *     tags: [WhatsApp Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: WhatsApp number ID
 *     responses:
 *       200:
 *         description: WhatsApp number deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "WhatsApp number deleted successfully"
 *       400:
 *         description: Bad request - Invalid ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       403:
 *         description: Forbidden - Admin access required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: WhatsApp number not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.delete('/api/v1/whatsapp/:id', requireAdmin, deleteWhatsAppNumber);

/**
 * @swagger
 * /api/v1/whatsapp/{id}/toggle-status:
 *   patch:
 *     summary: Toggle WhatsApp number status (Admin only)
 *     description: Toggle the active/inactive status of a WhatsApp number
 *     tags: [WhatsApp Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: WhatsApp number ID
 *     responses:
 *       200:
 *         description: WhatsApp number status toggled successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "WhatsApp number activated successfully"
 *                 whatsappNumber:
 *                   $ref: '#/components/schemas/WhatsAppNumber'
 *       400:
 *         description: Bad request - Invalid ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       403:
 *         description: Forbidden - Admin access required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: WhatsApp number not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.patch('/api/v1/whatsapp/:id/toggle-status', requireAdmin, toggleWhatsAppNumberStatus);

export default router;
