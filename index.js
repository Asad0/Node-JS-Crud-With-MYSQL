const express= require("express");
const app=express();
const db=require("./db");
const ctrl=require("./controller");
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded());
app.use("/",ctrl)
app.listen(8080,()=>{
    console.log("Server Run at 8080")
})