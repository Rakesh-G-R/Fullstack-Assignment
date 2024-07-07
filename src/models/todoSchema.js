import { Schema, model } from "mongoose";

const todo=new Schema({
    title:{
        type:String,
        require:true
    },
    status:{
        type:String,
        enum:["to-do", "in-progress", "done"],
        default:"to-do"
    },
    dueDate:{
        type:Date,
        require:true
    }
})

export const Todo=model('todos', todo);