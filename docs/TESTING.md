# WaBox Real-time Testing Guide 🧪

## Server Status ✅
- ✅ Server running pada port 5000
- ✅ Socket.io real-time server ready
- ✅ WhatsApp Session Manager initialized  
- ✅ Database connected
- ✅ 1 WhatsApp session aktif (6281313474463)
- ✅ Swagger docs: http://localhost:5000/api/docs

## Testing dengan Insomnia/Postman

### 1. Login untuk dapat JWT Token
```
POST http://localhost:5000/api/v1/auth/login
Content-Type: application/json

{
  "email": "admin@wabox.com",
  "password": "admin123"
}
```

Response:
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": { ... },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### 2. Test Real-time Status
```
GET http://localhost:5000/api/v1/realtime/status
Authorization: Bearer YOUR_JWT_TOKEN
```

### 3. Test Broadcast (Admin only)
```
POST http://localhost:5000/api/v1/realtime/test-broadcast
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "whatsappNumberId": 1,
  "message": "Test real-time broadcast dari Insomnia!",
  "type": "test"
}
```

### 4. Get Chat List
```
GET http://localhost:5000/api/v1/chats/1
Authorization: Bearer YOUR_JWT_TOKEN
```

### 5. Send Message (akan trigger real-time update)
```
POST http://localhost:5000/api/v1/sessions/YOUR_SESSION_ID/send-message
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "phoneNumber": "+628123456789",
  "message": "Hello from REST API - ini akan muncul real-time!"
}
```

## Testing Socket.io di Browser

### 1. Buka Browser Console
Pergi ke `http://localhost:5000` dan buka Developer Console (F12)

### 2. Connect ke Socket.io
```javascript
// Load Socket.io client library
const script = document.createElement('script');
script.src = 'https://cdn.socket.io/4.8.1/socket.io.min.js';
document.head.appendChild(script);

// Wait for library to load, then connect
setTimeout(() => {
  const socket = io('http://localhost:5000', {
    auth: {
      token: 'YOUR_JWT_TOKEN_HERE' // Ganti dengan token dari login
    }
  });

  // Connection events
  socket.on('connect', () => {
    console.log('🔌 Connected to WaBox real-time server!');
    console.log('Socket ID:', socket.id);
    
    // Request initial data
    socket.emit('chat:get-list', { whatsappNumberId: 1 });
  });

  socket.on('disconnect', () => {
    console.log('🔌 Disconnected from server');
  });

  // Chat events
  socket.on('chat:list', (data) => {
    console.log('📋 Chat list received:', data);
  });

  socket.on('message:new', (data) => {
    console.log('📨 New message received:', data);
  });

  socket.on('chat:updated', (data) => {
    console.log('📝 Chat updated:', data);
  });

  // WhatsApp events
  socket.on('whatsapp:status', (data) => {
    console.log('📱 WhatsApp status:', data);
  });

  socket.on('whatsapp:qr', (data) => {
    console.log('🔲 QR Code received:', data.qrCode);
  });

  // Error handling
  socket.on('error', (data) => {
    console.error('❌ Socket error:', data);
  });

  // Save socket to window for manual testing
  window.waboxSocket = socket;
  console.log('✅ Socket saved to window.waboxSocket');
}, 1000);
```

### 3. Manual Testing Commands
```javascript
// Get chat list
window.waboxSocket.emit('chat:get-list', { whatsappNumberId: 1 });

// Get WhatsApp status
window.waboxSocket.emit('whatsapp:get-status', { whatsappNumberId: 1 });

// Mark chat as read (need valid chat ID)
window.waboxSocket.emit('chat:mark-read', { chatId: 'your-chat-uuid' });

// Get chat history (need valid chat ID)
window.waboxSocket.emit('chat:get-history', { 
  chatId: 'your-chat-uuid', 
  limit: 20 
});
```

## Expected Real-time Behavior

### Ketika ada message masuk:
1. `message:new` event akan di-emit
2. `chat:updated` event akan di-emit (untuk update last message di chat list)
3. Unread count akan ter-update

### Ketika kirim message via REST API:
1. Message tersimpan di database
2. `message:new` event di-broadcast ke semua client
3. Chat list akan ter-update dengan last message baru

### Ketika WhatsApp disconnect/reconnect:
1. `whatsapp:status` event dengan status terbaru
2. Jika perlu pairing ulang, `whatsapp:qr` event dengan QR code

## Swagger Documentation

Buka http://localhost:5000/api/docs untuk dokumentasi lengkap termasuk:
- ✅ Real-time endpoints
- ✅ Socket.io event documentation  
- ✅ Chat management endpoints
- ✅ WhatsApp session endpoints
- ✅ Authentication endpoints

## Production Testing Workflow

### 1. Test Authentication Flow
Login → Get Token → Test protected endpoints

### 2. Test WhatsApp Integration
Create Session → Get QR → Scan QR → Send Message

### 3. Test Real-time Features
Connect Socket.io → Send Message via REST → Lihat real-time update

### 4. Test Multi-user
Connect multiple Socket.io clients → Send message → Semua client dapat update

## Troubleshooting

### Socket.io tidak connect
- ✅ Check JWT token valid
- ✅ Check CORS settings
- ✅ Check server running on port 5000

### Real-time updates tidak muncul  
- ✅ Check Socket.io connection active
- ✅ Check emit ke room yang benar
- ✅ Check whatsappNumberId sesuai

### WhatsApp session error
- ✅ Check session exists di database
- ✅ Check phone number normalized
- ✅ Restart session jika perlu

## Next Steps

1. **Frontend Integration**: Build React/Vue frontend dengan Socket.io
2. **Mobile App**: Integrate dengan React Native
3. **Production Deploy**: Setup dengan Redis adapter untuk scaling
4. **Monitoring**: Add real-time monitoring dashboard

---

🎉 **WaBox Real-time Backend is Ready!** 

Semua fitur seperti WhatsApp Web sudah implemented:
- ✅ Real-time chat list
- ✅ Live message notifications
- ✅ WhatsApp connection status
- ✅ Multi-session support
- ✅ Authentication & authorization
- ✅ Complete REST API + Socket.io integration
