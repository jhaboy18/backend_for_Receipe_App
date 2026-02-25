import { User } from "../Models/User.js";
import jwt from 'jsonwebtoken'


export const Authenticate=async(req,res,next)=>{
    const token=req.header('Auth');
  try{
    if(!token) return res.json({message:"Login First"})
        const decode=jwt.verify(token,'!kvnjvjvin()')
   const id=decode.userId

   let user=await User.findById(id);
   if(!user) return res.json({message:"user Not exist"})
    req.user=user



    next();

  }catch(err){
    res.json({message:err})

  }
}