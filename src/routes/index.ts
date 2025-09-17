import { Application } from 'express';
import appRoutes from './appRoutes';
import authRoutes from './authRoutes';
import userRoutes from './userRoutes';
import whatsappRoutes from './whatsappRoutes';
import sessionRoutes from './sessionRoutes';
import chatRoutes from './chatRoutes';
import realtimeRoutes from './realtimeRoutes';
import permissionRoutes from './permissionRoutes';

export const setupRoutes = (app: Application) => {
  // Mount all routes
  app.use(appRoutes);
  app.use(authRoutes);
  app.use(permissionRoutes); // WaNumberPermission routes
  app.use(userRoutes);
  app.use(whatsappRoutes);
  app.use(sessionRoutes); // No prefix needed, routes already include full path
  app.use(chatRoutes); // Chat management routes
  app.use('/api/v1/realtime', realtimeRoutes); // Real-time Socket.io management
  
  // Add other routes here when needed
  // app.use('/api/messages', messageRoutes);
};
