import user from "../model/userModel.js";
//import user from "../model/userModel";





export const register = async (req,res) =>{
    const {name,email,phonenumber,password} =req.body;
    try{
          const dkuser = await user.create(
          {
                name,email,phonenumber,password
          })
          res.status(200).json(dkuser)
          
    }catch(error){
        console.log(error)
        res.status(500).json({message:error})
    }
}