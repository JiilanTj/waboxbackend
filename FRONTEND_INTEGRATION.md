# 🚀 WaBox Frontend Integration Guide

## 📋 Overview
WaBox Backend menyediakan REST API dan Real-time Socket.io untuk integrasi WhatsApp multi-session management. Sistem ini mendukung:

- ✅ **Real-time chat listening** (incoming messages langsung masuk database)
- ✅ **Send messages** via REST API
- ✅ **Live chat list & history** seperti WhatsApp Web
- ✅ **Socket.io real-time updates** tanpa polling
- ✅ **Multi-session management** (multiple WhatsApp accounts)

---

## 🔐 Authentication

### Login
```javascript
// POST /api/v1/login
const response = await fetch('http://localhost:5000/api/v1/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: 'admin',  // atau 'user1' 
    password: 'admin123' // atau 'user123'
  })
});

const { token, user } = await response.json();
localStorage.setItem('token', token);
```

### Headers untuk authenticated requests:
```javascript
const headers = {
  'Authorization': `Bearer ${localStorage.getItem('token')}`,
  'Content-Type': 'application/json'
};
```

---

## 📱 WhatsApp Session Management

### 1. Create WhatsApp Session
```javascript
// POST /api/v1/sessions/:whatsappNumberId
const sessionResponse = await fetch(`http://localhost:5000/api/v1/sessions/1`, {
  method: 'POST',
  headers
});

const session = await sessionResponse.json();
console.log('Session created:', session.data);
```

### 2. Get QR Code untuk pairing
```javascript
// GET /api/v1/sessions/:sessionId/qr
const qrResponse = await fetch(`http://localhost:5000/api/v1/sessions/${sessionId}/qr`, {
  headers
});

const { data } = await qrResponse.json();
// data.qrCode berisi base64 QR code image
document.getElementById('qr-image').src = data.qrCode;
```

### 3. Monitor Session Status via Socket.io
```javascript
import io from 'socket.io-client';

const socket = io('http://localhost:5000', {
  auth: { token: localStorage.getItem('token') }
});

// Listen untuk status update
socket.on('whatsapp:status', (data) => {
  console.log('WhatsApp Status:', data);
  // data: { whatsappNumberId, status, qrCode?, lastConnected? }
  
  if (data.status === 'PAIRING' && data.qrCode) {
    // Show QR code
    document.getElementById('qr-image').src = data.qrCode;
  } else if (data.status === 'CONNECTED') {
    // Hide QR, show connected status
    console.log('WhatsApp connected!');
  }
});
```

---

## 💬 Real-time Chat System

### 🚀 **Core Concept**
WaBox menggunakan **dual approach** untuk optimal performance:
- **REST API** untuk initial data loading
- **Socket.io** untuk real-time updates tanpa polling

---

### 1. **Get Chat List** (Sidebar seperti WhatsApp Web)
```javascript
// ✅ CORRECT: Via REST API
const chatResponse = await fetch('http://localhost:5000/api/v1/chats/1?limit=50&offset=0', {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
});
const { data } = await chatResponse.json();
console.log('Chat list:', data);

// ✅ Via Socket.io (real-time updates)
socket.emit('chat:get-list', { 
  whatsappNumberId: 1, 
  limit: 50, 
  offset: 0 
});

socket.on('chat:list', (data) => {
  console.log('Real-time chat list update:', data);
  // Update sidebar chat list UI
  updateChatListUI(data.chats);
});
```

### 2. **Get Chat History** (Messages dalam chat window)
```javascript
// ✅ Via REST API - Load initial messages
const historyResponse = await fetch(`http://localhost:5000/api/v1/chats/${chatId}/messages?limit=50&offset=0`, {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
});
const { data } = await historyResponse.json();
console.log('Chat messages:', data);

// ✅ Via Socket.io (real-time)
socket.emit('chat:get-history', { 
  chatId: 'your-chat-uuid', 
  limit: 50, 
  offset: 0 
});

