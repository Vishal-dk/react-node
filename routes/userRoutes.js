import express from "express"

const userRoute = express.Router();

// GET

// POST
    userRoute.post("/register",(req,res) =>{
        const {name} =req.body;
        res.status(200).json({data:`welcome ${name}`})
    })
// PUT 

// DELETE

export default userRoute