import { Server, Socket } from 'socket.io';

export const setupSocketHandlers = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log('User connected:', socket.id);

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });

    // WhatsApp related events
    socket.on('whatsapp:status', (data) => {
      console.log('WhatsApp status update:', data);
      // Broadcast to all clients
      io.emit('whatsapp:status', data);
    });

    socket.on('message:received', (data) => {
      console.log('Message received:', data);
      // Broadcast to specific room or all clients
      io.emit('message:received', data);
    });
  });
};
