import { Server } from 'socket.io';
import { initializeSocketService } from '../services/socket/SocketService';

export const setupSocketHandlers = (io: Server) => {
  // Initialize the Socket Service
  const socketService = initializeSocketService(io);
  
  console.log('✅ Socket.io handlers initialized');
  console.log('📡 Real-time chat functionality is ready');
  
  return socketService;
};
