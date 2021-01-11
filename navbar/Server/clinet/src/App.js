import React, { useState, useEffect} from 'react'
import Navbar from "./Components/Navbar/Navbar";
import InputForm from "./Components/InputForm/InputForm";
import AboutUs from './Components/AboutUs/AboutUs';
import InvestmentOptions from './Components/InvestmentOptions/InvestmentOptions';
import InvestmentSuggestions from './Components/InvestmentSuggestions/InvestmentSuggestions';
import './App.css';
import { Component } from "react";
import Axios from 'axios'


function App() {

  const [amount, setAmount] = useState('')
  const [risk, setRisk] = useState('')
  const [term, setTerm] = useState('')
  const [divsugg, setSugDiv] = useState('')
  
  const submitData = ()=>{

    var risklvl = document.getElementById("risklevel").value;
    //Axios.get('http://localhost:3001/api/getdata/${ risk,term}')
    Axios.get('http://localhost:3001/api/getdata',{ params :{riskLevel : risklvl, termValue: term, amountgiven : amount}})
    .then(res=>console.log(res));
    setSugDiv("true");
  };
  
  var divStyleSuggestion = {
    display:divsugg?'block':'none'
  };

  var divStyleAllSuggestion = {
    display:divsugg?'block':'none'
  };

  return (
    <div className="App">
      <Navbar />
      <div className="imagecss">
     
     <h1 className = "header">Let's Get Started</h1>

</div>

	  <div class="container">
        <form className = "form">
        <h3 className="headers">
                    Investment Amount
                </h3> 
                 <input type = "number" name = "amount" min="1.0" required = "true" 
                 placeholder="Enter amount you wish to invest" onChange={(e)=>{
                  setAmount(e.target.value)}}/>
          <br/><br/>
          <h3 className="headers">Risk</h3>   
          <select name = "risks" id="risklevel">
              <option value = "Low" selected>Low</option>
              <option value = "Medium">Medium</option>
              <option value = "High">High</option>
          </select>
          <br/><br/>
          <h3 className="headers">Investment Term </h3>
           <input type="number" id="term" name="term" min="1" placeholder="Enter terms(month) for investment" 
           onChange={(e)=>{setTerm(e.target.value)}}>

           </input>
          <br/><br/>
          
		  <button className="showbutton"  onClick={submitData}> Submit options</button>
        </form>
    </div>
    <br></br>
    <div style={divStyleSuggestion}>
      <InvestmentSuggestions />
    </div>
      <br/>  <br/> <br/><br/>
	    <div style={divStyleAllSuggestion}>
        <InvestmentOptions/>
      </div>
      <br></br>
      <AboutUs />
    </div>
    
  );
}

export default App;
