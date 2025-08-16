import express from 'express'
import { signup } from '../controllers/authController.js';
const router = express.Router();

//Routes for authentication
router.post('/signin',signup)


export default router