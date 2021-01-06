const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { json } = require('body-parser');

const app =   express();

app.use(bodyParser.urlencoded({extended:false}));
//app.use(bodyParser.json()) ;
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

const db = mysql.createPool({

    host:'mysqlx86.cb514jgp5hqb.ap-south-1.rds.amazonaws.com',
    user:'admin',
    port:'3306',
    password:'Karishma123',
    database:'x86finance'
});


// app.post("/api/insert",(req, res)=>{
    
//     console.log(req.body.riskLevel);
//     // const sqlStatement = "INSERT INTO Options (id, Name) VALUES ('1234', 'shubham');"
//     // db.query(sqlStatement,(error, result)=>{
//     //     res.send(result);
//     //     //console.log(error);
//     // });

// });


//Need parameters to call getdata..
app.get("/api/getdata",(req, res)=>{

    const risk = req.query.riskLevel;
    const term = req.query.termValue;


    const sqlSelect = "select * from FinanceOptions where risklevel=(?) and term=(?);"
   
   
    db.query(sqlSelect,[risk,term],(error, result)=>{
       
        //console.log(result);
       var optionId = result[0].optionid;
       var optionName = result[1].optionname;
       
    });

    
    res.send(output);
});


app.listen(3001, ()=>{
    console.log("running on port 3001...");
});
