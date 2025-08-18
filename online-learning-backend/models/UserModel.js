import { db } from "../config/db.js";
import bcrypt from 'bcrypt'
//Function to add a new student into the database
export const createUser = async (first_name, last_name, email, password, year) => {
  const [user] = await db.query(`INSERT INTO students(first_name, last_name, email, password, year) values(?,?,?,?,?)`, [
    first_name,
    last_name,
    email,
    password,
    year,
  ]);
  return {
    email,
  };
};
//Function to get all students
export const getStudents = async()=>{
  const [students] = await db.query(`SELECT * FROM students`)
  return students;
}

//Function for login into the system
export const loginUser = async(email,password) =>{
    // 1. Get student by email
  const [rows] = await db.query(`SELECT * FROM students where email = ?`,[email])
  if(rows.length === 0){
    throw new Error("User not found");
  }
  const user = rows[0]
  // 2. Compare password with hashed password in DB
  const isMatch = await bcrypt.compare(password,user.password)
  if(!isMatch){
     throw new Error("Invalid credentials");
  }

  // 3. Return user
    return {
    id: user.student_id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    year: user.year,
  };
}