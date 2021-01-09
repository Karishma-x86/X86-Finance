import React, { Component } from 'react';
import './InputForm.css';

class InputForm extends Component{
    render(){
return (
    
<div class="container">
        <form className = "form">
        <h3 className="headers">
                    Investment Amount
                </h3> 
                 <input type = "number" name = "amount" min="1.0" required = "true" placeholder="Enter amount you wish to invest"/>
          <br/><br/>
          <h3 className="headers">Risk</h3>   
          <select name = "risks">
              <option value = "Low" selected>Low</option>
              <option value = "Medium">Medium</option>
              <option value = "High">High</option>
          </select>
          <br/><br/>
          <h3 className="headers">Investment Term </h3>
           <input type="number" id="term" name="term" min="1" placeholder="Enter terms(month) for investment"></input>
          <br/><br/>
          <input type="button" value="Show Investment Options"></input>
        </form>
</div>)
    }
}

export default InputForm