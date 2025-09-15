import { Router } from 'express';
import { login, getMe, logout } from '../controllers/authController';
import { authenticateToken } from '../utils/middleware';

const router = Router();

// Auth routes
router.post('/api/v1/login', login);
router.get('/api/v1/me', authenticateToken, getMe);
router.post('/api/v1/logout', authenticateToken, logout);

export default router;
