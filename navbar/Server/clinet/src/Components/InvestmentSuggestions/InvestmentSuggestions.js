import React, { Component } from 'react';
import './InvestmentSuggestions.css';

class InvestmentSuggestions extends Component{
    render(){
return (
   
    <div className="containercss">
            <h1 >Suggested RoadMap </h1>
           <h3 >We suggest you to invest in GOLD based on your inputs </h3>
           <p className="result-para">
               After calculating the profit results using the given inputs for all the available Options,
                GOLD is the most suitable option.Currently it is avaible at ow cost and purchasing would get you profit
                in later phase whem gold value increases.
           </p>
    </div>
    )
}
}

export default InvestmentSuggestions