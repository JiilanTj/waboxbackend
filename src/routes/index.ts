import { Application } from 'express';
import appRoutes from './appRoutes';
import authRoutes from './authRoutes';
import userRoutes from './userRoutes';

export const setupRoutes = (app: Application) => {
  // Mount all routes
  app.use(appRoutes);
  app.use(authRoutes);
  app.use(userRoutes);
  
  // Add other routes here when needed
  // app.use('/api/whatsapp', whatsappRoutes);
  // app.use('/api/messages', messageRoutes);
};
