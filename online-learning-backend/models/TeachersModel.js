import { db } from "../config/db.js"

//This is a model to get all teachers details from the database;
export const getTeachers = async () =>{
    const [teachers] = await db.query(`SELECT * FROM teachers`)
    return teachers
}