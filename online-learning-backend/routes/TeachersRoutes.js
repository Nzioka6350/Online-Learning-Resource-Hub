import express from 'express'
import { allTeachers } from '../controllers/TeachersController.js'
const router =express.Router()

router.get('/',allTeachers)




export default router;