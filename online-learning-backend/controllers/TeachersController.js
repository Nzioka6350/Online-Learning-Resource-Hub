//This is a controller for teacher methods.

import { getTeachers } from "../models/TeachersModel.js";

//Get all teachers from the database
export const allTeachers = async (req, res) => {
  try {
    const teachers = await getTeachers();
    console.log(teachers)
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
