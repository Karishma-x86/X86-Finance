import React, { useState, useEffect} from 'react'
import Navbar from "./Components/Navbar/Navbar";
import InputForm from "./Components/InputForm/InputForm";
import AboutUs from './Components/AboutUs/AboutUs';
import InvestmentOptions from './Components/InvestmentOptions/InvestmentOptions';
import InvestmentSuggestions from './Components/InvestmentSuggestions/InvestmentSuggestions';
import './App.css';
import { Component } from "react";
import Axios from 'axios'
import { MenuItems } from "./Components/Navbar/MenuItems";
import './Components/Navbar/Navbar.css';
import { Button } from './Components/Button';

function App() {

  const [amount, setAmount] = useState('')
  const [risk, setRisk] = useState('')
  const [term, setTerm] = useState('')
  const [divsugg, setSugDiv] = useState('')
  var result;
   var clicked = false;

  var allOptionsDiv = React.createRef()
  

    const handleClick = ()=> {
        //this.setState({clicked: !this.state.clicked})
    }

    const showAllOptionsButtonClick = ()=>{
      
      if(allOptionsDiv){
        allOptionsDiv.current.scrollIntoView(true)
        
      } 
    }

  
  

  const submitData = ()=>{

    
    var risklvl = document.getElementById("risklevel").value;
    
    Axios.get('http://localhost:3001/api/getdata',{ params :{riskLevel : risklvl, termValue: term, amountgiven : amount}})
    .then(res=>{
        result = res.data;
      
      });
      if(result === "AMOUNT")
      {
          console.log(result);
          setSugDiv("true");
      }
    
  };
  
  var divStyleSuggestion = {
    display:divsugg?'block':'none'
  };

  var divStyleAllSuggestion = {
    display:divsugg?'block':'none'
  };

  return (
    <div className="App">
        <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <img src="logo_transparent.png" width="120" height="100" />
                </h1>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}>
                    </i>
                </div>
                <ul className='nav-menu'>
                    {/* {MenuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url} onClick={navBarButtonClick(item.title)}>
                                    {item.title} 
                                </a>
                                
                            </li>
                        )
                    })} */
                    <li >
                      <button className="nav-links" >Home</button>
                      <button className="nav-links" onClick={showAllOptionsButtonClick}>All Options </button>
                      <button className="nav-links">About us</button>
                    </li>
                   
                    }
                    
                </ul>
               
            </nav>
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
          
		  <button className="showbutton"  onClick={showAllOptionsButtonClick}> Submit options</button>
        </form>
    </div>
      <br></br>
      <div style={divStyleSuggestion}>
        <InvestmentSuggestions />
      </div>
        <br/>  <br/> <br/><br/>
        <div >
          <div ref={allOptionsDiv}>
              <h1 className = "headerForInvestment"> 
                All Investment Options
              </h1>     
              <br/>

                <table>
                  <tr>
                    <th>Option Name</th>
                    <th>Risk</th>
                    <th>Minimum Term To Invest(Months)</th>
                  </tr>
                  <tr>
                    <td>Gold</td>
                    <td>High</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>Stocks</td>
                    <td>Medium</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                  <td>Bank F.D</td>
                    <td>Low</td>
                    <td>1</td>
                  </tr>
              </table>

          </div>
        </div>
        <br></br>
        <AboutUs />
    </div>
    
  );
}

export default App;
