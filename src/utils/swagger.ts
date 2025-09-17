import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'WaBox Backend API',
    version: '1.0.0',
    description: `
Backend API untuk aplikasi pengelola pesan WhatsApp multi-account dan multi-CS.

## Real-time Features 📡

WaBox menggunakan Socket.io untuk fitur real-time seperti WhatsApp Web:

- ✅ Real-time chat list updates
- ✅ Live message notifications  
- ✅ WhatsApp connection status
- ✅ QR code real-time updates
- ✅ Read status synchronization

### Socket.io Connection
\`\`\`javascript
const socket = io('http://localhost:5000', {
  auth: { token: 'your-jwt-token' }
});
\`\`\`

### Key Events:
- **chat:get-list** - Request chat list
- **chat:get-history** - Request chat messages
- **message:new** - New message received
- **whatsapp:status** - Connection status updates
- **whatsapp:qr** - QR code for pairing

📖 **Dokumentasi lengkap**: [Real-time Documentation](https://github.com/palvia/wabox/docs/REALTIME.md)
    `,
    contact: {
      name: 'Palvia',
      email: 'palvia@wabox.com'
    }
  },
  tags: [
    {
      name: 'Authentication',
      description: 'User authentication and authorization endpoints'
    },
    {
      name: 'Users',
      description: 'User management endpoints'
    },
    {
      name: 'WhatsApp Numbers',
      description: 'WhatsApp number management endpoints'
    },
    {
      name: 'WhatsApp Sessions',
      description: 'WhatsApp session management (connection, QR, messaging)'
    },
    {
      name: 'Chat Management',
      description: 'Chat list, message history, and chat operations'
    },
    {
      name: 'Real-time',
      description: 'Socket.io real-time features and testing endpoints'
    },
    {
      name: 'Application',
      description: 'General application endpoints (health check, etc.)'
    },
    {
      name: 'WaPermissions',
      description: 'WhatsApp number permissions management endpoints'
    }
  ],
  servers: [
    {
      url: process.env.API_BASE_URL || 'http://localhost:5000',
      description: 'Development server'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'JWT Authorization header menggunakan Bearer scheme'
      }
    },
    schemas: {
      // User schemas
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'User ID'
          },
          name: {
            type: 'string',
            description: 'Full name of the user'
          },
          username: {
            type: 'string',
            description: 'Unique username'
          },
          email: {
            type: 'string',
            format: 'email',
            description: 'Email address'
          },
          role: {
            type: 'string',
            enum: ['USER', 'ADMIN'],
            description: 'User role'
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'Account creation date'
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            description: 'Last update date'
          }
        }
      },
      // WhatsApp Number schemas
      WhatsAppNumber: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'WhatsApp number ID'
          },
          name: {
            type: 'string',
            description: 'Display name for the WhatsApp number'
          },
          phoneNumber: {
            type: 'string',
            description: 'WhatsApp phone number'
          },
          isActive: {
            type: 'boolean',
            description: 'Whether the number is active'
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'Creation date'
          }
        }
      },
      CreateWhatsAppNumberRequest: {
        type: 'object',
        required: ['name', 'phoneNumber'],
        properties: {
          name: {
            type: 'string',
            description: 'Display name for the WhatsApp number'
          },
          phoneNumber: {
            type: 'string',
            description: 'WhatsApp phone number (must be unique)'
          },
          isActive: {
            type: 'boolean',
            default: false,
            description: 'Whether the number is active'
          }
        }
      },
      WhatsAppNumbersResponse: {
        type: 'object',
        properties: {
          whatsappNumbers: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/WhatsAppNumber'
            }
          },
          pagination: {
            type: 'object',
            properties: {
              currentPage: {
                type: 'integer',
                description: 'Current page number'
              },
              totalPages: {
                type: 'integer',
                description: 'Total number of pages'
              },
              totalNumbers: {
                type: 'integer',
                description: 'Total number of WhatsApp numbers'
              },
              limit: {
                type: 'integer',
                description: 'Items per page'
              },
              hasNextPage: {
                type: 'boolean',
                description: 'Has next page'
              },
              hasPrevPage: {
                type: 'boolean',
                description: 'Has previous page'
              }
            }
          }
        }
      },
      // Login schemas
      LoginRequest: {
        type: 'object',
        required: ['username', 'password'],
        properties: {
          username: {
            type: 'string',
            description: 'Username or email address'
          },
          password: {
            type: 'string',
            description: 'User password'
          }
        }
      },
      LoginResponse: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Success message'
          },
          user: {
            $ref: '#/components/schemas/User'
          },
          token: {
            type: 'string',
            description: 'JWT access token'
          }
        }
      },
      // Create user schemas
      CreateUserRequest: {
        type: 'object',
        required: ['name', 'username', 'email', 'password'],
        properties: {
          name: {
            type: 'string',
            description: 'Full name of the user'
          },
          username: {
            type: 'string',
            description: 'Unique username'
          },
          email: {
            type: 'string',
            format: 'email',
            description: 'Email address'
          },
          password: {
            type: 'string',
            minLength: 6,
            description: 'Password (minimum 6 characters)'
          },
          role: {
            type: 'string',
            enum: ['USER', 'ADMIN'],
            default: 'USER',
            description: 'User role'
          }
        }
      },
      // Error schemas
      ErrorResponse: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            description: 'Error type'
          },
          message: {
            type: 'string',
            description: 'Error message'
          }
        }
      },
      // Pagination
      PaginationMeta: {
        type: 'object',
        properties: {
          currentPage: {
            type: 'integer',
            description: 'Current page number'
          },
          totalPages: {
            type: 'integer',
            description: 'Total number of pages'
          },
          totalUsers: {
            type: 'integer',
            description: 'Total number of users'
          },
          limit: {
            type: 'integer',
            description: 'Items per page'
          },
          hasNextPage: {
            type: 'boolean',
            description: 'Has next page'
          },
          hasPrevPage: {
            type: 'boolean',
            description: 'Has previous page'
          }
        }
      },
      UsersResponse: {
        type: 'object',
        properties: {
          users: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/User'
            }
          },
          pagination: {
            $ref: '#/components/schemas/PaginationMeta'
          }
        }
      },
      // Real-time schemas
      SocketEvent: {
        type: 'object',
        properties: {
          event: {
            type: 'string',
            description: 'Socket.io event name'
          },
          data: {
            type: 'object',
            description: 'Event payload'
          }
        }
      },
      ChatPreview: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Chat UUID'
          },
          contactName: {
            type: 'string',
            description: 'Contact display name'
          },
          contactNumber: {
            type: 'string',
            description: 'Contact phone number'
          },
          contactJid: {
            type: 'string',
            description: 'WhatsApp JID'
          },
          lastMessage: {
            type: 'string',
            description: 'Preview of last message'
          },
          lastMessageTime: {
            type: 'string',
            format: 'date-time',
            description: 'Timestamp of last message'
          },
          unreadCount: {
            type: 'integer',
            description: 'Number of unread messages'
          },
          isGroup: {
            type: 'boolean',
            description: 'Whether this is a group chat'
          },
          isPinned: {
            type: 'boolean',
            description: 'Whether chat is pinned'
          },
          isArchived: {
            type: 'boolean',
            description: 'Whether chat is archived'
          }
        }
      },
      MessageData: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Message UUID'
          },
          messageId: {
            type: 'string',
            description: 'WhatsApp message ID'
          },
          fromJid: {
            type: 'string',
            description: 'Sender JID'
          },
          fromNumber: {
            type: 'string',
            description: 'Sender phone number'
          },
          fromName: {
            type: 'string',
            description: 'Sender display name'
          },
          content: {
            type: 'string',
            description: 'Message content'
          },
          type: {
            type: 'string',
            enum: ['TEXT', 'IMAGE', 'VIDEO', 'AUDIO', 'DOCUMENT', 'LOCATION', 'CONTACT', 'STICKER'],
            description: 'Message type'
          },
          isFromMe: {
            type: 'boolean',
            description: 'Whether message was sent by us'
          },
          status: {
            type: 'string',
            enum: ['PENDING', 'SENT', 'DELIVERED', 'READ', 'FAILED'],
            description: 'Message status'
          },
          timestamp: {
            type: 'string',
            format: 'date-time',
            description: 'Message timestamp'
          }
        }
      },
      RealtimeStatus: {
        type: 'object',
        properties: {
          socketService: {
            type: 'string',
            description: 'Socket.io service status'
          },
          connectedUsers: {
            type: 'integer',
            description: 'Number of connected users'
          },
          features: {
            type: 'array',
            items: {
              type: 'string'
            },
            description: 'Available real-time features'
          }
        }
      }
    }
  },
  security: [
    {
      BearerAuth: []
    }
  ]
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // Path to the API docs
};

// Initialize swagger-jsdoc
const specs = swaggerJSDoc(options);

export const setupSwagger = (app: Application): void => {
  // Swagger page
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs, {
    explorer: true,
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'WaBox API Documentation'
  }));

  // Docs in JSON format
  app.get('/api/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(specs);
  });

  console.log('📚 Swagger documentation available at /api/docs');
};
