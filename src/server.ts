import express, { Application } from 'express';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { PrismaClient } from './generated/prisma';

// Import utilities and routes
import { setupMiddlewares, notFoundHandler, errorHandler } from './utils/middleware';
import { setupRoutes } from './routes';
import { setupSocketHandlers } from './utils/socketHandler';
import { setupSwagger } from './utils/swagger';
import { whatsappSessionManager } from './services/whatsapp/SessionManager';

// Load environment variables
dotenv.config();

// Initialize Prisma Client
const prisma = new PrismaClient();

const app: Application = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      process.env.FRONTEND_URL || "http://localhost:3000",
      "http://127.0.0.1:3000",
      "http://localhost:3000",
      "http://127.0.0.1:5173", // Vite dev server
      "http://localhost:5173"  // Vite dev server
    ],
    methods: ["GET", "POST"],
    credentials: true
  }
});

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

// Setup middlewares
setupMiddlewares(app);

// Setup Swagger documentation
setupSwagger(app);

// Setup routes
setupRoutes(app);

// Setup Socket.io handlers
setupSocketHandlers(io);

// 404 handler
app.use(notFoundHandler);

// Error handling middleware
app.use(errorHandler);

// Start server
server.listen(PORT as number, HOST, async () => {
  try {
    // Test database connection
    await prisma.$connect();
    console.log('✅ Database connected successfully');
    
    // Initialize WhatsApp Session Manager
    console.log('🔄 Initializing WhatsApp Session Manager...');
    await whatsappSessionManager.initializeExistingSessions();
    console.log('✅ WhatsApp Session Manager initialized');
    
    console.log(`🚀 WaBox Backend server is running on http://${HOST}:${PORT}`);
    console.log(`📱 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`📖 API Documentation available at: http://${HOST}:${PORT}/api/docs`);
    console.log(`🌐 Socket.io server is ready for connections`);
    console.log(`📊 API Documentation: http://localhost:${PORT}/api/docs`);
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
});

// Graceful shutdown
process.on('beforeExit', async () => {
  console.log('🔄 Shutting down gracefully...');
  
  // Cleanup WhatsApp sessions
  await whatsappSessionManager.cleanup();
  
  // Disconnect database
  await prisma.$disconnect();
  console.log('🔌 Database disconnected');
  console.log('✅ Server shut down complete');
});

// Handle process termination
process.on('SIGTERM', async () => {
  console.log('🔄 SIGTERM received, shutting down gracefully...');
  
  // Cleanup WhatsApp sessions
  await whatsappSessionManager.cleanup();
  
  // Disconnect database
  await prisma.$disconnect();
  
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('🔄 SIGINT received, shutting down gracefully...');
  
  // Cleanup WhatsApp sessions
  await whatsappSessionManager.cleanup();
  
  // Disconnect database
  await prisma.$disconnect();
  
  process.exit(0);
});

export default app;
