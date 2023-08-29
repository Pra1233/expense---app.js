const express=require('express');
const router=express.Router();
const userController=require('../controllers/Usercontroller');
const authenticate=require('../middleware/auth')

router.post('/user/adduser',userController.postSignup);

router.post('/user/login',userController.postLogin);

module.exports=router;

