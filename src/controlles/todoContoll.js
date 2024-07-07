import { Todo } from "../models/todoSchema.js";

export const getTodo=async(req,res)=>{
    const{page}=req.query;
    const pages=(page-1)*5;
    try{
       const todos=await Todo.find().skip(pages).limit(5);
       return res.status(200).send(todos);
    }catch(err){
        console.log(err);
    }
}

export const addTodo=async(req,res)=>{
    try{
      const newTodos=new Todo(req.body);
      await newTodos.save();
      return res.status(201).json({message:"Todo created successfully"});
    }catch(err){
        console.log(err);
    }
}

export const updateTodo=async(req,res)=>{
    const{id}=req.params;
    const{title,status,dueDate}=req.body;
    try{
    const todos=await Todo.findByIdAndUpdate(_id,{title,status,dueDate},{new:true});
    return res.status(201).json({message:"Todo updated successfully"});
    }catch(err){
        console.log(err);
    }
}

export const deleteTodo=async(req,res)=>{
    const{id}=req.params;
    try{
      await Todo.findByIdAndDelete(id);
      return res.status(201).json({message:"Todo deleted successfully"});
    }catch(err){
        console.log(err);
    }
}