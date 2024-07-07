import { Router } from "express";
import { addTodo, deleteTodo, getTodo, updateTodo } from "../controlles/todoContoll.js";

export const todoRoute=Router();

todoRoute.get("/gettodo",getTodo)

todoRoute.post("/addtodo",addTodo);

todoRoute.patch("updatetodo",updateTodo);

todoRoute.delete("/deletetodo",deleteTodo);