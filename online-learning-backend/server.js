import express from 'express'
const app = express()
const port = 8080





app.get('/',(req,res)=>{
    res.json({message:"Hello there"})
})

app.listen(port,()=>{
     console.log(`App running on port, ${port}`)
})