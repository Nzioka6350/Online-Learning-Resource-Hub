import express, { json, urlencoded } from 'express'
const app = express()
const port = 8080
import authRouter from './routes/authRouters.js'
app.use(urlencoded({ extended: true }));
app.use(json())
app.use('/api/auth/',authRouter)
app.get('/',(req,res)=>{
    res.json({message:"Hello there"})
})

app.listen(port,()=>{
     console.log(`App running on port, ${port}`)
})