import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

/**
 * Create WhatsApp number permission for a user
 * @route POST /api/v1/permissions
 * @access Admin only
 */
export const createPermission = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, whatsappNumberId } = req.body;

    // Validate input
    if (!userId || !whatsappNumberId) {
      res.status(400).json({
        success: false,
        message: 'userId and whatsappNumberId are required'
      });
      return;
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId) }
    });

    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found'
      });
      return;
    }

    // Check if WhatsApp number exists
    const whatsappNumber = await prisma.whatsAppNumber.findUnique({
      where: { id: parseInt(whatsappNumberId) }
    });

    if (!whatsappNumber) {
      res.status(404).json({
        success: false,
        message: 'WhatsApp number not found'
      });
      return;
    }

    // Check if permission already exists
    const existingPermission = await prisma.waNumberPermission.findFirst({
      where: {
        userId: parseInt(userId),
        whatsappNumberId: parseInt(whatsappNumberId)
      }
    });

    if (existingPermission) {
      res.status(409).json({
        success: false,
        message: 'Permission already exists for this user and WhatsApp number'
      });
      return;
    }

    // Create permission
    const permission = await prisma.waNumberPermission.create({
      data: {
        userId: parseInt(userId),
        whatsappNumberId: parseInt(whatsappNumberId)
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            username: true,
            email: true
          }
        },
        whatsappNumber: {
          select: {
            id: true,
            phoneNumber: true,
            name: true,
            isActive: true
          }
        }
      }
    });

    res.status(201).json({
      success: true,
      message: 'Permission created successfully',
      data: permission
    });

  } catch (error) {
    console.error('Create permission error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while creating permission'
    });
  }
};

/**
 * Get current user's WhatsApp permissions
 * @route GET /api/v1/permissions/me
 * @access Authenticated user
 */
