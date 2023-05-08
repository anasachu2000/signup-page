const mongoose = require('mongoose');
//connecting  database 
mongoose.connect('mongodb://127.0.0.1:27017/user_mangement');
// -------------------------


const express = require('express');
const app  = express();

//for user routes
const userRoutes = require('./routes/userRoutes')
app.use('/',userRoutes);

app.listen(5008,()=>{
    console.log('server is running');
})

