import { Schema, model } from "mongoose";

const user=new Schema({
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        enum:['Admin', 'user'],
        default:'user'
    }
})

export const  User=model('users',user);