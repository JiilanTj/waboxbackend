import { Router } from 'express';
import { authenticateToken, requireAdmin } from '../utils/auth';
import {
  createPermission,
  getMyPermissions,
  getAllPermissions,
  updatePermission,
  deletePermission,
  checkPermission,
  getPermissionsByUser
} from '../controllers/permissionController';

const router = Router();

/**
 * @swagger
 * /api/v1/permissions:
 *   post:
 *     summary: Create WhatsApp number permission for a user
 *     tags: [Permissions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - whatsappNumberId
 *             properties:
 *               userId:
 *                 type: integer
 *                 description: ID of the user to grant permission to
 *               whatsappNumberId:
 *                 type: integer
 *                 description: ID of the WhatsApp number
 *           example:
 *             userId: 2
 *             whatsappNumberId: 1
 *     responses:
 *       201:
 *         description: Permission created successfully
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: User or WhatsApp number not found
 *       409:
 *         description: Permission already exists
 */
router.post('/', authenticateToken, requireAdmin, createPermission);

/**
 * @swagger
 * /api/v1/permissions:
 *   get:
 *     summary: Get all permissions (Admin only)
 *     tags: [Permissions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: userId
 *         schema:
 *           type: integer
 *         description: Filter by user ID
 *       - in: query
 *         name: whatsappNumberId
 *         schema:
 *           type: integer
 *         description: Filter by WhatsApp number ID
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 50
 *         description: Number of permissions to return
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *         description: Number of permissions to skip
 *     responses:
 *       200:
 *         description: All permissions retrieved successfully
 */
router.get('/', authenticateToken, requireAdmin, getAllPermissions);

/**
 * @swagger
 * /api/v1/permissions/me:
 *   get:
 *     summary: Get current user's WhatsApp permissions
 *     description: |
 *       Returns WhatsApp permissions for the current user:
 *       - **Admin users**: Returns all WhatsApp numbers (full access)
 *       - **Regular users**: Returns only WhatsApp numbers they have explicit permission for
 *     tags: [Permissions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User permissions retrieved successfully
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
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         nullable: true
 *                         description: Permission record ID (null for admin access)
 *                       userId:
 *                         type: integer
 *                       whatsappNumberId:
 *                         type: integer
 *                       isAdminAccess:
 *                         type: boolean
 *                         description: True if this is admin full access (not explicit permission)
 *                       whatsappNumber:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                           phoneNumber:
 *                             type: string
 *                           name:
 *                             type: string
 *                           isActive:
 *                             type: boolean
 *                 totalWhatsAppNumbers:
 *                   type: integer
 *                   description: Total count (for admin users)
 *                 totalPermissions:
 *                   type: integer
 *                   description: Permission count (for regular users)
 *                 accessLevel:
 *                   type: string
 *                   enum: [ADMIN_FULL_ACCESS, USER_LIMITED_ACCESS]
 *             examples:
 *               admin_response:
 *                 summary: Admin user response
 *                 value:
 *                   success: true
 *                   message: "Admin permissions retrieved successfully (full access)"
 *                   data: [
 *                     {
 *                       id: null,
 *                       userId: 1,
 *                       whatsappNumberId: 1,
 *                       isAdminAccess: true,
 *                       whatsappNumber: {
 *                         id: 1,
 *                         phoneNumber: "628123456789",
 *                         name: "Customer Service",
 *                         isActive: true
 *                       }
 *                     }
 *                   ]
 *                   totalWhatsAppNumbers: 3
 *                   accessLevel: "ADMIN_FULL_ACCESS"
 *               user_response:
 *                 summary: Regular user response
 *                 value:
 *                   success: true
 *                   message: "User permissions retrieved successfully"
 *                   data: [
 *                     {
 *                       id: 5,
 *                       userId: 2,
 *                       whatsappNumberId: 1,
 *                       isAdminAccess: false,
 *                       whatsappNumber: {
 *                         id: 1,
 *                         phoneNumber: "628123456789",
 *                         name: "Customer Service",
 *                         isActive: true
 *                       }
 *                     }
 *                   ]
 *                   totalPermissions: 2
 *                   accessLevel: "USER_LIMITED_ACCESS"
 */
router.get('/me', (req, res, next) => {
  console.log('🎯 /permissions/me route HIT!');
  console.log('🎯 Request path:', req.path);
  console.log('🎯 Request method:', req.method);
  next();
}, authenticateToken, getMyPermissions);

/**
 * @swagger
 * /api/v1/permissions/check/{whatsappNumberId}:
 *   get:
 *     summary: Check if current user has permission for specific WhatsApp number
 *     tags: [Permissions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: whatsappNumberId
 *         required: true
 *         schema:
 *           type: integer
 *         description: WhatsApp number ID to check permission for
 *     responses:
 *       200:
 *         description: Permission check completed
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
 *                     hasPermission:
 *                       type: boolean
 *                     permission:
 *                       type: object
 *                     reason:
 *                       type: string
 *       400:
 *         description: Invalid WhatsApp number ID
 */
router.get('/check/:whatsappNumberId', authenticateToken, checkPermission);

/**
 * @swagger
 * /api/v1/permissions/user/{userId}:
 *   get:
 *     summary: Get permissions by user ID (Admin only)
 *     tags: [Permissions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID to get permissions for
 *     responses:
 *       200:
 *         description: User permissions retrieved successfully
 *       404:
 *         description: User not found
 */
router.get('/user/:userId', authenticateToken, requireAdmin, getPermissionsByUser);

/**
 * @swagger
 * /api/v1/permissions/{id}:
 *   put:
 *     summary: Update permission (Admin only)
 *     tags: [Permissions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Permission ID to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 description: New user ID (optional)
 *               whatsappNumberId:
 *                 type: integer
 *                 description: New WhatsApp number ID (optional)
 *           example:
 *             userId: 3
 *             whatsappNumberId: 2
 *     responses:
 *       200:
 *         description: Permission updated successfully
 *       400:
 *         description: Invalid permission ID
 *       404:
 *         description: Permission not found
 *       409:
 *         description: Permission already exists for this user and WhatsApp number
 */
router.put('/:id', authenticateToken, requireAdmin, updatePermission);

/**
 * @swagger
 * /api/v1/permissions/{id}:
 *   delete:
 *     summary: Delete permission (Admin only)
 *     tags: [Permissions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Permission ID to delete
 *     responses:
 *       200:
 *         description: Permission deleted successfully
 *       400:
 *         description: Invalid permission ID
 *       404:
 *         description: Permission not found
 */
router.delete('/:id', authenticateToken, requireAdmin, deletePermission);

export default router;
