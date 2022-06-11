const express= require('express');
const { default: mongoose } = require('mongoose');
const monggose= require('mongoose');
require('dotenv').config();

const app= express();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true}).then(()=> {console.log("connected to mongodb")});

app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`)
}).catch(error=> {
    console.log('something is wrong', error);
})