socket.on('chat:history', (data) => {
  console.log('Chat history loaded:', data);
  // Display messages in chat window
  displayMessagesInChatWindow(data.messages);
});
```

### 3. **🔥 Listen for New Messages** (Real-time - Most Important!)
```javascript
// ⚡ OTOMATIS receive new messages real-time
socket.on('chat:new-message', (data) => {
  console.log('🔥 New message received LIVE:', data);
  
  /* 📊 Real data format dari backend:
  {
    whatsappNumberId: 1,
    chatId: 'uuid-chat-id',
    message: {
      id: 'msg-uuid',
      messageId: 'whatsapp-msg-id',
      fromJid: '628123456789@s.whatsapp.net',
      fromNumber: '628123456789',
      fromName: 'John Doe',
      content: 'Hello from WhatsApp!',
      type: 'TEXT',
      isFromMe: false,
      status: 'DELIVERED',
      timestamp: '2025-09-16T12:49:02.357Z'
    }
  }
  */
  
  // 🎯 Update UI immediately
  // 1. Add message to current chat window (if open)
  if (data.chatId === currentOpenChatId) {
    addMessageToChatWindow(data.message);
    scrollToBottom(); // Auto scroll
  }
  
  // 2. Update chat list preview (sidebar)
  updateChatListPreview(data.chatId, {
    lastMessage: data.message.content,
    lastMessageTime: data.message.timestamp,
    unreadCount: data.message.isFromMe ? 0 : '+1'
  });
  
  // 3. Show notification (if chat not open)
  if (data.chatId !== currentOpenChatId && !data.message.isFromMe) {
    showNotification({
      title: data.message.fromName || data.message.fromNumber,
      body: data.message.content,
      icon: '/whatsapp-icon.png'
    });
  }
});
```

### 4. **Send Message** (Kirim pesan)
```javascript
// 📤 Send message via REST API
const sendMessage = async (sessionId, phoneNumber, messageText) => {
  try {
    const response = await fetch(`http://localhost:5000/api/v1/sessions/${sessionId}/send`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: phoneNumber,        // '628123456789'
        message: messageText    // 'Hello from WaBox!'
      })
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Message sent successfully:', result.data);
      
      // ⚡ Message akan OTOMATIS muncul di chat history
      // ⚡ Karena backend sudah store ke database dan broadcast via Socket.io
      // ⚡ Tidak perlu manual update UI!
      
      return result;
    } else {
      throw new Error(result.message);
    }
    
  } catch (error) {
    console.error('❌ Failed to send message:', error);
    // Show error to user
    showErrorNotification('Failed to send message');
  }
};

// 🎯 Usage example
await sendMessage('session-uuid', '628123456789', 'Hello from WaBox!');
```

### 5. **Mark Chat as Read** (Tandai sudah dibaca)
```javascript
// 👁️ Mark messages as read
const markChatAsRead = async (chatId) => {
  try {
    await fetch(`http://localhost:5000/api/v1/chats/${chatId}/read`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    });
    
    console.log('✅ Chat marked as read');
    
    // Reset unread count in UI
    resetUnreadCount(chatId);
    
  } catch (error) {
    console.error('❌ Failed to mark as read:', error);
  }
};

