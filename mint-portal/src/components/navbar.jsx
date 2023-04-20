import React, { useState } from "react";
import "../styles.css";
import et_flag from "../images/et_flag.png";
import { Link } from "react-router-dom";


function Navbar(){
    const [isOpen, setIsOpen]=useState(false);
    return(
        <nav className="navv">                                  
               
                    <img className="logo" src={et_flag} alt="eth_flag" />
                    <div className="title">
                        <Link to="/">Federal Democratic Republic of Ethiopia</Link>
                    </div>               
                    
                <ul className={`ul ${isOpen && "open"}`} >
                    <Customlink to="/">Home</Customlink>
                    <Customlink to="/login">Login</Customlink>
                    <Customlink to="/register">Register</Customlink>                
                                
                </ul>
    
            
                <label for="bar-toggle" className={`small-menu ${isOpen && "open"}`} 
                onClick={()=> setIsOpen(!isOpen)} >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </label>
               

        </nav>
        
        
        
    );
    
    
};


function Customlink({to, children, ...props}){
    const path=window.location.pathname
    return(
        
            <li className={path===to? "active": ""}>
                <Link to={to} {...props}>{children}</Link>
            </li>   
            
    )
}

export default Navbar;