import express from 'express';
import { usersController, usersControllerPost } from './controllers/usersController.js';

const router = express.Router();

router.get('/', usersController);
router.post('/', usersControllerPost);

export { router };