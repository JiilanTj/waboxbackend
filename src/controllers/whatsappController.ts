import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

// Get all WhatsApp numbers with pagination and filtering
export const getWhatsAppNumbers = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      page = 1,
      limit = 10,
      search = '',
      isActive,
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
        { phoneNumber: { contains: search as string } }
      ];
    }

    if (isActive !== undefined) {
      where.isActive = isActive === 'true';
    }

    // Get WhatsApp numbers with pagination
    const [whatsappNumbers, total] = await Promise.all([
      prisma.whatsAppNumber.findMany({
        where,
        orderBy: {
          [sortBy as string]: sortOrder as 'asc' | 'desc'
        },
        skip,
        take: limitNum
      }),
      prisma.whatsAppNumber.count({ where })
    ]);

    const totalPages = Math.ceil(total / limitNum);

    res.json({
      whatsappNumbers,
      pagination: {
        currentPage: pageNum,
        totalPages,
        totalNumbers: total,
        limit: limitNum,
        hasNextPage: pageNum < totalPages,
        hasPrevPage: pageNum > 1
      }
    });

  } catch (error) {
    console.error('Get WhatsApp numbers error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Something went wrong while fetching WhatsApp numbers'
    });
  }
};

// Create new WhatsApp number
export const createWhatsAppNumber = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, phoneNumber, isActive = false } = req.body;

    // Validation
    if (!name || !phoneNumber) {
      res.status(400).json({
        error: 'Bad Request',
        message: 'Name and phone number are required'
      });
      return;
    }

    // Validate phone number format (basic validation)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      res.status(400).json({
        error: 'Bad Request',
        message: 'Invalid phone number format'
      });
      return;
    }

    // Check if phone number already exists
    const existingNumber = await prisma.whatsAppNumber.findUnique({
      where: { phoneNumber }
    });

    if (existingNumber) {
      res.status(409).json({
        error: 'Conflict',
        message: 'Phone number already exists'
      });
      return;
    }

    // Create WhatsApp number
    const newWhatsAppNumber = await prisma.whatsAppNumber.create({
      data: {
        name,
        phoneNumber,
        isActive: Boolean(isActive)
      }
    });

    res.status(201).json({
      message: 'WhatsApp number created successfully',
      whatsappNumber: newWhatsAppNumber
    });

  } catch (error) {
    console.error('Create WhatsApp number error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Something went wrong while creating WhatsApp number'
    });
  }
};

// Get single WhatsApp number by ID
export const getWhatsAppNumberById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const numberId = parseInt(id);

    if (isNaN(numberId)) {
      res.status(400).json({
        error: 'Bad Request',
        message: 'Invalid WhatsApp number ID'
      });
      return;
    }

    const whatsappNumber = await prisma.whatsAppNumber.findUnique({
      where: { id: numberId }
    });

    if (!whatsappNumber) {
      res.status(404).json({
        error: 'Not Found',
        message: 'WhatsApp number not found'
      });
      return;
    }

    res.json({
      whatsappNumber
    });

  } catch (error) {
    console.error('Get WhatsApp number by ID error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Something went wrong while fetching WhatsApp number'
    });
  }
};

// Update WhatsApp number
export const updateWhatsAppNumber = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const numberId = parseInt(id);
    const { name, phoneNumber, isActive } = req.body;

    if (isNaN(numberId)) {
      res.status(400).json({
        error: 'Bad Request',
        message: 'Invalid WhatsApp number ID'
      });
      return;
    }

    // Check if WhatsApp number exists
    const existingNumber = await prisma.whatsAppNumber.findUnique({
      where: { id: numberId }
    });

    if (!existingNumber) {
      res.status(404).json({
        error: 'Not Found',
        message: 'WhatsApp number not found'
      });
      return;
    }

    // Prepare update data
    const updateData: any = {};
    
    if (name) updateData.name = name;
    if (isActive !== undefined) updateData.isActive = Boolean(isActive);
    
    if (phoneNumber) {
      // Validate phone number format
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(phoneNumber)) {
        res.status(400).json({
          error: 'Bad Request',
          message: 'Invalid phone number format'
        });
        return;
      }

      // Check for duplicate phone number
      const duplicateNumber = await prisma.whatsAppNumber.findFirst({
        where: {
          AND: [
            { id: { not: numberId } },
            { phoneNumber }
          ]
        }
      });

      if (duplicateNumber) {
        res.status(409).json({
          error: 'Conflict',
          message: 'Phone number already exists'
        });
        return;
      }

      updateData.phoneNumber = phoneNumber;
    }

    // Update WhatsApp number
    const updatedNumber = await prisma.whatsAppNumber.update({
      where: { id: numberId },
      data: updateData
    });

    res.json({
      message: 'WhatsApp number updated successfully',
      whatsappNumber: updatedNumber
    });

  } catch (error) {
    console.error('Update WhatsApp number error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Something went wrong while updating WhatsApp number'
    });
  }
};

// Delete WhatsApp number
export const deleteWhatsAppNumber = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const numberId = parseInt(id);

    if (isNaN(numberId)) {
      res.status(400).json({
        error: 'Bad Request',
        message: 'Invalid WhatsApp number ID'
      });
      return;
    }

    // Check if WhatsApp number exists
    const existingNumber = await prisma.whatsAppNumber.findUnique({
      where: { id: numberId }
    });

    if (!existingNumber) {
      res.status(404).json({
        error: 'Not Found',
        message: 'WhatsApp number not found'
      });
      return;
    }

    // Delete WhatsApp number
    await prisma.whatsAppNumber.delete({
      where: { id: numberId }
    });

    res.json({
      message: 'WhatsApp number deleted successfully'
    });

  } catch (error) {
    console.error('Delete WhatsApp number error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Something went wrong while deleting WhatsApp number'
    });
  }
};

// Toggle WhatsApp number active status
export const toggleWhatsAppNumberStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const numberId = parseInt(id);

    if (isNaN(numberId)) {
      res.status(400).json({
        error: 'Bad Request',
        message: 'Invalid WhatsApp number ID'
      });
      return;
    }

    // Check if WhatsApp number exists
    const existingNumber = await prisma.whatsAppNumber.findUnique({
      where: { id: numberId }
    });

    if (!existingNumber) {
      res.status(404).json({
        error: 'Not Found',
        message: 'WhatsApp number not found'
      });
      return;
    }

    // Toggle active status
    const updatedNumber = await prisma.whatsAppNumber.update({
      where: { id: numberId },
      data: {
        isActive: !existingNumber.isActive
      }
    });

    res.json({
      message: `WhatsApp number ${updatedNumber.isActive ? 'activated' : 'deactivated'} successfully`,
      whatsappNumber: updatedNumber
    });

  } catch (error) {
    console.error('Toggle WhatsApp number status error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Something went wrong while toggling WhatsApp number status'
    });
  }
};
