import mysql2 from "mysql2/promise";
import dotenv from 'dotenv'

dotenv.config({ path: "./config/.env" });

//Create a pool request for connection.
export const db = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
})
// Test the connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL Database!");
    connection.release(); // release the connection back to the pool
    
  }
});