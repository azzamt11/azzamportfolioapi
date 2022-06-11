const express= require('express');
const { default: mongoose } = require('mongoose');
const monggose= require('mongoose');
require('dotenv').config();

const commentRoute= require('./routes/comments');

const app= express();

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/comments', commentRoute);

//mongodb connection
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true}).then(()=> {console.log("connected to mongodb")});

//port running
app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`)
});

