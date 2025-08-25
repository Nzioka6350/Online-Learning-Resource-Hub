//This is a controller for teacher methods.
import bcrypt from "bcrypt";
import {
  addTeacher,
  deleteTeacherById,
  getTeacherById,
  getTeachers,
  updateTeacherById,
} from "../models/TeachersModel.js";

//Get all teachers from the database
export const allTeachers = async (req, res) => {
  try {
    const teachers = await getTeachers();
    if (!teachers || teachers.length === 0) {
      return res.status(404).json({
        message: "No teachers found",
      });
    }
    return res.status(200).json(teachers);
  } catch (e) {
    return res.status(500).json({
      message: "Cannot fetch teachers",
    });
  }
};

//Function to add new teacher into the database
export const newTeacher = async (req, res) => {
  const { first_name, last_name, email, password, course_area, admin_id } =
    req.body;
  try {
    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const teacher = await addTeacher(
      first_name,
      last_name,
      email,
      hashedPassword,
      course_area,
      admin_id
    );
    return res.status(201).json({
      message: "Teacher created successfully",
      teacher_Id: teacher.insertId,
    });
  } catch (e) {
    return res.status(500).json({
      message: "Failed to add teacher",
    });
  }
};
//Get specific teacher fromthe database

export const getTeacher = async (req, res) => {
  const teacherId = +req.params.id;
  try {
    const teacher = await getTeacherById(teacherId);

    if (!teacher || teacher.length === 0) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.status(200).json(teacher);
  } catch (e) {
    return res.status(500).json({
      message: "Failed to fetch teacher",
    });
  }
};

//Function to edit specific teacher details
export const updateTeacher = async (req, res) => {
  const teacherId = +req.params.id;
  const { first_name, last_name, email, course_area } = req.body;
  try {
    const result = await updateTeacherById(teacherId, {
      first_name,
      last_name,
      email,
      course_area,
    });
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    res.status(200).json({ message: "Teacher updated successfully" });
  } catch (e) {
    return res.status(500).json({ message: "Failed to update teacher" });
  }
};
//Function to delete specific teacher from the database
export const deleteTeacher = async (req, res) => {
  const teacherId = +req.params.id;
  try {
    const teacher = await deleteTeacherById(teacherId);
    if (teacher.affectedRows === 0) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    return res.status(200).json({
      message: "Teacher deleted successfully",
    });
  } catch (e) {
    return res.status(500).json({
      message: "Failed to delete teacher",
    });
  }
};