// ✅ Via Socket.io (alternative)
socket.emit('chat:mark-read', { chatId: 'chat-uuid' });
```

### 6. **Search Chats** (Cari percakapan)
```javascript
// 🔍 Search chats by contact name or message content
const searchChats = async (whatsappNumberId, searchQuery) => {
  try {
    const response = await fetch(`http://localhost:5000/api/v1/chats/${whatsappNumberId}/search?q=${encodeURIComponent(searchQuery)}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    });
    
    const { data } = await response.json();
    console.log('🔍 Search results:', data);
    return data;
    
  } catch (error) {
    console.error('❌ Search failed:', error);
    return [];
  }
};

// Usage
const results = await searchChats(1, 'john doe');
```

---

### 🎯 **Complete Real-time Integration Example**

```javascript
import io from 'socket.io-client';

class WaBoxChat {
  constructor() {
    this.socket = null;
    this.currentChatId = null;
    this.whatsappNumberId = 1;
    this.sessionId = 'your-session-uuid';
  }

  // 🚀 Initialize real-time connection
  async initialize() {
    // Connect Socket.io
    this.socket = io('http://localhost:5000', {
      auth: { token: localStorage.getItem('token') }
    });

    // ⚡ Setup real-time listeners
    this.setupRealTimeListeners();
    
    // 📋 Load initial data
    await this.loadInitialChatList();
  }

  // 🎧 Setup all real-time event listeners
  setupRealTimeListeners() {
    // 🔥 NEW MESSAGES (most important!)
    this.socket.on('chat:new-message', (data) => {
      this.handleNewMessage(data);
    });

    // 📋 Chat list updates
    this.socket.on('chat:list', (data) => {
      this.updateChatList(data.chats);
    });

    // 💬 Chat history updates
    this.socket.on('chat:history', (data) => {
      this.displayChatHistory(data.messages);
    });

    // 📱 WhatsApp status updates
    this.socket.on('whatsapp:status', (data) => {
      this.updateWhatsAppStatus(data);
    });
  }

  // 📋 Load initial chat list
  async loadInitialChatList() {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/chats/${this.whatsappNumberId}?limit=50`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });
      
      const { data } = await response.json();
      this.updateChatList(data);
      
    } catch (error) {
      console.error('❌ Failed to load chat list:', error);
    }
  }

  // 🔥 Handle new incoming messages
  handleNewMessage(data) {
    console.log('🔥 New message:', data);
    
    // Update current chat window
    if (data.chatId === this.currentChatId) {
      this.addMessageToCurrentChat(data.message);
      this.markChatAsRead(data.chatId); // Auto mark as read
    }
    
    // Update chat list sidebar
    this.updateChatListItem(data.chatId, {
      lastMessage: data.message.content,
      lastMessageTime: data.message.timestamp,
      unreadCount: data.message.isFromMe ? 0 : '+1'
    });
    
    // Show notification
    if (!data.message.isFromMe && data.chatId !== this.currentChatId) {
      this.showNotification(data.message);
    }
  }

  // 💬 Open specific chat
  async openChat(chatId) {
    this.currentChatId = chatId;
    
    // Load chat history
    this.socket.emit('chat:get-history', { 
      chatId, 
      limit: 50, 
      offset: 0 
    });
    
    // Mark as read
    await this.markChatAsRead(chatId);
  }

  // 📤 Send message
  async sendMessage(messageText) {
    if (!this.currentChatId || !messageText.trim()) return;
    
    try {
      const chat = this.getChat(this.currentChatId);
      
      const response = await fetch(`http://localhost:5000/api/v1/sessions/${this.sessionId}/send`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: chat.contactNumber,
          message: messageText
        })
      });

      const result = await response.json();
      
      if (result.success) {
        console.log('✅ Message sent');
        // Message will automatically appear via Socket.io broadcast
      } else {
        throw new Error(result.message);
      }
      
    } catch (error) {
      console.error('❌ Send failed:', error);
      this.showError('Failed to send message');
    }
  }

  // 👁️ Mark chat as read
  async markChatAsRead(chatId) {
    try {
      await fetch(`http://localhost:5000/api/v1/chats/${chatId}/read`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('❌ Mark read failed:', error);
    }
  }

  // UI update methods...
  updateChatList(chats) { /* Update sidebar UI */ }
  addMessageToCurrentChat(message) { /* Add to chat window */ }
  showNotification(message) { /* Browser notification */ }
  showError(message) { /* Error handling */ }
}

