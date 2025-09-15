import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import { normalizePhoneNumber, formatPhoneForDisplay, isValidIndonesianMobile } from '../utils/phoneUtils';

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
      whatsappNumbers: whatsappNumbers.map(number => ({
        ...number,
        phoneNumberFormatted: formatPhoneForDisplay(number.phoneNumber)
      })),
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

    // Normalize and validate phone number
    const normalizedPhone = normalizePhoneNumber(phoneNumber);
    if (!normalizedPhone) {
      res.status(400).json({
        error: 'Bad Request',
        message: 'Invalid Indonesian mobile phone number format. Please use format like: 08123456789, +628123456789, or 628123456789'
      });
      return;
    }

    // Check if normalized phone number already exists
    const existingNumber = await prisma.whatsAppNumber.findUnique({
      where: { phoneNumber: normalizedPhone }
    });

    if (existingNumber) {
      res.status(409).json({
        error: 'Conflict',
        message: 'Phone number already exists',
        details: {
          existingNumber: formatPhoneForDisplay(existingNumber.phoneNumber),
          normalizedInput: formatPhoneForDisplay(normalizedPhone)
        }
      });
      return;
    }

    // Create WhatsApp number with normalized phone
    const newWhatsAppNumber = await prisma.whatsAppNumber.create({
      data: {
        name,
        phoneNumber: normalizedPhone,
        isActive: Boolean(isActive)
      }
    });

    res.status(201).json({
      message: 'WhatsApp number created successfully',
      whatsappNumber: {
        ...newWhatsAppNumber,
        phoneNumberFormatted: formatPhoneForDisplay(newWhatsAppNumber.phoneNumber)
      }
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
      whatsappNumber: {
        ...whatsappNumber,
        phoneNumberFormatted: formatPhoneForDisplay(whatsappNumber.phoneNumber)
      }
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
      // Normalize and validate phone number
      const normalizedPhone = normalizePhoneNumber(phoneNumber);
      if (!normalizedPhone) {
        res.status(400).json({
          error: 'Bad Request',
          message: 'Invalid Indonesian mobile phone number format. Please use format like: 08123456789, +628123456789, or 628123456789'
        });
        return;
      }

      // Check for duplicate phone number
      const duplicateNumber = await prisma.whatsAppNumber.findFirst({
        where: {
          AND: [
            { id: { not: numberId } },
            { phoneNumber: normalizedPhone }
          ]
        }
      });

      if (duplicateNumber) {
        res.status(409).json({
          error: 'Conflict',
          message: 'Phone number already exists',
          details: {
            existingNumber: formatPhoneForDisplay(duplicateNumber.phoneNumber),
            normalizedInput: formatPhoneForDisplay(normalizedPhone)
          }
        });
        return;
      }

      updateData.phoneNumber = normalizedPhone;
    }

    // Update WhatsApp number
    const updatedNumber = await prisma.whatsAppNumber.update({
      where: { id: numberId },
      data: updateData
    });

    res.json({
      message: 'WhatsApp number updated successfully',
      whatsappNumber: {
        ...updatedNumber,
        phoneNumberFormatted: formatPhoneForDisplay(updatedNumber.phoneNumber)
      }
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
