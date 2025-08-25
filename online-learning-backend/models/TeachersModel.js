import { db } from "../config/db.js";

//This is a model to get all teachers details from the database;
export const getTeachers = async () => {
  const [teachers] = await db.query(`SELECT * FROM teachers`);
  return teachers;
};
//Function to add new teacher into the database
export const addTeacher = async (
  first_name,
  last_name,
  email,
  hashedPassword,
  course_area,
  admin_id
) => {
  const [teacher] = await db.query(
    `INSERT INTO teachers(first_name, last_name, email, password, course_area, created_by_admin) VALUES(?,?,?,?,?,?) `,
    [first_name, last_name, email, hashedPassword, course_area, admin_id]
  );
  return teacher;
};
//Function to get specific teacher using id
export const getTeacherById = async (teacherId) => {
  const [teacher] = await db.query(
    `SELECT * FROM teachers WHERE teacher_id = ?`,
    [teacherId]
  );
  return teacher;
};
//Edit Teacher details
export const updateTeacherById = async (
  teacherId,
  { first_name, last_name, email, course_area }
) => {
  const [result] = await db.query(
    `UPDATE teachers
    SET first_name = ?, last_name = ?, email = ?, course_area = ?
    WHERE teacher_id = ?
    
    `,
    [first_name, last_name, email, course_area, teacherId]
  );
  return result;
};
//Delete Teacher from the database
export const deleteTeacherById = async (teacherId) => {
  const [result] = await db.query(`DELETE FROM teachers WHERE teacher_id = ?`, [
    teacherId,
  ]);
  return result;
};
