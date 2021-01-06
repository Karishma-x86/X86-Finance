import React, { Component, useState } from 'react';
import './InputForm.css';

class InputForm extends Component{
    render(){
       

return (
    
        <div className="containercss">
            <form className="form">
                <h1 className="headers">
                    Investment Amount
                </h1> 
                <input className="inputbox" type = "number" name = "amount" min="1.0" required = "true" 
                    />
                <br/><br/>
                <h1 className="headers">Risk</h1>  
                <select className="inputbox" name = "risks" >
                    <option value = "Default" selected>Default</option>
                    <option value = "Low" >Low</option>
                    <option value = "Medium">Medium</option>
                    <option value = "High">High</option>
                </select>
                <br/><br/>

                <h1 className="headers">Investment Term </h1>
                <input className="inputbox"  placeholder="Optional" type="number" id="term" name="term" min="1" max="12"></input>
                <br/><br/>
                <button className="showbutton"> Submit options</button>

            </form>
        </div>
    ) }
}
export default InputForm