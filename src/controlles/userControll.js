import { User } from "../models/userSchema.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

export const getUsers=async(req,res)=>{
  try{
     const data=await User.find();
     res.send(data);
  }catch(err){
    console.log(err);
  }
}

export const userRegister=async(req,res)=>{
    const {userName,email,password,role}=req.body;
    existUser=await User.findOne({email});
    if(existUser){
         return res.status(400).json({message:"user exist try to login"});
    }
    const existName=await User.findOne({userName});
    if(existName){
       return res.status(500).json({message:"user name taken try to give different name"});
    }
  try{
     bcrypt.hash(password,10,async(err,result)=>{
        try{
            if(err)console.log(err);
            else{
            const newUser=new User({userName,email,password:result,role});
            await newUser.save();
            return res.status(201).send(newUser);
            }
        }catch(err){
            console.log(err);
        }
     })
      
      newUser.save();
  }catch(err){
    console.log(err);
  }
}

export const userLogin=async(req,res)=>{
  const {email,password}=req.body;
  try{
    const existUser=await User.findOne({email});
    if(!existUser){
        return res.status(400).json({message:"user does not exits please register"});
    }
    bcrypt.compare(password,existUser.password,async(err,result)=>{
        try{
            if(err)console.log(err);
            else if(result){
               jwt.sign({id:existUser._id,email:existUser.email,role:existUser.role},'rakesh',(err,result)=>{
                  if(err)console.log(err);
                  else{
                    return res.status(200).json({token:result});
                  }
               })
            }
            else{
                return res.status(300).json({message:"wrong crendential"});
            }
        }catch(err){
            console.log(err);
        }
    })
      }catch(err){
    console.log(err);
  }
}

