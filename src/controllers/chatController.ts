import { Request, Response } from 'express';
import { chatService, ChatPreview, MessageData } from '../services/chat/ChatService';

/**
 * Get chat list for a WhatsApp number
 * @route GET /api/v1/chats/:whatsappNumberId
 */
export const getChatList = async (req: Request, res: Response): Promise<void> => {
  try {
    const { whatsappNumberId } = req.params;
    const { limit = '50', offset = '0' } = req.query;

    const whatsappNumberIdInt = parseInt(whatsappNumberId);
    const limitInt = parseInt(limit as string);
    const offsetInt = parseInt(offset as string);

    if (isNaN(whatsappNumberIdInt)) {
      res.status(400).json({
        success: false,
        message: 'Invalid WhatsApp number ID'
      });
      return;
    }

    const chats = await chatService.getChatList(whatsappNumberIdInt, limitInt, offsetInt);

    res.status(200).json({
      success: true,
      message: 'Chat list retrieved successfully',
      data: chats,
      pagination: {
        limit: limitInt,
        offset: offsetInt,
        total: chats.length
      }
    });

  } catch (error) {
    console.error('Get chat list error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while retrieving chat list'
    });
  }
};

/**
 * Get chat history/messages for a specific chat
 * @route GET /api/v1/chats/:chatId/messages
 */
export const getChatHistory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { chatId } = req.params;
    const { limit = '50', offset = '0' } = req.query;

    const limitInt = parseInt(limit as string);
    const offsetInt = parseInt(offset as string);

    const messages = await chatService.getChatHistory(chatId, limitInt, offsetInt);

    res.status(200).json({
      success: true,
      message: 'Chat history retrieved successfully',
      data: messages,
      pagination: {
        limit: limitInt,
        offset: offsetInt,
        total: messages.length
      }
    });

  } catch (error) {
    console.error('Get chat history error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while retrieving chat history'
    });
  }
};

/**
 * Mark chat as read (reset unread count)
 * @route PATCH /api/v1/chats/:chatId/read
 */
export const markChatAsRead = async (req: Request, res: Response): Promise<void> => {
  try {
    const { chatId } = req.params;

    await chatService.markChatAsRead(chatId);

    res.status(200).json({
      success: true,
      message: 'Chat marked as read successfully'
    });

  } catch (error) {
    console.error('Mark chat as read error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while marking chat as read'
    });
  }
};

/**
 * Search chats by contact name or number
 * @route GET /api/v1/chats/:whatsappNumberId/search
 */
export const searchChats = async (req: Request, res: Response): Promise<void> => {
  try {
    const { whatsappNumberId } = req.params;
    const { q: query } = req.query;

    const whatsappNumberIdInt = parseInt(whatsappNumberId);

    if (isNaN(whatsappNumberIdInt)) {
      res.status(400).json({
        success: false,
        message: 'Invalid WhatsApp number ID'
      });
      return;
    }

    if (!query || typeof query !== 'string') {
      res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
      return;
    }

    const chats = await chatService.searchChats(whatsappNumberIdInt, query);

    res.status(200).json({
      success: true,
      message: 'Chat search completed successfully',
      data: chats,
      query: query
    });

  } catch (error) {
    console.error('Search chats error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while searching chats'
    });
  }
};
