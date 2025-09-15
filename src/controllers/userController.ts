import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { PrismaClient, UserRole } from '../generated/prisma';

const prisma = new PrismaClient();

// Get all users with pagination and filtering (Admin only)
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      page = 1,
      limit = 10,
      search = '',
      role,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);
    const skip = (pageNum - 1) * limitNum;

    // Build where clause
    const where: any = {};
    
    if (search) {
      where.OR = [
        { name: { contains: search as string } },
        { username: { contains: search as string } },
        { email: { contains: search as string } }
      ];
    }

    if (role) {
      where.role = role as UserRole;
    }

    // Get users with pagination
    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
          role: true,
          createdAt: true,
          updatedAt: true
        },
        orderBy: {
          [sortBy as string]: sortOrder as 'asc' | 'desc'
        },
        skip,
        take: limitNum
      }),
      prisma.user.count({ where })
    ]);

    const totalPages = Math.ceil(total / limitNum);

    res.json({
      users,
      pagination: {
        currentPage: pageNum,
        totalPages,
        totalUsers: total,
        limit: limitNum,
        hasNextPage: pageNum < totalPages,
        hasPrevPage: pageNum > 1
      }
    });

  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Something went wrong while fetching users'
    });
  }
};

// Create new user (Admin only)
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, username, email, role = 'USER', password } = req.body;

    // Validation
    if (!name || !username || !email || !password) {
      res.status(400).json({
        error: 'Bad Request',
        message: 'Name, username, email, and password are required'
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        error: 'Bad Request',
        message: 'Invalid email format'
      });
      return;
    }

    // Validate password strength
    if (password.length < 6) {
      res.status(400).json({
        error: 'Bad Request',
        message: 'Password must be at least 6 characters long'
      });
      return;
    }

    // Validate role
    if (role && !['USER', 'ADMIN'].includes(role)) {
      res.status(400).json({
        error: 'Bad Request',
        message: 'Role must be either USER or ADMIN'
      });
      return;
    }

    // Check if username or email already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { username: username },
          { email: email }
        ]
      }
    });

    if (existingUser) {
      res.status(409).json({
        error: 'Conflict',
        message: existingUser.username === username 
          ? 'Username already exists' 
          : 'Email already exists'
      });
      return;
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const newUser = await prisma.user.create({
      data: {
        name,
        username,
        email,
        role: role as UserRole,
        password: hashedPassword
      },
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    });

    res.status(201).json({
      message: 'User created successfully',
      user: newUser
    });

  } catch (error) {
    console.error('Create user error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Something went wrong while creating user'
    });
  }
};

// Get single user by ID (Admin only)
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = parseInt(id);

    if (isNaN(userId)) {
      res.status(400).json({
        error: 'Bad Request',
        message: 'Invalid user ID'
      });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    });

    if (!user) {
      res.status(404).json({
        error: 'Not Found',
        message: 'User not found'
      });
      return;
    }

    res.json({
      user
    });

  } catch (error) {
    console.error('Get user by ID error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Something went wrong while fetching user'
    });
  }
};

// Update user (Admin only)
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = parseInt(id);
    const { name, username, email, role, password } = req.body;

    if (isNaN(userId)) {
      res.status(400).json({
        error: 'Bad Request',
        message: 'Invalid user ID'
      });
      return;
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!existingUser) {
      res.status(404).json({
        error: 'Not Found',
        message: 'User not found'
      });
      return;
    }

    // Prepare update data
    const updateData: any = {};
    
    if (name) updateData.name = name;
    if (username) updateData.username = username;
    if (email) updateData.email = email;
    if (role) updateData.role = role as UserRole;
    
    if (password) {
      if (password.length < 6) {
        res.status(400).json({
          error: 'Bad Request',
          message: 'Password must be at least 6 characters long'
        });
        return;
      }
      const saltRounds = 12;
      updateData.password = await bcrypt.hash(password, saltRounds);
    }

    // Check for duplicate username/email
    if (username || email) {
      const duplicateUser = await prisma.user.findFirst({
        where: {
          AND: [
            { id: { not: userId } },
            {
              OR: [
                username ? { username } : {},
                email ? { email } : {}
              ].filter(obj => Object.keys(obj).length > 0)
            }
          ]
        }
      });

      if (duplicateUser) {
        res.status(409).json({
          error: 'Conflict',
          message: duplicateUser.username === username 
            ? 'Username already exists' 
            : 'Email already exists'
        });
        return;
      }
    }

    // Update user
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    });

    res.json({
      message: 'User updated successfully',
      user: updatedUser
    });

  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Something went wrong while updating user'
    });
  }
};

// Delete user (Admin only)
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = parseInt(id);
    const currentUserId = (req as any).user.userId;

    if (isNaN(userId)) {
      res.status(400).json({
        error: 'Bad Request',
        message: 'Invalid user ID'
      });
      return;
    }

    // Prevent admin from deleting themselves
    if (userId === currentUserId) {
      res.status(400).json({
        error: 'Bad Request',
        message: 'You cannot delete your own account'
      });
      return;
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!existingUser) {
      res.status(404).json({
        error: 'Not Found',
        message: 'User not found'
      });
      return;
    }

    // Delete user
    await prisma.user.delete({
      where: { id: userId }
    });

    res.json({
      message: 'User deleted successfully'
    });

  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Something went wrong while deleting user'
    });
  }
};
