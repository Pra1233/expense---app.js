
const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const Download=sequelize.define('Download',{

id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
},

date:{
    type:Sequelize.DATE,
},

fileURL:{
    type:Sequelize.STRING,
}
})
module.exports=Download;



