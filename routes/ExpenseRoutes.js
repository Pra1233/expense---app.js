const express=require('express');

const userauthentication=require('../middleware/auth');
const expenseController=require('../controllers/Expensecontroller');
const router=express.Router();

router.post('/user/postexpense', userauthentication.auth ,expenseController.postExpense);

router.get('/expense/getexpense', userauthentication.auth ,expenseController.getExpenses);

router.delete('/expense/deleteexpense/:id',userauthentication.auth, expenseController.deleteExpense);


router.get('/user/download',userauthentication.auth,expenseController.downloadbtn);

module.exports=router;