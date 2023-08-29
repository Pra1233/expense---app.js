require('dotenv').config();

const Sequelize=require('sequelize');
const sequelize =new Sequelize(process.env.DATABASENAME,process.env.DB_USERNAME,process.env.PASSWORD,{
  dialect:'mysql',
  host:process.env.DB_HOST,
});
module.exports=sequelize;
