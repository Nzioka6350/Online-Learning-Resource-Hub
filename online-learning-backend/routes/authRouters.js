import express from 'express'
import { login, signup } from '../controllers/authController.js';
const router = express.Router();

//Routes for authentication
router.post('/signin',signup)
router.post('/login',login)

export default router