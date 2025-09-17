import { Router } from 'express';
import {
  createPermission,
  getMyPermissions,
  getPermissionsByUser,
  getAllPermissions,
  deletePermission
} from '../controllers/permissionController';
import { authenticateToken } from '../utils/middleware';

const router = Router();

// All WaNumberPermission routes require authentication
router.use(authenticateToken);

/**
 * @swagger
 * /api/v1/wapermission:
 *   post:
 *     summary: Create a WhatsApp number permission
 *     description: Assign a WhatsApp number to a user. Non-admin users can only assign to themselves. Admins can assign to any user by providing userId.
 *     tags: [WaPermissions]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               whatsappNumberId:
 *                 type: integer
 *               userId:
 *                 type: integer
 *                 description: Optional (admin only) - target user ID. If omitted, current user is used.
 *           example:
 *             whatsappNumberId: 1
 *             userId: 2
 *     responses:
 *       201:
 *         description: Permission created successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: User or WhatsApp number not found
 *       409:
 *         description: Permission already exists
 */
router.post('/api/v1/wapermission', createPermission);

/**
 * @swagger
 * /api/v1/wapermission/me:
 *   get:
 *     summary: Get my WhatsApp number permissions
 *     tags: [WaPermissions]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Permissions retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.get('/api/v1/wapermission/me', getMyPermissions);

/**
 * @swagger
 * /api/v1/wapermission/user/{userId}:
 *   get:
 *     summary: Get permissions by user ID
 *     description: Admins can view any user's permissions. Non-admins can only view their own. If the target user is an ADMIN, the endpoint returns all permissions.
 *     tags: [WaPermissions]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Permissions retrieved successfully
 *       400:
 *         description: Invalid userId
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.get('/api/v1/wapermission/user/:userId', getPermissionsByUser);

/**
 * @swagger
 * /api/v1/wapermission:
 *   get:
 *     summary: Get all permissions (paginated)
 *     description: Admins get all. Non-admins get only their own.
 *     tags: [WaPermissions]
 *     security:
 *       - BearerAuth: []
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
 *     responses:
 *       200:
 *         description: Permissions retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.get('/api/v1/wapermission', getAllPermissions);

/**
 * @swagger
 * /api/v1/wapermission/{id}:
 *   delete:
 *     summary: Delete a permission by ID
 *     description: Admins can delete any; non-admins can only delete their own permissions.
 *     tags: [WaPermissions]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: WaNumberPermission ID (primary key)
 *     responses:
 *       200:
 *         description: Permission deleted successfully
 *       400:
 *         description: Invalid permission id
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Permission not found
 */
router.delete('/api/v1/wapermission/:id', deletePermission);

export default router;