export const getMyPermissions = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const userRole = req.user?.role;
    const username = req.user?.username;

    console.log('🔍 /permissions/me accessed by:', { userId, userRole, username });
    console.log('🔍 req.user object:', req.user);

    if (!userId) {
      console.log('❌ No userId in request - authentication failed');
      res.status(401).json({
        success: false,
        message: 'User not authenticated'
      });
      return;
    }

    console.log(`👤 Processing permissions for User ID: ${userId}, Role: ${userRole}`);

    // Admin gets all WhatsApp numbers (full access)
    if (userRole === 'ADMIN') {
      console.log('🔐 Admin user detected - retrieving all WhatsApp numbers');
      
      const allWhatsAppNumbers = await prisma.whatsAppNumber.findMany({
        select: {
          id: true,
          phoneNumber: true,
          name: true,
          isActive: true,
          createdAt: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      console.log(`📊 Found ${allWhatsAppNumbers.length} WhatsApp numbers for admin`);

      // Format response to match permission structure for consistency
      const adminPermissions = allWhatsAppNumbers.map(wa => ({
        id: null, // No actual permission record
        userId: userId,
        whatsappNumberId: wa.id,
        createdAt: new Date(), // Current time as mock creation
        updatedAt: new Date(),
        whatsappNumber: wa,
        isAdminAccess: true // Flag to indicate this is admin access
      }));

      res.status(200).json({
        success: true,
        message: 'Admin permissions retrieved successfully (full access)',
        data: adminPermissions,
        totalWhatsAppNumbers: allWhatsAppNumbers.length,
        accessLevel: 'ADMIN_FULL_ACCESS'
      });
      return;
    }

    console.log('👤 Regular user detected - retrieving specific permissions');

    // Regular user - get specific permissions only
    const permissions = await prisma.waNumberPermission.findMany({
      where: {
        userId: userId
      },
      include: {
        whatsappNumber: {
          select: {
            id: true,
            phoneNumber: true,
            name: true,
            isActive: true,
            createdAt: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log(`📊 Found ${permissions.length} specific permissions for user`);

    res.status(200).json({
      success: true,
      message: 'User permissions retrieved successfully',
      data: permissions,
      totalPermissions: permissions.length,
      accessLevel: 'USER_LIMITED_ACCESS'
    });

  } catch (error) {
    console.error('Get my permissions error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while retrieving permissions'
    });
  }
};

/**
 * Get all permissions (Admin only)
 * @route GET /api/v1/permissions
 * @access Admin only
 */
export const getAllPermissions = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, whatsappNumberId, limit = '50', offset = '0' } = req.query;

    const limitInt = parseInt(limit as string);
    const offsetInt = parseInt(offset as string);

    // Build filter conditions
    const whereConditions: any = {};

    if (userId) {
      whereConditions.userId = parseInt(userId as string);
    }

    if (whatsappNumberId) {
      whereConditions.whatsappNumberId = parseInt(whatsappNumberId as string);
    }

    const permissions = await prisma.waNumberPermission.findMany({
      where: whereConditions,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            username: true,
            email: true,
            role: true
          }
        },
        whatsappNumber: {
          select: {
            id: true,
            phoneNumber: true,
            name: true,
            isActive: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      skip: offsetInt,
      take: limitInt
    });

    // Get total count
    const total = await prisma.waNumberPermission.count({
      where: whereConditions
    });

    res.status(200).json({
      success: true,
      message: 'All permissions retrieved successfully',
      data: permissions,
      pagination: {
        limit: limitInt,
        offset: offsetInt,
        total: total
      }
    });

  } catch (error) {
    console.error('Get all permissions error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while retrieving permissions'
    });
  }
};

/**
 * Update permission (Admin only)
 * @route PUT /api/v1/permissions/:id
 * @access Admin only
 */
export const updatePermission = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { userId, whatsappNumberId } = req.body;

    const permissionId = parseInt(id);

    if (isNaN(permissionId)) {
      res.status(400).json({
        success: false,
        message: 'Invalid permission ID'
      });
      return;
    }

    // Check if permission exists
    const existingPermission = await prisma.waNumberPermission.findUnique({
      where: { id: permissionId }
    });

    if (!existingPermission) {
      res.status(404).json({
        success: false,
        message: 'Permission not found'
      });
      return;
    }

    // Prepare update data
    const updateData: any = {};

    if (userId) {
      // Validate user exists
      const user = await prisma.user.findUnique({
        where: { id: parseInt(userId) }
      });

      if (!user) {
        res.status(404).json({
          success: false,
          message: 'User not found'
        });
        return;
      }

      updateData.userId = parseInt(userId);
    }

    if (whatsappNumberId) {
      // Validate WhatsApp number exists
      const whatsappNumber = await prisma.whatsAppNumber.findUnique({
        where: { id: parseInt(whatsappNumberId) }
      });

      if (!whatsappNumber) {
        res.status(404).json({
          success: false,
          message: 'WhatsApp number not found'
        });
        return;
      }

      updateData.whatsappNumberId = parseInt(whatsappNumberId);
    }

    // Check for duplicate if updating user or whatsapp number
    if (updateData.userId || updateData.whatsappNumberId) {
      const checkUserId = updateData.userId || existingPermission.userId;
      const checkWhatsappNumberId = updateData.whatsappNumberId || existingPermission.whatsappNumberId;

      const duplicate = await prisma.waNumberPermission.findFirst({
        where: {
          userId: checkUserId,
          whatsappNumberId: checkWhatsappNumberId,
          id: { not: permissionId }
        }
      });

      if (duplicate) {
        res.status(409).json({
          success: false,
          message: 'Permission already exists for this user and WhatsApp number'
        });
        return;
      }
    }

    // Update permission
    const updatedPermission = await prisma.waNumberPermission.update({
      where: { id: permissionId },
      data: updateData,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            username: true,
            email: true
          }
        },
        whatsappNumber: {
          select: {
            id: true,
            phoneNumber: true,
            name: true,
            isActive: true
          }
        }
      }
    });

    res.status(200).json({
      success: true,
      message: 'Permission updated successfully',
      data: updatedPermission
    });

  } catch (error) {
    console.error('Update permission error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while updating permission'
    });
  }
};

