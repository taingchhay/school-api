import express from 'express';
import { getUsers } from '../controllers/user.controller.js';
import authenticateJWT from '../middleware/auth.js';

const router = express.Router();

router.get('/users', authenticateJWT, getUsers);

export default router;
