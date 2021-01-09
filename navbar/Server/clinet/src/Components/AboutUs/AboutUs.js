import React, { Component } from 'react';
import './AboutUs.css';

class AboutUs extends Component{
    render(){
return (
    
<div >
        <h1 className = "headerForAboutUs">
                    About Us
        </h1> 
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
</div>)

    }
}

export default AboutUs