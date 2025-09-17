import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

// Helper: format permission response
const formatPermission = (perm: any) => ({
  id: perm.id,
  userId: perm.userId,
  whatsappNumberId: perm.whatsappNumberId,
  whatsappNumber: perm.whatsappNumber ? {
    id: perm.whatsappNumber.id,
    name: perm.whatsappNumber.name,
    phoneNumber: perm.whatsappNumber.phoneNumber,
    isActive: perm.whatsappNumber.isActive
  } : undefined,
  createdAt: perm.createdAt,
  updatedAt: perm.updatedAt
});

// Helper: format WhatsAppNumber response
const formatWhatsAppNumber = (n: any) => ({
  id: n.id,
  name: n.name,
  phoneNumber: n.phoneNumber,
  isActive: n.isActive,
  createdAt: n.createdAt
});

/**
 * Create permission (assign WhatsApp number to a user)
 * - Non-admin: can only create for themselves
 * - Admin: can create for any user
 * @route POST /api/v1/wapermission
 */
export const createPermission = async (req: Request, res: Response): Promise<void> => {
  try {
    const requester = req.user; // set by auth middleware
    const { userId: bodyUserId, whatsappNumberId } = req.body;

    if (!whatsappNumberId) {
      res.status(400).json({ success: false, message: 'whatsappNumberId is required' });
      return;
    }

    // Determine target userId
    const targetUserId = (requester?.role === 'ADMIN' && bodyUserId) ? Number(bodyUserId) : requester?.userId;

    if (!targetUserId) {
      res.status(401).json({ success: false, message: 'User not authenticated' });
      return;
    }

    const waId = Number(whatsappNumberId);
    if (isNaN(waId)) {
      res.status(400).json({ success: false, message: 'Invalid whatsappNumberId' });
      return;
    }

    // If non-admin tries to create for another user -> forbidden
    if (requester?.role !== 'ADMIN' && bodyUserId && Number(bodyUserId) !== requester?.userId) {
      res.status(403).json({ success: false, message: 'You can only create permissions for yourself' });
      return;
    }

    // Validate target user exists
    const user = await prisma.user.findUnique({ where: { id: targetUserId } });
    if (!user) {
      res.status(404).json({ success: false, message: 'User not found' });
      return;
    }

    // Validate WhatsApp number exists
    const waNumber = await prisma.whatsAppNumber.findUnique({ where: { id: waId } });
    if (!waNumber) {
      res.status(404).json({ success: false, message: 'WhatsApp number not found' });
      return;
    }

    // Check duplicate
    const existing = await prisma.waNumberPermission.findUnique({
      where: { userId_whatsappNumberId: { userId: targetUserId, whatsappNumberId: waId } }
    });

    if (existing) {
      res.status(409).json({ success: false, message: 'Permission already exists for this user and WhatsApp number' });
      return;
    }

    const created = await prisma.waNumberPermission.create({
      data: { userId: targetUserId, whatsappNumberId: waId },
      include: { whatsappNumber: true }
    });

    res.status(201).json({
      success: true,
      message: 'Permission created successfully',
      data: formatPermission(created)
    });
  } catch (error) {
    console.error('Create permission error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Get permissions for current user (from middleware)
 * @route GET /api/v1/wapermission/me
 */
export const getMyPermissions = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      res.status(401).json({ success: false, message: 'User not authenticated' });
      return;
    }

    const permissions = await prisma.waNumberPermission.findMany({
      where: { userId },
      include: { whatsappNumber: true },
      orderBy: { createdAt: 'desc' }
    });

    res.json({
      success: true,
      message: 'Permissions retrieved successfully',
      data: permissions.map(formatPermission)
    });
  } catch (error) {
    console.error('Get my permissions error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Get permissions by user id
 * - Non-admin can only view their own permissions
 * - Admin can view any user
 *   - If the target user has ADMIN role, return all WhatsApp numbers as permission-shaped objects
 * @route GET /api/v1/wapermission/user/:userId
 */
export const getPermissionsByUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const requester = req.user;
    const paramUserId = Number(req.params.userId);
    if (isNaN(paramUserId)) {
      res.status(400).json({ success: false, message: 'Invalid userId' });
      return;
    }

    if (!requester) {
      res.status(401).json({ success: false, message: 'User not authenticated' });
      return;
    }

    if (requester.role !== 'ADMIN' && requester.userId !== paramUserId) {
      res.status(403).json({ success: false, message: 'Forbidden' });
      return;
    }

    // Fetch target user to determine role
    const targetUser = await prisma.user.findUnique({ where: { id: paramUserId } });
    if (!targetUser) {
      res.status(404).json({ success: false, message: 'User not found' });
      return;
    }

    // If target user is an ADMIN, return all WhatsApp numbers formatted as permissions
    if (targetUser.role === 'ADMIN') {
      const [numbers, existingPerms] = await Promise.all([
        prisma.whatsAppNumber.findMany({ orderBy: { createdAt: 'desc' } }),
        prisma.waNumberPermission.findMany({ where: { userId: paramUserId } })
      ]);

      const permByNumberId = new Map<number, any>(existingPerms.map(p => [p.whatsappNumberId, p]));
      const data = numbers.map(n => {
        const p = permByNumberId.get(n.id);
        return formatPermission({
          id: p?.id ?? null,
          userId: paramUserId,
          whatsappNumberId: n.id,
          whatsappNumber: n,
          createdAt: p?.createdAt ?? null,
          updatedAt: p?.updatedAt ?? null
        });
      });

      res.json({
        success: true,
        message: 'Permissions retrieved successfully',
        data
      });
      return;
    }

    // Otherwise, return that user's permissions
    const permissions = await prisma.waNumberPermission.findMany({
      where: { userId: paramUserId },
      include: { whatsappNumber: true },
      orderBy: { createdAt: 'desc' }
    });

    res.json({
      success: true,
      message: 'Permissions retrieved successfully',
      data: permissions.map(formatPermission)
    });
  } catch (error) {
    console.error('Get permissions by user error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Get all permissions (paginated)
 * - Admin: all users
 * - Non-admin: only own permissions
 * @route GET /api/v1/wapermission
 */
export const getAllPermissions = async (req: Request, res: Response): Promise<void> => {
  try {
    const requester = req.user;
    if (!requester) {
      res.status(401).json({ success: false, message: 'User not authenticated' });
      return;
    }

    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 10);
    const skip = (page - 1) * limit;

    const where: any = {};
    if (requester.role !== 'ADMIN') {
      where.userId = requester.userId;
    }

    const [items, total] = await Promise.all([
      prisma.waNumberPermission.findMany({
        where,
        include: { whatsappNumber: true },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.waNumberPermission.count({ where })
    ]);

    res.json({
      success: true,
      message: 'Permissions retrieved successfully',
      data: items.map(formatPermission),
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalItems: total,
        limit
      }
    });
  } catch (error) {
    console.error('Get all permissions error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Delete a permission by ID
 * - Non-admin: can only delete own permission
 * - Admin: can delete any permission
 * @route DELETE /api/v1/wapermission/:id
 */
export const deletePermission = async (req: Request, res: Response): Promise<void> => {
  try {
    const requester = req.user;
    const id = Number(req.params.id);

    if (!requester) {
      res.status(401).json({ success: false, message: 'User not authenticated' });
      return;
    }

    if (isNaN(id)) {
      res.status(400).json({ success: false, message: 'Invalid permission id' });
      return;
    }

    const permission = await prisma.waNumberPermission.findUnique({
      where: { id },
      include: { whatsappNumber: true }
    });

    if (!permission) {
      res.status(404).json({ success: false, message: 'Permission not found' });
      return;
    }

    // Authorization check
    if (requester.role !== 'ADMIN' && permission.userId !== requester.userId) {
      res.status(403).json({ success: false, message: 'Forbidden' });
      return;
    }

    await prisma.waNumberPermission.delete({ where: { id } });

    res.json({
      success: true,
      message: 'Permission deleted successfully',
      data: formatPermission(permission)
    });
  } catch (error) {
    console.error('Delete permission error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