/**
 * Delete permission (Admin only)
 * @route DELETE /api/v1/permissions/:id
 * @access Admin only
 */
export const deletePermission = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const permissionId = parseInt(id);

    if (isNaN(permissionId)) {
      res.status(400).json({
        success: false,
        message: 'Invalid permission ID'
      });
      return;
    }

    // Check if permission exists
    const existingPermission = await prisma.waNumberPermission.findUnique({
      where: { id: permissionId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            username: true
          }
        },
        whatsappNumber: {
          select: {
            id: true,
            phoneNumber: true,
            name: true
          }
        }
      }
    });

    if (!existingPermission) {
      res.status(404).json({
        success: false,
        message: 'Permission not found'
      });
      return;
    }

    // Delete permission
    await prisma.waNumberPermission.delete({
      where: { id: permissionId }
    });

    res.status(200).json({
      success: true,
      message: 'Permission deleted successfully',
      data: {
        deletedPermission: existingPermission
      }
    });

  } catch (error) {
    console.error('Delete permission error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while deleting permission'
    });
  }
};

/**
 * Check if current user has permission for specific WhatsApp number
 * @route GET /api/v1/permissions/check/:whatsappNumberId
 * @access Authenticated user
 */
export const checkPermission = async (req: Request, res: Response): Promise<void> => {
  try {
    const { whatsappNumberId } = req.params;
    const userId = req.user?.userId;
    const userRole = req.user?.role;

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'User not authenticated'
      });
      return;
    }

    const whatsappNumberIdInt = parseInt(whatsappNumberId);

    if (isNaN(whatsappNumberIdInt)) {
      res.status(400).json({
        success: false,
        message: 'Invalid WhatsApp number ID'
      });
      return;
    }

    // Admin has access to all WhatsApp numbers
    if (userRole === 'ADMIN') {
      res.status(200).json({
        success: true,
        message: 'Permission check completed',
        data: {
          hasPermission: true,
          reason: 'Admin access'
        }
      });
      return;
    }

    // Check specific permission for regular users
    const permission = await prisma.waNumberPermission.findFirst({
      where: {
        userId: userId,
        whatsappNumberId: whatsappNumberIdInt
      },
      include: {
        whatsappNumber: {
          select: {
            id: true,
            phoneNumber: true,
            name: true,
            isActive: true
          }
        }
      }
    });

    const hasPermission = !!permission;

    res.status(200).json({
      success: true,
      message: 'Permission check completed',
      data: {
        hasPermission: hasPermission,
        permission: permission,
        reason: hasPermission ? 'User has explicit permission' : 'No permission found'
      }
    });

  } catch (error) {
    console.error('Check permission error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while checking permission'
    });
  }
};

/**
 * Get permissions by user ID (Admin only)
 * @route GET /api/v1/permissions/user/:userId
 * @access Admin only
 */
export const getPermissionsByUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;

    const userIdInt = parseInt(userId);

    if (isNaN(userIdInt)) {
      res.status(400).json({
        success: false,
        message: 'Invalid user ID'
      });
      return;
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: userIdInt },
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        role: true
      }
    });

    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found'
      });
      return;
    }

    const permissions = await prisma.waNumberPermission.findMany({
      where: {
        userId: userIdInt
      },
      include: {
        whatsappNumber: {
          select: {
            id: true,
            phoneNumber: true,
            name: true,
            isActive: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.status(200).json({
      success: true,
      message: 'User permissions retrieved successfully',
      data: {
        user: user,
        permissions: permissions
      }
    });

  } catch (error) {
    console.error('Get permissions by user error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while retrieving user permissions'
    });
  }
};
