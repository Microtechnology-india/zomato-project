const mysql = require("mysql");

const con = mysql.createConnection({
    host: "e-commerce.czlhhsqijzkh.ap-south-1.rds.amazonaws.com",
    user: "admin",
    password: "12345678",
    database: "Zomato1"
})

con.connect((err) =>{
    if(err){
        console.log(err.sqlMessage);
    }else{
        console.log("Database is connected");
    }
})

module.exports = con;