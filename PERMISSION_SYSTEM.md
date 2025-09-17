# 🔐 WhatsApp Number Permission System

## 📋 Overview
Sistem permission WaBox memungkinkan **Admin** untuk mengatur akses user ke WhatsApp numbers secara granular. User biasa hanya dapat mengakses WhatsApp numbers yang telah diberikan permission oleh Admin.

## 🎯 Key Features
- ✅ **Granular Access Control** - Admin atur permission per user per WhatsApp number
- ✅ **Auto Permission Check** - Semua chat endpoint otomatis check permission
- ✅ **Self Permission View** - User bisa lihat permission sendiri
- ✅ **Admin Management** - Full CRUD permission management untuk Admin

---

## 🚀 API Endpoints

### 1. **Create Permission** (Admin Only)
```javascript
// POST /api/v1/permissions
const response = await fetch('http://localhost:5000/api/v1/permissions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${adminToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    userId: 2,              // User yang dikasih akses
    whatsappNumberId: 1     // WhatsApp number yang boleh diakses
  })
});

const result = await response.json();
console.log('Permission created:', result);
```

### 2. **Get My Permissions** (User)
```javascript
// GET /api/v1/permissions/me
const response = await fetch('http://localhost:5000/api/v1/permissions/me', {
  headers: {
    'Authorization': `Bearer ${userToken}`,
    'Content-Type': 'application/json'
  }
});

const { data } = await response.json();
console.log('My permissions:', data);

/* Admin User Response (gets ALL WhatsApp numbers):
{
  "success": true,
  "message": "Admin permissions retrieved successfully (full access)",
  "data": [
    {
      "id": null,                    // No permission record for admin
      "userId": 1,
      "whatsappNumberId": 1,
      "isAdminAccess": true,         // Flag indicating admin access
      "whatsappNumber": {
        "id": 1,
        "phoneNumber": "628123456789",
        "name": "Customer Service",
        "isActive": true
      }
    },
    {
      "id": null,
      "userId": 1,
      "whatsappNumberId": 2,
      "isAdminAccess": true,
      "whatsappNumber": {
        "id": 2,
        "phoneNumber": "628987654321",
        "name": "Sales Team",
        "isActive": true
      }
    }
  ],
  "totalWhatsAppNumbers": 2,
  "accessLevel": "ADMIN_FULL_ACCESS"
}
*/

/* Regular User Response (only permitted numbers):
{
  "success": true,
  "message": "User permissions retrieved successfully",
  "data": [
    {
      "id": 5,                       // Actual permission record ID
      "userId": 2,
      "whatsappNumberId": 1,
      "isAdminAccess": false,        // Explicit permission, not admin
      "createdAt": "2025-09-17T10:00:00.000Z",
      "whatsappNumber": {
        "id": 1,
        "phoneNumber": "628123456789",
        "name": "Customer Service",
        "isActive": true
      }
    }
  ],
  "totalPermissions": 1,
  "accessLevel": "USER_LIMITED_ACCESS"
}
*/
```

### 3. **Check Permission** (User)
```javascript
// GET /api/v1/permissions/check/:whatsappNumberId
const whatsappNumberId = 1;
const response = await fetch(`http://localhost:5000/api/v1/permissions/check/${whatsappNumberId}`, {
  headers: {
    'Authorization': `Bearer ${userToken}`,
    'Content-Type': 'application/json'
  }
});

const { data } = await response.json();
console.log('Permission check:', data);

/* Response format:
{
  "hasPermission": true,
  "permission": {
    "id": 1,
    "userId": 2,
    "whatsappNumberId": 1,
    "whatsappNumber": {...}
  },
  "reason": "User has explicit permission"
}
*/
```

### 4. **Get All Permissions** (Admin Only)
```javascript
// GET /api/v1/permissions?userId=2&limit=50&offset=0
const response = await fetch('http://localhost:5000/api/v1/permissions?limit=50&offset=0', {
  headers: {
    'Authorization': `Bearer ${adminToken}`,
    'Content-Type': 'application/json'
  }
});

const { data } = await response.json();
console.log('All permissions:', data);

// Filter by user
const userPermissions = await fetch('http://localhost:5000/api/v1/permissions?userId=2', {
  headers: {
    'Authorization': `Bearer ${adminToken}`,
    'Content-Type': 'application/json'
  }
});
```

### 5. **Get User Permissions** (Admin Only)
```javascript
// GET /api/v1/permissions/user/:userId
const userId = 2;
const response = await fetch(`http://localhost:5000/api/v1/permissions/user/${userId}`, {
  headers: {
    'Authorization': `Bearer ${adminToken}`,
    'Content-Type': 'application/json'
  }
});

