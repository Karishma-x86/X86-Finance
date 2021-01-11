const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
var https = require('https');

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

    var risk = req.query.riskLevel;
    var term = req.query.termValue;

    if(term === null)
    {
        term = null;
    }
    console.log(risk);

    const sqlSelect = "select * from FinanceOptions where risklevel=(?) and term=(?);"
   
    var optionId ;
    var optionName;
    db.query(sqlSelect,[risk,term],(error, result)=>{
       
        console.log("RESULT iS: " + JSON.stringify(result));

        optionId = result[0].optionid;
        optionName = result[0].optionname;

       console.log("id " + optionId);
       console.log("name " + optionName);

       if(optionName === "Bank F.D")
       {
           
       }

        
       res.send(result);
       
    });
});
//     //2nd GET
//     app.get("/api/getdata",(req, res)=>{
//     async.series( [
//         // Get the first table contents
//         function ( callback ) {
//             connection.query('SELECT * FROM restaurants WHERE name = ' . request.body.name, function(err, rows, fields) {
//                 console.log('Connection result error '+err);
//                 name_of_restaurants = rows;
//                 callback();
//             });
//         },
//         // Get the second table contents
//         function ( callback ) {
//             connection.query('SELECT * FROM RestaurantTimings', function(err, rows, fields) {
//                 console.log('Connection result error '+err);
//                 RestaurantTimings = rows;
//                 callback();
//             });
//         }

//    // Send the response
//     ], function ( error, results ) {
//         response.json({
//             'restaurants' : name_of_restaurants,
//             'RestaurantTimings' : RestaurantTimings
//         });
//});



app.listen(3001, ()=>{
    console.log("running on port 3001...");
});
