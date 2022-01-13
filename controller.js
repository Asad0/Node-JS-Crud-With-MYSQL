const express=require("express");
const { append } = require("express/lib/response");
const route=express();
const db=require("./db");
route.set('view engine', 'ejs');
route.get("/",(req,res)=>{
    
    db.query('select * from staff',(err,data,fields)=>{
        if(!err){
            res.render('home',{recorde:data});
            // res.status(200).json(data)
        }
        else{
                // res.send(err)
                res.render('add_employee')
            }
    });
    
});
route.get("/add",(req,res)=>{
    res.render('add_employee')
});
route.post("/addemployee",(req,res)=>{
    var emp={
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        Address:req.body.Address,
        Phone:req.body.Phone,
        Gender:req.body.Gender,
    };
    console.log(emp)
    var sql=`INSERT INTO staff SET ?`;
    db.query(sql,emp,(err,result)=>{
            if(!err){
                res.redirect("/");
            }
            else{
                throw err
            }
    });
});
route.get("/update/:id",(req,res)=>{
    db.query('select * from staff WHERE staff_ID='+req.params.id,(err,data,fields)=>{
        if(!err){
            res.render('update_employee',{recorde:data});
            
        }
        else{
               
            }
    });
});
route.post("/updateRecorde/:id",(req,res)=>{
var emp={
    FirstName:req.body.FirstName,
    LastName:req.body.LastName,
    Address:req.body.Address,
    Phone:req.body.Phone,
    Gender:req.body.Gender,
};
var sql="UPDATE  staff SET ? WHERE staff_ID =?";
db.query(sql,[emp,req.params.id],(err,result)=>{
    if(!err){
        res.redirect("/");
    }
    else{
        throw err
    }
});
});
route.get("/delete/:id",(req,res)=>{
    var sql="DELETE  FROM staff  WHERE staff_ID =?";
    db.query(sql,[req.params.id],(err,result)=>{
        if(!err){
            res.redirect("/");
        }
        else{
            throw err
        }
    });
})

module.exports=route;