const { data } = await response.json();
console.log('User details with permissions:', data);

/* Response format:
{
  "user": {
    "id": 2,
    "name": "John Doe",
    "username": "john",
    "email": "john@example.com",
    "role": "USER"
  },
  "permissions": [...]
}
*/
```

### 6. **Update Permission** (Admin Only)
```javascript
// PUT /api/v1/permissions/:id
const permissionId = 1;
const response = await fetch(`http://localhost:5000/api/v1/permissions/${permissionId}`, {
  method: 'PUT',
  headers: {
    'Authorization': `Bearer ${adminToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    userId: 3,              // Ganti ke user lain
    whatsappNumberId: 2     // Atau ganti WhatsApp number
  })
});
```

### 7. **Delete Permission** (Admin Only)
```javascript
// DELETE /api/v1/permissions/:id
const permissionId = 1;
const response = await fetch(`http://localhost:5000/api/v1/permissions/${permissionId}`, {
  method: 'DELETE',
  headers: {
    'Authorization': `Bearer ${adminToken}`,
    'Content-Type': 'application/json'
  }
});

const result = await response.json();
console.log('Permission deleted:', result);
```

---

## 🔒 How Permission System Works

### **Admin Users (ADMIN role):**
- ✅ **Full Access** - Dapat akses semua WhatsApp numbers tanpa restriction
- ✅ **Manage Permissions** - Dapat create, read, update, delete permissions
- ✅ **Bypass Permission Check** - Tidak perlu permission record untuk akses
- ✅ **Get All Numbers via /me** - Endpoint `/permissions/me` return semua WhatsApp numbers
- ✅ **Admin Access Flag** - Response include `isAdminAccess: true` untuk distinguishing

### **Regular Users (USER role):**
- ❌ **Restricted Access** - Hanya bisa akses WhatsApp numbers yang diberi permission
- ✅ **View Own Permissions** - Bisa lihat permission sendiri via `/me` endpoint
- ❌ **Cannot Manage** - Tidak bisa create/edit/delete permission
- ✅ **Explicit Permissions Only** - `/permissions/me` hanya return numbers dengan permission record
- ✅ **Permission Record Details** - Response include actual permission ID dan timestamps

---

## 🎯 Permission Integration in Chat APIs

Semua chat endpoint sudah **otomatis check permission**:

### **Chat List** - `GET /api/v1/chats/:whatsappNumberId`
```javascript
// ✅ User harus punya permission untuk whatsappNumberId ini
const response = await fetch('http://localhost:5000/api/v1/chats/1', {
  headers: {
    'Authorization': `Bearer ${userToken}`,
    'Content-Type': 'application/json'
  }
});

// Response 403 jika tidak ada permission
```

### **Chat History** - `GET /api/v1/chats/:chatId/messages`
```javascript
// ✅ System check permission berdasarkan WhatsApp number dari chat
const response = await fetch('http://localhost:5000/api/v1/chats/chat-uuid-123/messages', {
  headers: {
    'Authorization': `Bearer ${userToken}`,
    'Content-Type': 'application/json'
  }
});

// Response 403 jika user tidak punya akses ke WhatsApp number dari chat ini
```

### **Mark as Read** - `PUT /api/v1/chats/:chatId/read`
```javascript
// ✅ Permission check otomatis
const response = await fetch('http://localhost:5000/api/v1/chats/chat-uuid-123/read', {
  method: 'PUT',
  headers: {
    'Authorization': `Bearer ${userToken}`,
    'Content-Type': 'application/json'
  }
});
```

### **Search Chats** - `GET /api/v1/chats/:whatsappNumberId/search`
```javascript
// ✅ User harus punya permission untuk whatsappNumberId ini
const response = await fetch('http://localhost:5000/api/v1/chats/1/search?q=john', {
  headers: {
    'Authorization': `Bearer ${userToken}`,
    'Content-Type': 'application/json'
  }
});
```

---

## 🏗️ Database Schema

```sql
CREATE TABLE wa_number_permissions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  whatsapp_number_id INTEGER NOT NULL REFERENCES whatsapp_numbers(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  -- Unique constraint: satu user tidak boleh punya duplicate permission untuk WA number yang sama
  UNIQUE(user_id, whatsapp_number_id)
);

-- Indexes for performance
CREATE INDEX idx_wa_permissions_user_id ON wa_number_permissions(user_id);
CREATE INDEX idx_wa_permissions_whatsapp_id ON wa_number_permissions(whatsapp_number_id);
```

---

## 🎭 Usage Scenarios

### **Scenario 1: Multi-agent Customer Service**
```javascript
// Admin setup permissions:
// Agent A → dapat akses WhatsApp CS1 dan CS2
// Agent B → hanya dapat akses WhatsApp CS3
// Agent C → dapat akses semua (atau buat role ADMIN)

// Create permissions
await createPermission(agentA_userId, whatsapp_CS1_id);
await createPermission(agentA_userId, whatsapp_CS2_id);
await createPermission(agentB_userId, whatsapp_CS3_id);
```

### **Scenario 2: Department Separation**
```javascript
// Sales team → akses WhatsApp Sales
// Support team → akses WhatsApp Support
// Marketing team → akses WhatsApp Marketing

// Sales permissions
await createPermission(sales_user1, whatsapp_sales_id);
await createPermission(sales_user2, whatsapp_sales_id);

// Support permissions
await createPermission(support_user1, whatsapp_support_id);
await createPermission(support_user2, whatsapp_support_id);
```

### **Scenario 3: Client-specific Access**
```javascript
// User A → hanya akses WhatsApp untuk Client A
// User B → hanya akses WhatsApp untuk Client B
// Manager → akses semua WhatsApp clients

await createPermission(userA_id, whatsapp_clientA_id);
await createPermission(userB_id, whatsapp_clientB_id);
// Manager menggunakan role ADMIN
```

---

## 🚀 Frontend Integration Example

```javascript
class PermissionManager {
  constructor(token) {
    this.token = token;
    this.baseUrl = 'http://localhost:5000/api/v1';
  }

  // Check user permissions on app start
  async loadUserPermissions() {
    try {
      const response = await fetch(`${this.baseUrl}/permissions/me`, {
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const result = await response.json();
      this.userPermissions = result.data;
      this.accessLevel = result.accessLevel;
      
      // Extract allowed WhatsApp numbers
      this.allowedWhatsAppNumbers = result.data.map(p => p.whatsappNumberId);
      
      // Store admin status
      this.isAdmin = result.accessLevel === 'ADMIN_FULL_ACCESS';
      
      console.log(`User access level: ${this.accessLevel}`);
      console.log(`Allowed WhatsApp numbers: ${this.allowedWhatsAppNumbers.length}`);
      
      return result.data;
    } catch (error) {
      console.error('Failed to load permissions:', error);
      return [];
    }
  }

  // Check if user can access specific WhatsApp number
  canAccess(whatsappNumberId) {
    return this.allowedWhatsAppNumbers.includes(whatsappNumberId);
  }

  // Filter WhatsApp numbers based on permissions
  filterAllowedNumbers(allWhatsAppNumbers) {
    return allWhatsAppNumbers.filter(wa => 
      this.canAccess(wa.id)
    );
  }

  // Admin functions
  async createPermission(userId, whatsappNumberId) {
    const response = await fetch(`${this.baseUrl}/permissions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, whatsappNumberId })
    });
    
    return response.json();
  }

  async deletePermission(permissionId) {
    const response = await fetch(`${this.baseUrl}/permissions/${permissionId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      }
    });
    
    return response.json();
  }
}

// Usage
const permissionManager = new PermissionManager(userToken);
await permissionManager.loadUserPermissions();

// Check before accessing chat
if (permissionManager.canAccess(whatsappNumberId)) {
  // Load chat list
  loadChatList(whatsappNumberId);
} else {
  showError('You do not have permission to access this WhatsApp number');
}
```

---

## ✅ Testing Checklist

### **Permission Creation:**
- [ ] Admin dapat create permission
- [ ] User biasa tidak dapat create permission
- [ ] Duplicate permission ditolak (409)
- [ ] Invalid user/WhatsApp ID ditolak (404)

### **Permission Access:**
- [ ] Admin dapat akses semua WhatsApp numbers
- [ ] User hanya dapat akses numbers yang diberi permission
- [ ] Chat endpoints otomatis check permission
- [ ] Socket.io events juga respect permissions

### **Permission Management:**
- [ ] Get all permissions (admin only)
- [ ] Get user-specific permissions (admin only)
- [ ] Update permission (admin only)
- [ ] Delete permission (admin only)

### **User Self-Service:**
- [ ] User dapat lihat permission sendiri via `/me`
- [ ] User dapat check permission specific number via `/check/:id`
- [ ] Permission response include WhatsApp number details

---

## 🎉 Summary

**Permission system sudah fully implemented dengan:**

1. ✅ **Complete CRUD API** - Create, Read, Update, Delete permissions
2. ✅ **Automatic Permission Check** - Semua chat endpoint otomatis check
3. ✅ **Role-based Access** - Admin full access, User restricted
4. ✅ **Self-service Endpoints** - User bisa check permission sendiri
5. ✅ **Database Constraints** - Prevent duplicate permissions
6. ✅ **Full API Documentation** - Swagger docs included

**Ready untuk production use! 🚀**
