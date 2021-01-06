import React, { useState, useEffect} from 'react'
import Navbar from "./Components/Navbar/Navbar";
import InputForm from "./Components/InputForm/InputForm";
import './App.css';
import { Component } from "react";
import Axios from 'axios'


function App() {

  const [amount, setAmount] = useState('')
  const [risk, setRisk] = useState('')
  const [term, setTerm] = useState('')

  const submitData = ()=>{
    //Axios.get('http://localhost:3001/api/getdata/${ risk,term}')
    Axios.get('http://localhost:3001/api/getdata',{ params :{riskLevel : risk, termValue: term}})
    .then(res=>console.log(res));
    
  };
  

  return (
    <div className="App">
      <Navbar />
      <div className="imagecss" >
        <br></br>
         <input className="inputbox" type = "number" name = "amount" min="1.0" required = "true" 
                    placeholder="Enter amount" onChange={(e)=>{
                      setTerm(e.target.value)
                    }}/>
           <br></br>
          <input className="inputbox" type = "text" name = "amount" min="1.0" required = "true" 
                    placeholder="Enter risk" onChange={(e)=>{
                      setRisk(e.target.value)
                    }}/>
                    
          <button className="showbutton" onClick={submitData}> Submit options</button>
          <br></br>
          <h1></h1>
      </div>
      <div>

      </div>
    </div>
    
  );
}

export default App;
