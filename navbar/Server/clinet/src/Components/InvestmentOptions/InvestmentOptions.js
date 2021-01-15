import React, { Component } from 'react';
import './InvestmentOptions.css';

class InvestmentOptions extends Component{

  render(){
    return (
        
        <div ref={this.allOptionsDiv}>
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
                  <td>12</td>
                </tr>
            </table>

        </div>
      )}
}

export default InvestmentOptions