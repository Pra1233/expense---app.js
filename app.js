const path = require('path');
const fs=require('fs');
const cors=require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const userController=require('./controllers/Usercontroller');
const helmet=require('helmet');
const morgan=require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const accessLogStream=fs.createWriteStream(path.join(__dirname,'access.log'),
{flags:'a'} 
);

const User=require('./models/Signup');
const Expense=require('./models/Expense');
const Order=require('./models/orders');
const Forgotpassword = require('./models/forgotpassword');
const Download=require('./models/download');


const sequelize=require('./util/database');
const userRoutes=require('./routes/UserRoutes');
const expenseRoutes=require('./routes/ExpenseRoutes');
const purchaseRoutes=require('./routes/purchaseRoutes');
const premiumRoutes=require('./routes/premiumRoutes');
const forgotRoutes=require('./routes/forgotRoutes');

const app = express();
app.use(helmet());
app.use(morgan('combined',{stream:accessLogStream}));
app.use (cors ());

app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());  //this is for handling jsons


app.use(userRoutes);//all routes
app.use(expenseRoutes);
app.use('/purchase',purchaseRoutes);
app.use(premiumRoutes);
app.use('/password',forgotRoutes);

User.hasMany(Expense); //user primary key store in expense as foreign key
Expense.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Forgotpassword);
Forgotpassword.belongsTo(User);

User.hasMany(Download);
Download.belongsTo(User);


// {force:true}
sequelize.sync().then(()=>{
    app.listen(process.env.PORT ||3000);
})
.catch(e=>console.log(e));


