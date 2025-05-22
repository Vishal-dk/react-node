import express from "express"
import dotenv from "dotenv"
import userRoute from './routes/userRoutes.js';

dotenv.config()


import cors from "cors"
import connectDB from "./database/connectDB.js"
const app = express()
app.use(express.json())

app.use(cors())
app.use("/api/user",userRoute)

app.get("/" , (req,res) =>{
res.status(200).json({Message:"Api change success"})
})

app.get("/api/heartbeat",(req,res) =>{
    res.status(200).json({data:"Heart beat was successfull"})
    
})

app.listen(process.env.PORT, ()=> {
    console.log(`Server running successfully at port ${process.env.PORT}`)
})
connectDB()