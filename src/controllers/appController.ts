import { Request, Response } from 'express';

export const getHealth = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'OK',
    message: 'WaBox Backend is running',
    timestamp: new Date().toISOString()
  });
};

export const getApiInfo = (req: Request, res: Response) => {
  res.json({
    message: 'WaBox Backend API',
    version: '1.0.0',
    description: 'Backend untuk aplikasi pengelola pesan WhatsApp multi-account dan multi-CS'
  });
};
