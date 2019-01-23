const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path =  require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const url = "mongodb://faizan:faizan%40123@ds149820.mlab.com:49820/mongo-test";
mongoose.connect(url,{useNewUrlParser:true});
const db = mongoose.connection;
db.on('error',()=>{
    console.log('error');
})
db.once('open',()=>{
    console.log('connected');
})

const routes = require("./router/router"); 


app.use('/apis',routes);

app.listen(3000,()=>console.log("server started at 3000"));