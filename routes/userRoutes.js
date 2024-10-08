// routes/userRoutes.js
import express from 'express';
import { userCreate, getUsers, deleteUser, updateUser } from '../controllers/userController.js';
import { login } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Rota de login
router.post('/login', login);

// Rota de criação de usuário (registro)
router.post('/register', userCreate);

// Rota protegida: obter lista de usuários (somente para usuários autenticados)
router.get('/users', authMiddleware, getUsers);
router.delete('/users', authMiddleware, deleteUser);

router.put('/users', authMiddleware, updateUser);

export default router;
