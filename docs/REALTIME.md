# WaBox Real-time Documentation 📡

## Overview
WaBox backend menggunakan **Socket.io** untuk fitur real-time seperti WhatsApp Web. Semua update chat, message, dan status WhatsApp akan dikirim secara real-time ke client yang terhubung.

## Socket.io Connection

### 1. Connect to Socket.io Server
```javascript
import io from 'socket.io-client';

const socket = io('http://localhost:5000', {
  auth: {
    token: 'your-jwt-token-here' // Required for authentication
  }
});

socket.on('connect', () => {
  console.log('Connected to WaBox real-time server');
});
```

### 2. Authentication
Socket.io menggunakan JWT token yang sama dengan REST API. Token harus dikirim via `auth.token` saat koneksi.

## Socket Events

### Client → Server (Emit)

#### 1. Get Chat List
```javascript
socket.emit('chat:get-list', {
  whatsappNumberId: 1,
  limit: 50,
  offset: 0
});
```

#### 2. Get Chat History
```javascript
socket.emit('chat:get-history', {
  chatId: 'chat-uuid-here',
  limit: 50,
  offset: 0
});
```

#### 3. Mark Chat as Read
```javascript
socket.emit('chat:mark-read', {
  chatId: 'chat-uuid-here'
});
```

#### 4. Get WhatsApp Status
```javascript
socket.emit('whatsapp:get-status', {
  whatsappNumberId: 1
});
```

### Server → Client (Listen)

#### 1. Chat List Updates
```javascript
socket.on('chat:list', (data) => {
  console.log('Chat list received:', data);
  /*
  {
    whatsappNumberId: 1,
    chats: [
      {
        id: "chat-uuid",
        contactName: "John Doe",
        contactNumber: "+628123456789",
        contactJid: "628123456789@s.whatsapp.net",
        lastMessage: "Hello there!",
        lastMessageTime: "2025-09-16T10:30:00Z",
        unreadCount: 2,
        isGroup: false,
        isPinned: false,
        isArchived: false
      }
    ]
  }
  */
});
```

#### 2. New Message Notifications
```javascript
socket.on('message:new', (data) => {
  console.log('New message received:', data);
  /*
  {
    whatsappNumberId: 1,
    chatId: "chat-uuid",
    message: {
      id: "msg-uuid",
      messageId: "whatsapp-msg-id",
      fromJid: "628123456789@s.whatsapp.net",
      fromNumber: "+628123456789",
      fromName: "John Doe",
      content: "Hello there!",
      type: "TEXT",
      isFromMe: false,
      status: "DELIVERED",
      timestamp: "2025-09-16T10:30:00Z"
    }
  }
  */
});
```

#### 3. Chat History
```javascript
socket.on('chat:history', (data) => {
  console.log('Chat history received:', data);
  /*
  {
    chatId: "chat-uuid",
    messages: [
      {
        id: "msg-uuid",
        messageId: "whatsapp-msg-id",
        fromJid: "628123456789@s.whatsapp.net",
        fromNumber: "+628123456789",
        fromName: "John Doe",
        content: "Hello there!",
        type: "TEXT",
        isFromMe: false,
        status: "DELIVERED",
        timestamp: "2025-09-16T10:30:00Z"
      }
    ]
  }
  */
});
```

#### 4. Chat Updates (Last Message Changes)
```javascript
socket.on('chat:updated', (data) => {
  console.log('Chat updated:', data);
  /*
  {
    whatsappNumberId: 1,
    chat: {
      id: "chat-uuid",
      contactName: "John Doe",
      lastMessage: "New message here",
      lastMessageTime: "2025-09-16T10:35:00Z",
      unreadCount: 3
    }
  }
  */
});
```

#### 5. Chat Read Status
```javascript
socket.on('chat:read', (data) => {
  console.log('Chat marked as read:', data);
  /*
  {
    chatId: "chat-uuid",
    whatsappNumberId: 1
  }
  */
});
```

#### 6. WhatsApp Connection Status
```javascript
socket.on('whatsapp:status', (data) => {
  console.log('WhatsApp status update:', data);
  /*
  {
    whatsappNumberId: 1,
    status: "CONNECTED", // PENDING, PAIRING, CONNECTED, DISCONNECTED, RECONNECTING
    lastConnected: "2025-09-16T10:30:00Z",
    phoneNumber: "+628123456789"
  }
  */
});
```

#### 7. QR Code Updates
```javascript
socket.on('whatsapp:qr', (data) => {
  console.log('QR Code received:', data);
  /*
  {
    whatsappNumberId: 1,
    qrCode: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
  }
  */
});
```

#### 8. Message Status Updates
```javascript
socket.on('message:status', (data) => {
  console.log('Message status update:', data);
  /*
  {
    whatsappNumberId: 1,
    chatId: "chat-uuid",
    messageId: "whatsapp-msg-id",
    status: "READ" // PENDING, SENT, DELIVERED, READ, FAILED
  }
  */
});
```

#### 9. Error Handling
```javascript
socket.on('error', (data) => {
  console.error('Socket error:', data);
  /*
  {
    message: "Chat not found or unauthorized"
  }
  */
});
```

## Frontend Implementation Example

