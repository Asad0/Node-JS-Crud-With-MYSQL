const mysql=require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database:"employess",
    connectionLimit:10,
    multipleStatements:true
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("MySql Connected");
  });
  module.exports=con