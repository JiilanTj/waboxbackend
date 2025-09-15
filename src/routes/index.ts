import { Application } from 'express';
import appRoutes from './appRoutes';
import authRoutes from './authRoutes';
import userRoutes from './userRoutes';
import whatsappRoutes from './whatsappRoutes';
import sessionRoutes from './sessionRoutes';

export const setupRoutes = (app: Application) => {
  // Mount all routes
  app.use(appRoutes);
  app.use(authRoutes);
  app.use(userRoutes);
  app.use(whatsappRoutes);
  app.use('/api/sessions', sessionRoutes);
  
  // Add other routes here when needed
  // app.use('/api/messages', messageRoutes);
};
