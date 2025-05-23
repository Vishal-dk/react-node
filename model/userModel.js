import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name:{type:String},
        email:{type:String,unique:true},
        phonenumber:{type:Number},
        password:{type:String}

    },
    {
        timestamp:true
    }
)

const user = mongoose.model("users",userSchema)
export default user