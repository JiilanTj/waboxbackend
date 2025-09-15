import express, { Application } from 'express';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';

// Import utilities and routes
import { setupMiddlewares, notFoundHandler, errorHandler } from './utils/middleware';
import { setupRoutes } from './routes';
import { setupSocketHandlers } from './utils/socketHandler';

// Load environment variables
dotenv.config();

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

// Setup routes
setupRoutes(app);

// Setup Socket.io handlers
setupSocketHandlers(io);

// 404 handler
app.use(notFoundHandler);

// Error handling middleware
app.use(errorHandler);

// Start server
server.listen(PORT, () => {
  console.log(`🚀 WaBox Backend server is running on port ${PORT}`);
  console.log(`📱 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 Socket.io server is ready for connections`);
});

export default app;
