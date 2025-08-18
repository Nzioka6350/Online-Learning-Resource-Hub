import { createUser, loginUser} from "../models/UserModel.js"
import bcrpt from 'bcrypt'
//Function to sign up new student
export const signup = async (req,res) =>{
    const {first_name, last_name, email, password, year} = req.body
    const hashedPassword = await bcrpt.hash(password,10)
    try{
        const user = await createUser(first_name, last_name, email, hashedPassword, year);
        return res.status(201).json(user)

    }catch(e){
        console.error("Signup Error:", e); // Log error in backend
    return res.status(500).json({ 
      message: "Signup failed", 
      error: e.message 
    })
}}

//Function to login any user into the system
export const login = async (req,res) =>{
    const {email,password} = req.body
    try{
        const user = await loginUser(email,password);
        return res.status(200).json(user)

    }catch(e){
        console.error("Sign in error:",e);
        return res.status(500).json({
            message:"Sign in failed",
            error:e.message
        })
    }
}