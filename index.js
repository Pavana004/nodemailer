const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8000 || process.env.PORT;
const userinfo = require("./router");








//database connection

mongoose.connect('mongodb+srv://Pavan:fXL4E1GnhABEwjVb@cluster0.khhogzb.mongodb.net/nodemailer',{useNewUrlParser:true,useUnifiedTopology:true},()=>{
   console.log("database connected");
})


//middleware
app.use(express.json());
app.use("/",userinfo);



//server connection

app.listen(port,console.log("sever started"));