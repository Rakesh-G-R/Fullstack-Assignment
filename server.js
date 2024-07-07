import express from 'express'
import { config } from 'dotenv'
import { connecttodb } from './src/config/db.js';
import { userRoute } from './src/routes/userRoute.js';
import { todoRoute } from './src/routes/todoRoute.js';
import { auth } from './src/controlles/auth.js';
import cors from 'cors'

config();

const app=express();

app.use(express.json());

app.use(cors())

app.use("",userRoute);

app.use("",auth,todoRoute);

const port=process.env.PORT||9090;

const uri=process.env.URI||null;

app.listen(port,async()=>{
    try{
       await connecttodb(uri);
       console.log('database connected successfully');
       console.log(`server running at the port number ${port}`);
    }catch(err){
        console.log(err);
    }
})
