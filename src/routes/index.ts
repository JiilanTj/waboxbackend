import { Application } from 'express';
import appRoutes from './appRoutes';

export const setupRoutes = (app: Application) => {
  // Mount all routes
  app.use(appRoutes);
  
  // Add other routes here when needed
  // app.use('/api/whatsapp', whatsappRoutes);
  // app.use('/api/auth', authRoutes);
  // app.use('/api/messages', messageRoutes);
};
