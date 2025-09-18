import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

/**
 * Create a new chat template
 * @route POST /api/v1/chat-templates
 */
export const createTemplate = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, content, isActive, commands } = req.body;

    if (!name || !content) {
      res.status(400).json({ success: false, message: 'Name and content are required' });
      return;
    }

    const template = await prisma.chatTemplate.create({
      data: {
        name: String(name).trim(),
        content: String(content),
        isActive: typeof isActive === 'boolean' ? isActive : true,
        ...(commands !== undefined ? { commands: String(commands).trim() } : {})
      }
    });

    res.status(201).json({
      success: true,
      message: 'Chat template created successfully',
      data: template
    });
  } catch (error: any) {
    if (error?.code === 'P2002' && Array.isArray(error?.meta?.target) && error.meta.target.includes('commands')) {
      res.status(409).json({ success: false, message: 'Command already exists, must be unique' });
      return;
    }
    console.error('Create chat template error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Get all chat templates with pagination
 * @route GET /api/v1/chat-templates
 */
export const getTemplates = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt((req.query.page as string) || '1');
    const limit = parseInt((req.query.limit as string) || '10');
    const isActiveParam = req.query.isActive as string | undefined;
    const q = (req.query.q as string | undefined)?.trim();
    const cmd = (req.query.command as string | undefined)?.trim();

    const skip = (page - 1) * limit;

    const where: any = {};
    if (isActiveParam === 'true') where.isActive = true;
    else if (isActiveParam === 'false') where.isActive = false;

    if (q && q.length > 0) {
      where.OR = [
        { name: { contains: q } },
        { content: { contains: q } },
        { commands: { contains: q } }
      ];
    }

    if (cmd && cmd.length > 0) {
      // exact match for command filter
      where.commands = cmd;
    }

    const [items, total] = await Promise.all([
      prisma.chatTemplate.findMany({ where, skip, take: limit, orderBy: { updatedAt: 'desc' } }),
      prisma.chatTemplate.count({ where })
    ]);

    res.status(200).json({
      success: true,
      message: 'Chat templates retrieved successfully',
      data: items,
      pagination: {
        currentPage: page,
        itemsPerPage: limit,
        totalItems: total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get chat templates error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Get chat template by ID
 * @route GET /api/v1/chat-templates/:id
 */
export const getTemplateById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ success: false, message: 'Invalid template ID' });
      return;
    }

    const template = await prisma.chatTemplate.findUnique({ where: { id } });
    if (!template) {
      res.status(404).json({ success: false, message: 'Template not found' });
      return;
    }

    res.status(200).json({ success: true, message: 'Chat template retrieved successfully', data: template });
  } catch (error) {
    console.error('Get chat template error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Get chat template by caller command (exact match)
 * @route GET /api/v1/chat-templates/by-command/{command}
 */
export const getTemplateByCommand = async (req: Request, res: Response): Promise<void> => {
  try {
    const cmd = (req.params.command || '').trim();
    if (!cmd) {
      res.status(400).json({ success: false, message: 'Command is required' });
      return;
    }

    const template = await prisma.chatTemplate.findFirst({
      where: { commands: cmd, isActive: true },
      orderBy: { updatedAt: 'desc' }
    });

    if (!template) {
      res.status(404).json({ success: false, message: 'Template not found for command' });
      return;
    }

    res.status(200).json({ success: true, message: 'Chat template retrieved by command', data: template });
  } catch (error) {
    console.error('Get chat template by command error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Update chat template by ID
 * @route PUT /api/v1/chat-templates/:id
 */
export const updateTemplate = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const { name, content, isActive, commands } = req.body;

    if (isNaN(id)) {
      res.status(400).json({ success: false, message: 'Invalid template ID' });
      return;
    }

    if (!name && !content && typeof isActive !== 'boolean' && commands === undefined) {
      res.status(400).json({ success: false, message: 'Nothing to update' });
      return;
    }

    const exists = await prisma.chatTemplate.findUnique({ where: { id } });
    if (!exists) {
      res.status(404).json({ success: false, message: 'Template not found' });
      return;
    }

    const updated = await prisma.chatTemplate.update({
      where: { id },
      data: {
        ...(name !== undefined ? { name: String(name).trim() } : {}),
        ...(content !== undefined ? { content: String(content) } : {}),
        ...(typeof isActive === 'boolean' ? { isActive } : {}),
        ...(commands !== undefined ? { commands: String(commands).trim() } : {})
      }
    });

    res.status(200).json({ success: true, message: 'Chat template updated successfully', data: updated });
  } catch (error: any) {
    if (error?.code === 'P2002' && Array.isArray(error?.meta?.target) && error.meta.target.includes('commands')) {
      res.status(409).json({ success: false, message: 'Command already exists, must be unique' });
      return;
    }
    console.error('Update chat template error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Delete chat template by ID
 * @route DELETE /api/v1/chat-templates/:id
 */
export const deleteTemplate = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ success: false, message: 'Invalid template ID' });
      return;
    }

    const exists = await prisma.chatTemplate.findUnique({ where: { id } });
    if (!exists) {
      res.status(404).json({ success: false, message: 'Template not found' });
      return;
    }

    await prisma.chatTemplate.delete({ where: { id } });

    res.status(200).json({ success: true, message: 'Chat template deleted successfully' });
  } catch (error) {
    console.error('Delete chat template error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
