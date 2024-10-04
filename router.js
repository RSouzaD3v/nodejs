import express from 'express';
import { getUsers, userCreate } from './controllers/userController.js';

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', userCreate);

export { router };