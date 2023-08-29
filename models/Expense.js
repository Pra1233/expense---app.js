
const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const Expense=sequelize.define('Expense',{

id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
},

date:{
    type: Sequelize.STRING,
},

amount:{
    type:Sequelize.INTEGER,
},

description:{
    type:Sequelize.STRING,
},

category:{
    type:Sequelize.STRING,
},


})
module.exports=Expense;



