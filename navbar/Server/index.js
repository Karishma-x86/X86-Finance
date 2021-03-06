const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
var https = require('https');
const request = require('request');
const { Console } = require('console');

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

var dbData;
var amount;
var goldRate;
var finalOption;

function setFinalOption(value){
    finalOption = value;
}


function setValue(value) {
    dbData = value;
    //console.log(dbData);
  }
// app.post("/api/insert",(req, res)=>{
    
//     console.log(req.body.riskLevel);
//     // const sqlStatement = "INSERT INTO Options (id, Name) VALUES ('1234', 'shubham');"
//     // db.query(sqlStatement,(error, result)=>{
//     //     res.send(result);
//     //     //console.log(error);
//     // });

// });


//Need parameters to call getdata..
app.get("/api/getdata",async(req, res)=>{

    var risk = req.query.riskLevel;
    var term = req.query.termValue;
    amount = req.query.amountgiven;

    var resultSuggestion = '';
    //console.log(amount);
    if(!amount)
    {
        console.log("Amount is null...");
        return(res.send("AMOUNT"));
        //return(res.send(JSON.stringify({"reason" : "AMOUNT"})));
        
    }

    console.log("After null check...");
    var sqlSelect;

    if(!term)
    {
        sqlSelect = "select * from FinanceOptions where risklevel=(?);"
    }
    else
    {
         sqlSelect = "select * from FinanceOptions where risklevel=(?) ;"
    }

        db.query(sqlSelect,[risk,term],async(error, result)=>{
        
        // console.log("RESULT iS: " + JSON.stringify(result));

            //optionId = result[0].optionid;
            //optionName = result[0].optionname;

            setValue(result);

            //Iterate through the all rows
            Object.keys(dbData).forEach(function(key) {
                var row = result[key];

                //console.log(row);
                if(row.optionname === "Gold")
                {
                    

                    const url = "https://metals-api.com/api/latest?access_key=roye7q95ncw77ftbi43qbk39n781mdl8wpz5c352mv99fv3j5uenq7v5qg1o&base=INR&symbols=XAU"; 
                    
                     request(url, async function (error, response, body) {
                       
                        //console.log('body:', body); 
                        var jObject = JSON.parse(body);
                        var gRate = jObject.rates.XAU;
                        console.log(gRate);
                        
                        //10 grams is considered...
                        goldRate = (parseFloat(gRate)/31.103)*10;
                        var res = parseFloat(amount)/parseFloat(goldRate);
                        console.log("res is " + res);
                        if(res >= 1.0)
                        {
                            console.log("If condition");
                            setFinalOption(" GOLD");
                        }
                        else
                        {
                            console.log("ELSE condition");
                            setFinalOption(" Bank F.D ");

                        }
                        console.log(goldRate);
                    });

                }
                else if(row.optionname === "Bank F.D")
                {
                    var RATEOFINTEREST = 4;
                    var time = 1;
                    if(term)
                    {
                        time  = term/12; 
                        //console.log("TIME is " + time); 
                    }
                    var simpleInterest = (amount * RATEOFINTEREST * time)/100;
                    
                    var finalAmount = parseInt(simpleInterest) + parseInt(amount);
                    //console.log("SI  " + simpleInterest);
                    console.log("Final amount after term  " + finalAmount );

                   setFinalOption("Bank F.D");
                }
                
            });
        });

    res.send(finalOption);
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
