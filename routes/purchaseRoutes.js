const express=require('express');

const userauthentication=require('../middleware/auth');
const purchaseController=require('../controllers/purchase');
const router=express.Router();

router.get('/premiummembership',userauthentication.auth  ,purchaseController.purchasepremium)
router.post('/updatetransactionstatus', userauthentication.auth ,purchaseController.updateTransactionStatus);


module.exports=router;