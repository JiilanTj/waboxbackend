import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'WaBox Backend API',
    version: '1.0.0',
    description: 'Backend API untuk aplikasi pengelola pesan WhatsApp multi-account dan multi-CS',
    contact: {
      name: 'Palvia',
      email: 'palvia@wabox.com'
    }
  },
  servers: [
    {
      url: process.env.API_BASE_URL || 'http://localhost:5000',
      description: 'Development server'
    }
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
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
