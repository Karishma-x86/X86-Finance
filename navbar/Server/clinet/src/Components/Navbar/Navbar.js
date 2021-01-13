import React, { Component } from 'react';
import { Button } from '../Button';
import { MenuItems } from "./MenuItems";
import './Navbar.css';

class Navbar extends Component{

    constructor(props){
        super(props);
    }

    state = {clicked:false}

    handleClick = ()=> {
        this.setState({clicked: !this.state.clicked})
    }

    navBarButtonClick = (title)=>{

        {MenuItems.map((item, index)=>{
            if(item.title === "All Investment Options")
            {
                console.log(item);
                if(this.props.showAllOptionsButtonClick){
                    this.props.showAllOptionsButtonClick();
                    
                  } 
            }
        })}
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <img src="logo_transparent.png" width="120" height="100" />
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}>
                    </i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' :'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url} onClick={this.navBarButtonClick(item.title)}>
                                    {item.title} 
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
               
            </nav>
        )
    }
}


export default Navbar