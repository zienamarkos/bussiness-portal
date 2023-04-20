import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles.css";

function Footer(){
return(
    <div className="main-footer">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4>About bussiness portal</h4>
                    
                    <p>
                    The national business portal is a one-stop portal for e-government services that improves ease of doing business in Ethiopia through the automation of essential government services leveraging information and communication technologies.It is designed to provide a common platform and generic tools for online transactional services.The portal's role as a platform is the provision of centralized information about government services such as procedure, time and cost.In addition, it facilitates customer journey for a particular government service, track the status of service requests, and provide important alerts.This platform is initiated by the government of Ethiopia aiming to make government services more accessible online, reduce cost of transactions and improve turnaround time to citizens, non - citizens, businesses, and governmental & non - governmental organizations. 
                    </p>

                </div>
                <div className="col">
                    <h4>Important Links</h4>
                    
                    <Link to="https://mint.gov.et/" >www.mint.gov.et</Link>

                </div>
                <div className="col">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>
                            <i>+(251)-11-1264994</i>
                        </li>
                        <li>
                        <i> 2490 In the compound of old ERPA Building, Arada Subcity, Behind Lycee G / Mariam School, Churchill Road Addis Ababa, Ethiopia </i>
                        </li>
                    </ul>
                        
                    

                </div>

            </div>
            
        </div>
        <hr />
          <div className="container">           
            <div className="row">  

                <div className="col">
                    <p> © Copyright 2020 Ministry of Innovation and Technology, All rights reserved.</p> 
                </div>

                <div className="col">
                    <p>powered by: AAiT Software interns @MinT</p>
                </div>

            </div>
               
        </div>
    </div>
)
};

export default Footer;