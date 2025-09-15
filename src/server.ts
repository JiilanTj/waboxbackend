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

// Load environment variables
dotenv.config();

// Initialize Prisma Client
const prisma = new PrismaClient();

const app: Application = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 5000;

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
server.listen(PORT, async () => {
  try {
    // Test database connection
    await prisma.$connect();
    console.log('✅ Database connected successfully');
    
    console.log(`🚀 WaBox Backend server is running on port ${PORT}`);
    console.log(`📱 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🌐 Socket.io server is ready for connections`);
  } catch (error) {
    console.error('❌ Failed to connect to database:', error);
    process.exit(1);
  }
});

// Graceful shutdown
process.on('beforeExit', async () => {
  await prisma.$disconnect();
  console.log('🔌 Database disconnected');
});

export default app;
