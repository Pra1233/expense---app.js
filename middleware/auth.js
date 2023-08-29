const jwt=require('jsonwebtoken');
const User=require('../models/Signup');

const auth=(req,res,next)=>{
    try{
   const token =req.header('Authorization');
   console.log(token);
   const user=jwt.verify(token, 'secretkey');//decrypt token
   console.log(user.userId);
   User.findByPk(user.userId).then(user=>{
       req.user=user; //imp
       next();
   })

    } catch(e){
      console.log(e);
      return res.status(401).json({success:false});
    }
}
module.exports={auth,};