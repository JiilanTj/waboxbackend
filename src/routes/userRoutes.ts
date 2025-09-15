import { Router } from 'express';
import { 
  getUsers, 
  createUser, 
  getUserById, 
  updateUser, 
  deleteUser 
} from '../controllers/userController';
import { authenticateToken, requireAdmin } from '../utils/middleware';

const router = Router();

// All user routes require admin authentication
router.use(authenticateToken, requireAdmin);

// User management routes (Admin only)
router.get('/api/v1/users', getUsers);           // GET all users with pagination
router.post('/api/v1/users', createUser);        // CREATE new user
router.get('/api/v1/users/:id', getUserById);    // GET single user by ID
router.put('/api/v1/users/:id', updateUser);     // UPDATE user by ID
router.delete('/api/v1/users/:id', deleteUser);  // DELETE user by ID

export default router;
