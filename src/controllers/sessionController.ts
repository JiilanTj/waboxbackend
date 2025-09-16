import { Request, Response } from 'express';
import { PrismaClient, SessionStatus } from '../generated/prisma';
import { phoneToWhatsAppJID, formatPhoneForDisplay } from '../utils/phoneUtils';
import { whatsappSessionManager } from '../services/whatsapp/SessionManager';

const prisma = new PrismaClient();

/**
 * Create or update a WhatsApp session
 * @route POST /api/v1/sessions/:whatsappNumberId
 */
export const createOrUpdateSession = async (req: Request, res: Response): Promise<void> => {
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

    try {
      // Create session using SessionManager
      const sessionId = await whatsappSessionManager.createSession(
        whatsappNumberIdInt, 
        whatsappNumber.phoneNumber
      );

      // Get updated session from database
      const session = await prisma.whatsAppSession.findUnique({
        where: { id: sessionId },
        include: { whatsappNumber: true }
      });

      if (!session) {
        res.status(500).json({
          success: false,
          message: 'Failed to create session'
        });
        return;
      }

      res.status(200).json({
        success: true,
        message: 'Session created successfully',
        data: {
          id: session.id,
          whatsappNumberId: session.whatsappNumberId,
          whatsappNumber: {
            ...session.whatsappNumber,
            phoneNumberFormatted: formatPhoneForDisplay(session.whatsappNumber.phoneNumber)
          },
          status: session.status,
          qrCode: session.qrCode,
          lastConnected: session.lastConnected,
          isActive: session.isActive,
          createdAt: session.createdAt,
          updatedAt: session.updatedAt
        }
      });
    } catch (error) {
      console.error('SessionManager error:', error);
      res.status(500).json({
        success: false,
        message: `Failed to create session: ${error}`
      });
    }
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
 * @route GET /api/v1/sessions/:sessionId/qr
 */
export const getSessionQR = async (req: Request, res: Response): Promise<void> => {
  try {
    const { sessionId } = req.params;

    // First check database
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

    // Try to get fresh QR from SessionManager if available
    const liveQR = whatsappSessionManager.getSessionQR(sessionId);
    const qrCode = liveQR || session.qrCode;

    if (!qrCode) {
      res.status(404).json({
        success: false,
        message: 'QR code not available for this session. Please create a new session if needed.',
        details: {
          status: session.status,
          suggestion: session.status === SessionStatus.CONNECTED 
            ? 'Session is already connected' 
            : 'Session may be disconnected or expired'
        }
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'QR code retrieved successfully',
      data: {
        sessionId: session.id,
        whatsappNumber: {
          ...session.whatsappNumber,
          phoneNumberFormatted: formatPhoneForDisplay(session.whatsappNumber.phoneNumber)
        },
        qrCode: qrCode,
        status: session.status,
        isLive: !!liveQR // Indicates if QR is from live session
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
 * @route DELETE /api/v1/sessions/:sessionId
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

    try {
      // Permanently disconnect through SessionManager (with logout)
      await whatsappSessionManager.logoutSession(sessionId);
      
      res.status(200).json({
        success: true,
        message: 'Session deactivated successfully'
      });
    } catch (error) {
      console.error('SessionManager logout error:', error);
      
      // Fallback: update database directly if SessionManager fails
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
        message: 'Session deactivated successfully (fallback method)'
      });
    }
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

/**
 * Send message through session
 * @route POST /api/v1/sessions/:sessionId/send
 */
export const sendMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { sessionId } = req.params;
    const { to, message } = req.body;

    if (!to || !message) {
      res.status(400).json({
        success: false,
        message: 'Recipient phone number and message are required'
      });
      return;
    }

    // Check if session exists in database
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

    if (!session.isActive) {
      res.status(400).json({
        success: false,
        message: 'Session is not active'
      });
      return;
    }

    try {
      // Send message through SessionManager
      const result = await whatsappSessionManager.sendMessage(sessionId, to, message);
      
      res.status(200).json({
        success: true,
        message: 'Message sent successfully',
        data: {
          sessionId: sessionId,
          from: {
            id: session.whatsappNumber.id,
            name: session.whatsappNumber.name,
            phoneNumber: formatPhoneForDisplay(session.whatsappNumber.phoneNumber)
          },
          to: formatPhoneForDisplay(to),
          message: message,
          messageId: result.key?.id,
          timestamp: new Date().toISOString()
        }
      });
    } catch (error) {
      console.error('Send message error:', error);
      res.status(500).json({
        success: false,
        message: `Failed to send message: ${error}`
      });
    }
  } catch (error) {
    console.error('Send message controller error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};
