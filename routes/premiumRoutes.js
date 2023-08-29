const express=require('express');

const premiumController=require('../controllers/premiumcontroller');
const router=express.Router();


router.get('/premium/showleaderboard',premiumController.leaderboard);

module.exports=router;