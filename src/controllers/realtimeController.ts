import { Request, Response } from 'express';
import { getSocketService } from '../services/socket/SocketService';

/**
 * Get real-time connection status
 * @route GET /api/v1/realtime/status
 */
export const getRealtimeStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const socketService = getSocketService();
    
    if (!socketService) {
      res.status(503).json({
        success: false,
        message: 'Socket.io service not available'
      });
      return;
    }

    const connectedUsers = socketService.getConnectedUsersCount();
    
    res.status(200).json({
      success: true,
      message: 'Real-time service is active',
      data: {
        socketService: 'active',
        connectedUsers,
        features: [
          'Real-time chat list updates',
          'Live message notifications',
          'WhatsApp connection status',
          'QR code real-time updates'
        ]
      }
    });

  } catch (error) {
    console.error('Get realtime status error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Test broadcast message (for testing purposes)
 * @route POST /api/v1/realtime/test-broadcast
 */
export const testBroadcast = async (req: Request, res: Response): Promise<void> => {
  try {
    const { whatsappNumberId, message, type = 'test' } = req.body;
    
    if (!whatsappNumberId || !message) {
      res.status(400).json({
        success: false,
        message: 'whatsappNumberId and message are required'
      });
      return;
    }

    const socketService = getSocketService();
    
    if (!socketService) {
      res.status(503).json({
        success: false,
        message: 'Socket.io service not available'
      });
      return;
    }

    // Broadcast test message
    await socketService.broadcastWhatsAppStatus(whatsappNumberId, type.toUpperCase(), {
      message,
      timestamp: new Date(),
      isTest: true
    });

    res.status(200).json({
      success: true,
      message: 'Test broadcast sent successfully',
      data: {
        whatsappNumberId,
        message,
        type,
        broadcasted: true
      }
    });

  } catch (error) {
    console.error('Test broadcast error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while broadcasting test message'
    });
  }
};
