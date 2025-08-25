import express from "express";
import {
  allTeachers,
  newTeacher,
  getTeacher,
  deleteTeacher,
  updateTeacher,
} from "../controllers/TeachersController.js";
const router = express.Router();

router.get("/teachers", allTeachers);
router.post("/teachers", newTeacher);
router.get("/teachers/:id", getTeacher);
router.delete("/teachers/:id", deleteTeacher);
router.put("/teachers/:id", updateTeacher);
export default router;
