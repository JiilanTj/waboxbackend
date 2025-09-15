# WaBox Backend API Documentation

## 📚 **API Documentation**

Dokumentasi API lengkap tersedia dalam format interaktif menggunakan Swagger UI.

### **Akses Dokumentasi:**
- **Interactive Docs:** [http://localhost:5000/api/docs](http://localhost:5000/api/docs)
- **JSON Schema:** [http://localhost:5000/api/docs.json](http://localhost:5000/api/docs.json)

## 🔐 **Authentication**

API menggunakan JWT (JSON Web Token) untuk authentication. 

### **Header Request:**
```
Authorization: Bearer <your-jwt-token>
```

### **Login Credentials (Development):**
- **Admin:** `admin` / `admin123`
- **User:** `user1` / `user123`

## 📋 **Available Endpoints**

### **🔑 Authentication**
- `POST /api/v1/login` - User login
- `GET /api/v1/me` - Get current user profile
- `POST /api/v1/logout` - User logout

### **👥 User Management (Admin Only)**
- `GET /api/v1/users` - Get all users with pagination
- `POST /api/v1/users` - Create new user
- `GET /api/v1/users/:id` - Get user by ID
- `PUT /api/v1/users/:id` - Update user
- `DELETE /api/v1/users/:id` - Delete user

### **🛠️ System**
- `GET /health` - Health check
- `GET /api` - API information

## 📊 **Response Format**

### **Success Response:**
```json
{
  "message": "Success message",
  "data": { ... }
}
```

### **Error Response:**
```json
{
  "error": "Error Type",
  "message": "Error description"
}
```

## 🚀 **Quick Start Testing**

### **1. Login:**
```bash
curl -X POST http://localhost:5000/api/v1/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'
```

### **2. Get Profile:**
```bash
curl -X GET http://localhost:5000/api/v1/me \
  -H "Authorization: Bearer <your-token>"
```

### **3. Get Users (Admin):**
```bash
curl -X GET "http://localhost:5000/api/v1/users?page=1&limit=10" \
  -H "Authorization: Bearer <admin-token>"
```

## 📝 **Query Parameters**

### **Users Pagination:**
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `search` - Search term for name/username/email
- `role` - Filter by role (USER|ADMIN)
- `sortBy` - Sort field (default: createdAt)
- `sortOrder` - Sort order (asc|desc, default: desc)

## 🔒 **Role-based Access**

- **Public:** `/health`, `/api`, `/api/v1/login`
- **Authenticated:** `/api/v1/me`, `/api/v1/logout`
- **Admin Only:** All `/api/v1/users/*` endpoints

## 📋 **Status Codes**

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `409` - Conflict
- `500` - Internal Server Error

## 🔧 **Development**

Para pengembang dapat menggunakan dokumentasi interaktif di `/api/docs` untuk:
- Test semua endpoints secara langsung
- Melihat schema request/response
- Generate client code
- Export API collection

Dokumentasi akan otomatis terupdate setiap kali ada perubahan pada routes atau controllers.
