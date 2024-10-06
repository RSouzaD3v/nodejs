import express from "express";
import { createContent } from "../controllers/contentController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.post('/create-content', authMiddleware, createContent);

export default router;