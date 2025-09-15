import { Request, Response } from 'express';
import { PrismaClient, SessionStatus } from '../generated/prisma';
import { phoneToWhatsAppJID } from '../utils/phoneUtils';

const prisma = new PrismaClient();

/**
 * Create or update a WhatsApp session
 * @route POST /api/sessions/:whatsappNumberId
 */
export const createOrUpdateSession = async (req: Request, res: Response): Promise<void> => {
  try {
    const { whatsappNumberId } = req.params;
    const { sessionData, qrCode, status, connectionInfo } = req.body;

    const whatsappNumberIdInt = parseInt(whatsappNumberId);
    
    if (isNaN(whatsappNumberIdInt)) {
      res.status(400).json({
        success: false,
        message: 'Invalid WhatsApp number ID'
      });
      return;
    }

    // Check if WhatsApp number exists
    const whatsappNumber = await prisma.whatsAppNumber.findUnique({
      where: { id: whatsappNumberIdInt }
    });

    if (!whatsappNumber) {
      res.status(404).json({
        success: false,
        message: 'WhatsApp number not found'
      });
      return;
    }

    // Find existing session or create new one
    let session = await prisma.whatsAppSession.findFirst({
      where: { 
        whatsappNumberId: whatsappNumberIdInt,
        isActive: true 
      },
      include: {
        whatsappNumber: true
      }
    });

    let isNewSession = false;

    if (session) {
      // Update existing session
      session = await prisma.whatsAppSession.update({
        where: { id: session.id },
        data: {
          sessionData: sessionData || session.sessionData,
          qrCode: qrCode || session.qrCode,
          status: status || session.status,
          connectionInfo: connectionInfo || session.connectionInfo,
          lastConnected: status === SessionStatus.CONNECTED ? new Date() : session.lastConnected,
          errorMessage: status === SessionStatus.ERROR ? req.body.errorMessage : null,
          updatedAt: new Date()
        },
        include: {
          whatsappNumber: true
        }
      });
    } else {
      // Create new session
      session = await prisma.whatsAppSession.create({
        data: {
          whatsappNumberId: whatsappNumberIdInt,
          sessionData,
          qrCode,
          status: status || SessionStatus.PENDING,
          connectionInfo,
          isActive: true,
          lastConnected: status === SessionStatus.CONNECTED ? new Date() : null,
          errorMessage: status === SessionStatus.ERROR ? req.body.errorMessage : null
        },
        include: {
          whatsappNumber: true
        }
      });
      isNewSession = true;
    }

    res.status(200).json({
      success: true,
      message: isNewSession ? 'Session created successfully' : 'Session updated successfully',
      data: {
        id: session.id,
        whatsappNumberId: session.whatsappNumberId,
        whatsappNumber: session.whatsappNumber,
        status: session.status,
        qrCode: session.qrCode,
        lastConnected: session.lastConnected,
        isActive: session.isActive,
        createdAt: session.createdAt,
        updatedAt: session.updatedAt
      }
    });
  } catch (error) {
    console.error('Create/Update session error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Get session by WhatsApp number ID
 * @route GET /api/sessions/:whatsappNumberId
 */
export const getSessionByWhatsappNumber = async (req: Request, res: Response): Promise<void> => {
  try {
    const { whatsappNumberId } = req.params;
    const whatsappNumberIdInt = parseInt(whatsappNumberId);
    
    if (isNaN(whatsappNumberIdInt)) {
      res.status(400).json({
        success: false,
        message: 'Invalid WhatsApp number ID'
      });
      return;
    }

    const session = await prisma.whatsAppSession.findFirst({
      where: { 
        whatsappNumberId: whatsappNumberIdInt,
        isActive: true 
      },
      include: {
        whatsappNumber: true
      }
    });

    if (!session) {
      res.status(404).json({
        success: false,
        message: 'Active session not found for this WhatsApp number'
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Session retrieved successfully',
      data: {
        id: session.id,
        whatsappNumberId: session.whatsappNumberId,
        whatsappNumber: session.whatsappNumber,
        status: session.status,
        qrCode: session.qrCode,
        lastConnected: session.lastConnected,
        isActive: session.isActive,
        createdAt: session.createdAt,
        updatedAt: session.updatedAt
      }
    });
  } catch (error) {
    console.error('Get session error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Get all sessions with pagination
 * @route GET /api/sessions
 */
export const getAllSessions = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const status = req.query.status as SessionStatus;
    const isActive = req.query.isActive === 'true' ? true : req.query.isActive === 'false' ? false : undefined;

    const skip = (page - 1) * limit;

    const where: any = {};
    if (status) where.status = status;
    if (isActive !== undefined) where.isActive = isActive;

    const [sessions, total] = await Promise.all([
      prisma.whatsAppSession.findMany({
        where,
        include: {
          whatsappNumber: true
        },
        skip,
        take: limit,
        orderBy: { updatedAt: 'desc' }
      }),
      prisma.whatsAppSession.count({ where })
    ]);

    const totalPages = Math.ceil(total / limit);

    res.status(200).json({
      success: true,
      message: 'Sessions retrieved successfully',
      data: sessions.map((session: any) => ({
        id: session.id,
        whatsappNumberId: session.whatsappNumberId,
        whatsappNumber: session.whatsappNumber,
        status: session.status,
        lastConnected: session.lastConnected,
        isActive: session.isActive,
        errorMessage: session.errorMessage,
        createdAt: session.createdAt,
        updatedAt: session.updatedAt
      })),
      pagination: {
        currentPage: page,
        totalPages,
        totalItems: total,
        itemsPerPage: limit
      }
    });
  } catch (error) {
    console.error('Get sessions error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Update session status
 * @route PATCH /api/sessions/:sessionId/status
 */
export const updateSessionStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { sessionId } = req.params;
    const { status, errorMessage } = req.body;

    if (!Object.values(SessionStatus).includes(status)) {
      res.status(400).json({
        success: false,
        message: 'Invalid session status'
      });
      return;
    }

    const session = await prisma.whatsAppSession.findUnique({
      where: { id: sessionId },
      include: { whatsappNumber: true }
    });

    if (!session) {
      res.status(404).json({
        success: false,
        message: 'Session not found'
      });
      return;
    }

    const updatedSession = await prisma.whatsAppSession.update({
      where: { id: sessionId },
      data: {
        status,
        lastConnected: status === SessionStatus.CONNECTED ? new Date() : session.lastConnected,
        errorMessage: status === SessionStatus.ERROR ? errorMessage : null,
        updatedAt: new Date()
      },
      include: {
        whatsappNumber: true
      }
    });

    res.status(200).json({
      success: true,
      message: 'Session status updated successfully',
      data: {
        id: updatedSession.id,
        whatsappNumberId: updatedSession.whatsappNumberId,
        whatsappNumber: updatedSession.whatsappNumber,
        status: updatedSession.status,
        lastConnected: updatedSession.lastConnected,
        errorMessage: updatedSession.errorMessage,
        updatedAt: updatedSession.updatedAt
      }
    });
  } catch (error) {
    console.error('Update session status error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Get QR code for session
 * @route GET /api/sessions/:sessionId/qr
 */
export const getSessionQR = async (req: Request, res: Response): Promise<void> => {
  try {
    const { sessionId } = req.params;

    const session = await prisma.whatsAppSession.findUnique({
      where: { id: sessionId },
      select: {
        id: true,
        qrCode: true,
        status: true,
        whatsappNumber: {
          select: {
            id: true,
            name: true,
            phoneNumber: true
          }
        }
      }
    });

    if (!session) {
      res.status(404).json({
        success: false,
        message: 'Session not found'
      });
      return;
    }

    if (!session.qrCode) {
      res.status(404).json({
        success: false,
        message: 'QR code not available for this session'
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'QR code retrieved successfully',
      data: {
        sessionId: session.id,
        whatsappNumber: session.whatsappNumber,
        qrCode: session.qrCode,
        status: session.status
      }
    });
  } catch (error) {
    console.error('Get QR code error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Deactivate session (soft delete)
 * @route DELETE /api/sessions/:sessionId
 */
export const deactivateSession = async (req: Request, res: Response): Promise<void> => {
  try {
    const { sessionId } = req.params;

    const session = await prisma.whatsAppSession.findUnique({
      where: { id: sessionId }
    });

    if (!session) {
      res.status(404).json({
        success: false,
        message: 'Session not found'
      });
      return;
    }

    await prisma.whatsAppSession.update({
      where: { id: sessionId },
      data: {
        isActive: false,
        status: SessionStatus.DISCONNECTED,
        updatedAt: new Date()
      }
    });

    res.status(200).json({
      success: true,
      message: 'Session deactivated successfully'
    });
  } catch (error) {
    console.error('Deactivate session error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Permanently delete session
 * @route DELETE /api/sessions/:sessionId/permanent
 */
export const deleteSession = async (req: Request, res: Response): Promise<void> => {
  try {
    const { sessionId } = req.params;

    const session = await prisma.whatsAppSession.findUnique({
      where: { id: sessionId }
    });

    if (!session) {
      res.status(404).json({
        success: false,
        message: 'Session not found'
      });
      return;
    }

    await prisma.whatsAppSession.delete({
      where: { id: sessionId }
    });

    res.status(200).json({
      success: true,
      message: 'Session deleted permanently'
    });
  } catch (error) {
    console.error('Delete session error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};
