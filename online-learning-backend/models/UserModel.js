import { db } from "../config/db.js";

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
export default getStudents = async()=>{
  
}