// 🚀 Initialize
const waboxChat = new WaBoxChat();
waboxChat.initialize();
```

---

### ⚡ **Real-time Flow Summary**

1. **🚀 Initialize** → Connect Socket.io + Load chat list
2. **👂 Listen** → `chat:new-message` event (auto-triggered saat ada pesan masuk)
3. **📥 Receive** → Message langsung masuk database + broadcast ke frontend
4. **🎯 Update UI** → Chat window + sidebar + notification
5. **📤 Send** → REST API + auto broadcast balik ke frontend
6. **🔄 Real-time** → Zero polling, instant updates!

**🎉 Sistem sudah optimal untuk real-time WhatsApp experience!**

---

## 🔍 Search & Filter

### Search Chats
```javascript
// GET /api/v1/chats/search/1?q=john
const searchResponse = await fetch('http://localhost:5000/api/v1/chats/search/1?q=john', {
  headers
});
const { data } = await searchResponse.json();
```

---

## 📊 Data Structures

### Chat List Item
```typescript
interface ChatPreview {
  id: string;
  contactName: string;
  contactNumber: string;
  contactJid: string;
  lastMessage: string;
  lastMessageTime: Date | null;
  unreadCount: number;
  isGroup: boolean;
  groupName?: string | null;
  isPinned: boolean;
  isArchived: boolean;
}
```

### Message Item
```typescript
interface MessageData {
  id: string;
  messageId: string;
  fromJid: string;
  fromNumber: string;
  fromName?: string | null;
  content?: string | null;
  type: 'TEXT' | 'IMAGE' | 'VIDEO' | 'AUDIO' | 'DOCUMENT';
  mediaUrl?: string | null;
  mediaCaption?: string | null;
  isFromMe: boolean;
  status: 'PENDING' | 'SENT' | 'DELIVERED' | 'READ';
  timestamp: Date;
}
```

---

## 🎯 Complete React Example

```jsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const WaBoxChat = () => {
  const [socket, setSocket] = useState(null);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Initialize Socket.io
    const socketInstance = io('http://localhost:5000', {
      auth: { token: localStorage.getItem('token') }
    });

    setSocket(socketInstance);

    // Listen for real-time events
    socketInstance.on('chat:list', (data) => {
      setChats(data.chats);
    });

    socketInstance.on('chat:new-message', (data) => {
      // Add new message to current chat
      if (data.chatId === currentChat?.id) {
        setMessages(prev => [...prev, data.message]);
      }
      
      // Update chat list
      setChats(prev => prev.map(chat => 
        chat.id === data.chatId 
          ? { ...chat, lastMessage: data.message.content, unreadCount: chat.unreadCount + 1 }
          : chat
      ));
    });

    // Load initial chat list
    socketInstance.emit('chat:get-list', { whatsappNumberId: 1, limit: 50 });

    return () => socketInstance.close();
  }, []);

  const selectChat = (chat) => {
    setCurrentChat(chat);
    socket.emit('chat:get-history', { chatId: chat.id, limit: 50 });
    socket.emit('chat:mark-read', { chatId: chat.id });
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !currentChat) return;

    try {
      await fetch(`http://localhost:5000/api/v1/sessions/${sessionId}/send`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: currentChat.contactNumber,
          message: newMessage
        })
      });
      
      setNewMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return (
    <div className="wabox-chat">
      {/* Chat List Sidebar */}
      <div className="chat-list">
        {chats.map(chat => (
          <div 
            key={chat.id} 
            onClick={() => selectChat(chat)}
            className={`chat-item ${currentChat?.id === chat.id ? 'active' : ''}`}
          >
            <h4>{chat.contactName}</h4>
            <p>{chat.lastMessage}</p>
            {chat.unreadCount > 0 && (
              <span className="unread-badge">{chat.unreadCount}</span>
            )}
          </div>
        ))}
      </div>

      {/* Chat Window */}
      {currentChat && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>{currentChat.contactName}</h3>
            <span>{currentChat.contactNumber}</span>
          </div>
          
          <div className="messages">
            {messages.map(msg => (
              <div 
                key={msg.id} 
                className={`message ${msg.isFromMe ? 'sent' : 'received'}`}
              >
                <p>{msg.content}</p>
                <span className="timestamp">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
          
          <div className="message-input">
            <input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaBoxChat;
```

---

## 🚀 Quick Start Checklist

1. ✅ **Setup Authentication** - Login dan simpan token
2. ✅ **Create WhatsApp Session** - POST ke `/api/v1/sessions/:whatsappNumberId`
3. ✅ **Show QR Code** - Display QR untuk pairing
4. ✅ **Connect Socket.io** - Real-time updates
5. ✅ **Load Chat List** - GET chat list atau via Socket.io
6. ✅ **Handle New Messages** - Listen `chat:new-message` event
7. ✅ **Send Messages** - POST ke `/api/v1/sessions/:sessionId/send`
8. ✅ **Update UI Real-time** - Auto update chat list & messages

---

## 🔗 API Base URL
- **Development:** `http://localhost:5000`
- **Socket.io:** `http://localhost:5000` (same server)
- **API Docs:** `http://localhost:5000/api/docs`

**🎉 Ready to integrate! Semua fitur real-time chat sudah siap pakai.**
