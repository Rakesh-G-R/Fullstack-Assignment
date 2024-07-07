import { Router } from "express";
import { getUsers, userLogin, userRegister } from "../controlles/userControll.js";

export const userRoute=Router();

userRoute.get("/getusers",getUsers);

userRoute.post("/register",userRegister);

userRoute.post("/login",userLogin);