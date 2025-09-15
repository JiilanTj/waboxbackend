# 🚀 WaBox Backend

<div align="center">

![WaBox Logo](https://img.shields.io/badge/WaBox-Backend-green?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![Express](https://img.shields.io/badge/Express-5.0+-black?style=for-the-badge&logo=express)
![Prisma](https://img.shields.io/badge/Prisma-6.0+-2D3748?style=for-the-badge&logo=prisma)
![MySQL](https://img.shields.io/badge/MySQL-8.0+-orange?style=for-the-badge&logo=mysql)

![GitHub stars](https://img.shields.io/github/stars/JiilanTj/waboxbackend?style=social)
![GitHub forks](https://img.shields.io/github/forks/JiilanTj/waboxbackend?style=social)
![GitHub issues](https://img.shields.io/github/issues/JiilanTj/waboxbackend)

**Backend API untuk aplikasi pengelola pesan WhatsApp multi-account dan multi-CS untuk bisnis**

[📚 API Documentation](http://localhost:5000/api/docs) • [🐛 Report Bug](https://github.com/JiilanTj/waboxbackend/issues) • [💡 Request Feature](https://github.com/JiilanTj/waboxbackend/issues)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🔧 Configuration](#-configuration)
- [📚 API Documentation](#-api-documentation)
- [🧪 Testing](#-testing)
- [🚢 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

- 🔐 **JWT Authentication** - Secure login system dengan role-based access
- 👥 **User Management** - CRUD operations untuk user dengan pagination
- 🔒 **Role-based Authorization** - Admin dan User roles
- 📚 **Auto-generated API Docs** - Interactive Swagger documentation
- 🌐 **Real-time Communication** - Socket.io integration
- 🗄️ **Database ORM** - Prisma dengan MySQL
- 🛡️ **Security First** - Helmet, CORS, bcrypt password hashing
- 📦 **TypeScript** - Type-safe development
- 🔄 **Hot Reload** - Development dengan nodemon
- 📊 **Request Logging** - Morgan logging middleware

---

## 🛠️ Tech Stack

### **Backend Framework**
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Type-safe JavaScript

### **Database & ORM**
- **MySQL** - Relational database
- **Prisma** - Modern database toolkit

### **Authentication & Security**
- **JWT** - JSON Web Tokens
- **bcrypt** - Password hashing
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing

### **Real-time & Documentation**
- **Socket.io** - Real-time communication
- **Swagger** - API documentation
- **Morgan** - HTTP request logging

---

## 🚀 Quick Start

### **Prerequisites**

Pastikan Anda memiliki aplikasi berikut terinstall:

- **Node.js** (v18 atau lebih baru)
- **npm** atau **yarn**
- **MySQL** (v8.0 atau lebih baru)

### **Installation**

1. **Clone repository**
   ```bash
   git clone https://github.com/JiilanTj/waboxbackend.git
   cd waboxbackend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file:
   ```env
   # Database Configuration
   DATABASE_URL="mysql://username:password@localhost:3306/wabox_db"
   
   # JWT Configuration
   JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
   JWT_EXPIRES_IN="7d"
   
   # Server Configuration
   PORT=5000
   NODE_ENV="development"
   
   # Frontend Configuration
   FRONTEND_URL="http://localhost:3000"
   ```

4. **Setup database**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Run database migrations
   npm run db:migrate
   
   # Seed database with sample data
   npm run db:seed
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

   Server akan berjalan di `http://localhost:5000`

### **Default Login Credentials**

```
Admin User:
- Username: admin
- Password: admin123

Regular User:
- Username: user1  
- Password: user123
```

---

## 📁 Project Structure

```
waboxbackend/
├── 📁 prisma/
│   ├── schema.prisma          # Database schema
│   ├── seed.ts               # Database seeder
│   └── migrations/           # Database migrations
├── 📁 src/
│   ├── 📁 controllers/       # Route handlers
│   │   ├── authController.ts
│   │   ├── userController.ts
│   │   └── appController.ts
│   ├── 📁 routes/            # API routes
│   │   ├── authRoutes.ts
│   │   ├── userRoutes.ts
│   │   ├── appRoutes.ts
│   │   └── index.ts
│   ├── 📁 utils/             # Utilities & middleware
│   │   ├── auth.ts           # JWT authentication
│   │   ├── middleware.ts     # Express middleware
│   │   ├── swagger.ts        # API documentation
│   │   └── socketHandler.ts  # Socket.io handlers
│   ├── 📁 generated/         # Generated Prisma client
│   │   └── prisma/
│   └── server.ts             # Application entry point
├── 📁 dist/                  # Compiled JavaScript
├── package.json              # Dependencies & scripts
├── tsconfig.json            # TypeScript configuration
├── nodemon.json             # Nodemon configuration
├── .env.example             # Environment variables template
├── API_DOCS.md              # API documentation
└── README.md                # This file
```

---

## 🔧 Configuration

### **Environment Variables**

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | MySQL connection string | - |
| `JWT_SECRET` | JWT signing secret | - |
| `JWT_EXPIRES_IN` | JWT expiration time | `7d` |
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment mode | `development` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:3000` |

### **Database Configuration**

Aplikasi menggunakan MySQL dengan Prisma ORM. Schema database didefinisikan di `prisma/schema.prisma`.

### **Scripts**

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Build TypeScript to JavaScript
npm run start        # Start production server

# Database
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run database migrations
npm run db:seed      # Seed database with sample data
npm run db:reset     # Reset database and seed

# Utilities
npm run lint         # Run TypeScript compiler check
npm run clean        # Remove dist directory
```

---

## 📚 API Documentation

### **Interactive Documentation**

API documentation tersedia dalam format interaktif menggunakan Swagger UI:

🌐 **[http://localhost:5000/api/docs](http://localhost:5000/api/docs)**

### **API Endpoints Overview**

#### **🔑 Authentication**
- `POST /api/v1/login` - User login
- `GET /api/v1/me` - Get current user profile
- `POST /api/v1/logout` - User logout

#### **👥 User Management** (Admin Only)
- `GET /api/v1/users` - Get users with pagination & filtering
- `POST /api/v1/users` - Create new user
- `GET /api/v1/users/:id` - Get user by ID
- `PUT /api/v1/users/:id` - Update user
- `DELETE /api/v1/users/:id` - Delete user

#### **🛠️ System**
- `GET /health` - Health check
- `GET /api` - API information

### **Authentication**

API menggunakan JWT (JSON Web Token). Include token di header:

```
Authorization: Bearer <your-jwt-token>
```

### **Quick API Test**

```bash
# Login
curl -X POST http://localhost:5000/api/v1/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'

# Get profile (replace <token> with actual token)
curl -X GET http://localhost:5000/api/v1/me \
  -H "Authorization: Bearer <token>"
```

---

## 🧪 Testing

### **Manual Testing**

1. **Start server**
   ```bash
   npm run dev
   ```

2. **Open API documentation**
   ```
   http://localhost:5000/api/docs
   ```

3. **Test authentication**
   - Login dengan credentials default
   - Copy JWT token dari response
   - Use token untuk test protected endpoints

### **Health Check**

```bash
curl http://localhost:5000/health
```

---

## 🚢 Deployment

### **Production Build**

```bash
# Build application
npm run build

# Start production server
npm start
```

### **Environment Setup**

1. Set production environment variables
2. Setup production MySQL database
3. Run migrations: `npm run db:migrate`
4. Seed database: `npm run db:seed`

### **Docker** (Optional)

```dockerfile
# Dockerfile example
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]
```

---

## 🤝 Contributing

Kontribusi sangat welcome! Silakan follow langkah berikut:

1. **Fork repository**
2. **Create feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open Pull Request**

### **Development Guidelines**

- Gunakan TypeScript untuk type safety
- Follow existing code style dan naming conventions
- Tambahkan Swagger documentation untuk API endpoints baru
- Test API endpoints sebelum submit PR

---

## 📄 License

This project is licensed under the **ISC License**. See [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**JiilanTj**
- GitHub: [@JiilanTj](https://github.com/JiilanTj)
- Repository: [waboxbackend](https://github.com/JiilanTj/waboxbackend)

---

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) - Fast, unopinionated web framework
- [Prisma](https://www.prisma.io/) - Modern database toolkit
- [Swagger](https://swagger.io/) - API documentation
- [JWT](https://jwt.io/) - JSON Web Tokens
- [Socket.io](https://socket.io/) - Real-time communication

---

<div align="center">

**⭐ Jangan lupa kasih star jika project ini membantu! ⭐**

Made with ❤️ by [JiilanTj](https://github.com/JiilanTj)

</div>
