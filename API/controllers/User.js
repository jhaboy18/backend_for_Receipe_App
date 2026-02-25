import { User } from "../Models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const register=async(req, res) => {
    const { name, gmail, password } = req.body;
    console.log(req.body);

    try{

        let user=await User.findOne({gmail})
        if(user) return res.json({message:"User already exist"})
            const hashedpassword=await bcrypt.hash(password,10)
            user=await User.create({
        name,gmail,password:hashedpassword
        })
        res.json({message:"User Register Successfully",user})

    }catch(err){
        res.json({message:err})

    }
}

export const login=async(req,res)=>{
    const{gmail,password}=req.body;
    if(!gmail || !password) return res.json({message:"Enter Gmail and passsword"})

        try{
            let user=await User.findOne({gmail})
            if(!user) return res.json({message:"User Not exist"})
                const validatepassword=await bcrypt.compare(password,user.password)
            if(!validatepassword) return res.json({message:"Invalid Credientials"})
                const token=jwt.sign({userId:user._id},"!kvnjvjvin()",{
            expiresIn:'1d'})

                res.json({message:`Welcome ${user.name}`,user,token})
        }
        catch(err){
            res.json({message:err})

        }

}


export const profile=async(req,res)=>{
    res.json({user:req.User})
}