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

  const [resutToShow, setResult] = useState('')

  var result;
   var clicked = false;

   var suggestion = "BANK F.D";
  var allOptionsDiv = React.createRef()
  var aboutusDiv = React.createRef();
  var homeDiv = React.createRef();

    const handleClick = ()=> {
        //this.setState({clicked: !this.state.clicked})
    }

    const showAllOptionsButtonClick = ()=>{
      
      if(allOptionsDiv){
        allOptionsDiv.current.scrollIntoView(true)
        
      } 
    }

    const showHomeButtonClick = ()=>{
      
      if(homeDiv){
        homeDiv.current.scrollIntoView(true)
        
      } 
    }

    const showAboutUsButtonClick = ()=>{
      
      if(aboutusDiv){
        aboutusDiv.current.scrollIntoView(true)
        
      } 
    }
  
  

  const submitData = ()=>{

    
    var risklvl = document.getElementById("risklevel").value;
    
    Axios.get('http://localhost:3001/api/getdata',{ params :{riskLevel : risklvl, termValue: term, amountgiven : amount}})
    .then(res=>{
        //result = JSON.parse(res.data);
        
        result = res.data;
        suggestion = result;
        setResult(result);
        setSugDiv("true");
        console.log(result);
      });
      
      //console.log(result);
      // if(result.reason === "AMOUNT")
      // {
      //     console.log(result);
      //     setSugDiv("true");
      // }
    
  };
  
  var divStyleSuggestion = {
    display:divsugg?'block':'none'
  };

  var divStyleAllSuggestion = {
    display:divsugg?'block':'none'
  };

  return (
    <div className="App" ref={homeDiv}>
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
                      <button className="nav-links" onClick={showHomeButtonClick}>Home</button>
                      <button className="nav-links" onClick={showAllOptionsButtonClick}>All Options </button>
                      <button className="nav-links" onClick={showAboutUsButtonClick}>About us</button>
                    </li>
                   
                    }
                    
                </ul>
               
            </nav>
      <div className="imagecss">
     
     <h1 className = "header">Let's Get Started</h1>

    </div>

	  <div class="container">
        
        <h3 className="headersform">
                    Investment Amount
                </h3> 
                 <input type = "number" name = "amount" min="1.0" required = "true" 
                 placeholder="Enter amount you wish to invest" onChange={(e)=>{
                  setAmount(e.target.value)}}/>
          <br/><br/>
          <h3 className="headersform">Risk</h3>   
          <select name = "risks" id="risklevel">
              <option value = "Low" selected>Low</option>
              <option value = "Medium">Medium</option>
              <option value = "High">High</option>
          </select>
          <br/><br/>
          <h3 className="headersform">Investment Term </h3>
           <input type="number" id="term" name="term" min="1" placeholder="Enter terms(month) for investment" 
           onChange={(e)=>{setTerm(e.target.value)}}>

           </input>
          <br/><br/>
          
		  <button className="showbutton"  onClick={submitData}> Submit options</button>
        
    </div>
      <br></br>
      <div style={divStyleSuggestion}>
        <div className="containercss">
            <h1 >Suggested RoadMap </h1>
           <h3 >We suggest you to invest in {resutToShow} based on your inputs </h3>
           <p className="result-para">
               After calculating the profit results using the given inputs for all the available Options,
                {resutToShow} is the most suitable option.Currently it is avaible at ow cost and purchasing would get you profit
                in later phase whem gold value increases.
           </p>
        </div>
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
            <div ref={aboutusDiv}>
                <h1 className = "headerForAboutUs"> About Us</h1> 
                <p className ="aboutUsPara"> 
                              IRM is investment road map for employee,youngsters,senior people to know their way for investment.Every youngster, employee or experienced person, thinks to invest their income into some policy or plans in market as secondary source of income. We propose a site that suggests best investment options based on the amount, risk taking or not and term of investment. The options include FD, Flexi Account, mutual fund, gold, silver land, properties, DMAT and many other options. The existing apps mostly promote some specific company or policy. The proposed site will provide guide map for user to invest rightly as per his inputs.
                  It will provide the amount of profit or returns based on current value for the option chosen as best. 
                  This will majorly consist of dynamically getting market current values for all the options and easy way to compare instead of visiting various sites for every option. 
                  Integration to various sites to get info or redirect user will provide navigation.
                  The goal is to provide basic road map for any investor.     
                </p>
              <br/>
              <br/>

              <p>Contact Us:</p>
                <address>
                  <a href="mailto:karishmakothari1996.kk@gmail.com">karishmakothari1996.kk@gmail.com</a><br/>
                  <a href="tel:+919325334783">(91)-9325334783 </a>
              </address>
        </div>
    </div>
    
  );
}

export default App;
