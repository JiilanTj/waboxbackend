import { Router } from 'express';
import { getHealth, getApiInfo } from '../controllers/appController';

const router = Router();

// Health check endpoint
router.get('/health', getHealth);

// API info endpoint  
router.get('/api', getApiInfo);

export default router;
