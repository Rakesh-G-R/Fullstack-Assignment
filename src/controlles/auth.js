import jwt from 'jsonwebtoken';
export const auth=(req,res,next)=>{
        console.log(req.headers.authorization)
     try{
        if(typeof req.headers.authorization==='undefined'){
            res.status(500).json({message:"token required"});
        }
        const token=req.headers.authorization.split(" ")[1];
        const verify=jwt.verify(token,'rakesh')
        req.user=verify;
        next();
     }catch(err){
        console.log(err);
     }
    
}