### React Hook for WhatsApp-like Interface
```javascript
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

export const useWaBoxSocket = (token, whatsappNumberId) => {
  const [socket, setSocket] = useState(null);
  const [chatList, setChatList] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [whatsappStatus, setWhatsappStatus] = useState('DISCONNECTED');
  const [qrCode, setQrCode] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:5000', {
      auth: { token }
    });

    // Connection handlers
    newSocket.on('connect', () => {
      console.log('Connected to WaBox');
      // Request initial data
      newSocket.emit('chat:get-list', { whatsappNumberId });
      newSocket.emit('whatsapp:get-status', { whatsappNumberId });
    });

    // Chat handlers
    newSocket.on('chat:list', (data) => {
      if (data.whatsappNumberId === whatsappNumberId) {
        setChatList(data.chats);
      }
    });

    newSocket.on('chat:history', (data) => {
      setMessages(data.messages.reverse()); // Reverse for chronological order
    });

    newSocket.on('message:new', (data) => {
      if (data.whatsappNumberId === whatsappNumberId) {
        // Update chat list
        setChatList(prev => prev.map(chat => 
          chat.id === data.chatId 
            ? { ...chat, lastMessage: data.message.content, lastMessageTime: data.message.timestamp, unreadCount: chat.unreadCount + 1 }
            : chat
        ));

        // Update current chat messages
        if (currentChat?.id === data.chatId) {
          setMessages(prev => [...prev, data.message]);
        }
      }
    });

    // WhatsApp status handlers
    newSocket.on('whatsapp:status', (data) => {
      if (data.whatsappNumberId === whatsappNumberId) {
        setWhatsappStatus(data.status);
      }
    });

    newSocket.on('whatsapp:qr', (data) => {
      if (data.whatsappNumberId === whatsappNumberId) {
        setQrCode(data.qrCode);
      }
    });

    setSocket(newSocket);

    return () => newSocket.close();
  }, [token, whatsappNumberId]);

  // Helper functions
  const selectChat = (chat) => {
    setCurrentChat(chat);
    socket?.emit('chat:get-history', { chatId: chat.id });
    socket?.emit('chat:mark-read', { chatId: chat.id });
  };

  const sendMessage = (message) => {
    // Use REST API to send message, Socket.io will handle the real-time updates
  };

  return {
    socket,
    chatList,
    currentChat,
    messages,
    whatsappStatus,
    qrCode,
    selectChat,
    sendMessage
  };
};
```

## REST API Testing with Insomnia

### 1. Test Real-time Status
```
GET /api/v1/realtime/status
Authorization: Bearer your-jwt-token
```

### 2. Test Broadcast (Admin Only)
```
POST /api/v1/realtime/test-broadcast
Authorization: Bearer your-jwt-token
Content-Type: application/json

{
  "whatsappNumberId": 1,
  "message": "Test broadcast message",
  "type": "test"
}
```

### 3. Get Chat List
```
GET /api/v1/chats/1
Authorization: Bearer your-jwt-token
```

### 4. Get Chat History
```
GET /api/v1/chats/your-chat-uuid/messages
Authorization: Bearer your-jwt-token
```

### 5. Send Message (will trigger real-time updates)
```
POST /api/v1/sessions/your-session-id/send-message
Authorization: Bearer your-jwt-token
Content-Type: application/json

{
  "phoneNumber": "+628123456789",
  "message": "Hello from REST API!"
}
```

## Features Summary

✅ **Real-time Chat List** - Seperti sidebar WhatsApp Web  
✅ **Live Message Updates** - Message masuk langsung muncul  
✅ **WhatsApp Connection Status** - Status koneksi real-time  
✅ **QR Code Updates** - QR code muncul real-time saat login  
✅ **Read Status** - Mark as read real-time  
✅ **Multi-session Support** - Support banyak nomor WhatsApp  
✅ **Authentication** - JWT token required  
✅ **Room-based Broadcasting** - Setiap WhatsApp number punya room sendiri  

## Production Notes

1. **CORS Configuration**: Set `FRONTEND_URL` environment variable untuk production
2. **Socket.io Scaling**: Gunakan Redis adapter untuk multiple server instances
3. **Rate Limiting**: Implement rate limiting untuk Socket.io events
4. **Error Handling**: Comprehensive error handling sudah implemented
5. **Security**: JWT authentication required untuk semua Socket.io connections

## Testing Workflow

1. **Start Server**: `npm run dev`
2. **Login via REST**: `POST /api/v1/auth/login` untuk dapat JWT token
3. **Connect Socket.io**: Gunakan JWT token untuk connect
4. **Test Real-time**: Kirim message via REST API, lihat update real-time di Socket.io
5. **Test QR Code**: Buat session baru, QR code akan muncul real-time

## Browser Testing (Quick)

Buka browser console dan jalankan:

```javascript
const socket = io('http://localhost:5000', {
  auth: { token: 'your-jwt-token' }
});

socket.on('connect', () => console.log('Connected!'));
socket.on('chat:list', data => console.log('Chat list:', data));
socket.on('message:new', data => console.log('New message:', data));

socket.emit('chat:get-list', { whatsappNumberId: 1 });
```

Sekarang WaBox backend sudah fully support real-time WhatsApp-like experience! 🚀
