const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app =   express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({

    host:'mysqlx86.cb514jgp5hqb.ap-south-1.rds.amazonaws.com',
    user:'admin',
    port:'3306',
    password:'Karishma123',
    database:'x86finance'
});


app.post("/api/insert",(req, res)=>{
    
    const sqlStatement = "INSERT INTO Options (id, Name) VALUES ('1234', 'shubham');"
    db.query(sqlStatement,(error, result)=>{
        res.send(result);
        //console.log(error);
    });

});

app.get("/api/getdata",(req, res)=>{
    const sqlSelect = "SELECT * FROM FinanceOptions;"
    db.query(sqlSelect,(error, result)=>{
        res.send(result);
        //console.log(error);
    });
});


app.listen(3001, ()=>{
    console.log("running on port 3001...");
});
