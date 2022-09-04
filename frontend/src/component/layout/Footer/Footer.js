import React from 'react'
import "./Footer.css";
import { FaLinkedin,FaGithubSquare } from "react-icons/fa";
import {FaShopify} from "react-icons/fa";

import ContactMailIcon from '@mui/icons-material/ContactMail';


import { GiBurningSkull } from "react-icons/gi";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="leftFooter">
                
                <p style={{alignItems:"center"}}>Contact Me <ContactMailIcon /></p>
                <div style={{border: "1px solid #fff"}}>
                    
                    <a className="mailBtn" href="mailto:harshbadwaik2001@gmail.com" style={{testDecoration: "none", color:"white", padding:"0.5vmax"}}>
                        harshbadwaik2001@gmail.com
                    </a>
                    
                </div>
                
            </div>
            <div className="midFooter">
            <h1><FaShopify/> E - COMMERCE</h1>
                <p>An E-commerce platform that you can build livelihood from</p>
                <p> <GiBurningSkull/> HarshBadwaik <GiBurningSkull/></p>
            </div>
            <div className="rightFooter">
                <h4>About Me</h4>
                <a href="https://www.linkedin.com/in/harsh-badwaik-2281881b2/"><FaLinkedin /> LinkedIn</a>
                <a href="https://github.com/harshb910"><FaGithubSquare/> Github</a>
            </div>
        </footer>
    )
}

export default Footer