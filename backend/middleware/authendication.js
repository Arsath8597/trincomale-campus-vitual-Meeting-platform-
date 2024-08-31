import jwt from "jsonwebtoken"
import User from "../model/userModel.js"

//protect the route 
export const isAuthendicater=async(req,res,next)=>{
    try {
        const {token}=req.cookies
        if(!token){
            return res.status(402).json({
                message:"Login First"
            })
        }
        const decoded =jwt.verify(token,"fjdjmdklfd")
        req.user=await User.findById(decoded.id)
        next()
    } catch (error) {
        res.status(400).json({
            message:"login first after",
            message:error.message
        })
    }

}