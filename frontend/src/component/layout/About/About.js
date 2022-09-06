import React from "react";
import "./AboutSection.css";
import { Button, Typography } from "@material-ui/core";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const About = () => {
    const visitGithub = () => {
        window.location = "https://github.com/harshb910";
    };
    const visitLinkedIn = () => {
        window.location = "https://www.linkedin.com/in/harsh-badwaik-2281881b2/";
    }
    return (
        <div className="aboutSection">
            <div></div>
            <div className="aboutSectionGradient"></div>
            <div className="aboutSectionContainer">
                <Typography component="h1">About Website</Typography>

                <div>
                    <div>
                        <Button onClick= {visitLinkedIn} color="primary">
                            Visit LinkedIn <LinkedInIcon />
                        </Button>
                        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="harsh-badwaik-2281881b2" data-version="v1">
                            <a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/harsh-badwaik-2281881b2?trk=profile-badge"  target="_blank" rel="noopener noreferrer"> </a>
                        </div>
                        
                        
                        <Typography>Harsh Badwaik</Typography>

                        <Button onClick= {visitGithub} color="grey">
                        Visit Github <GitHubIcon />
                        </Button>
                        <span>
                        This is an E-commerce website made using MERN stack.
                        <p>
                        It supports two types of users: one with admin privileges and one with not.
                        </p>
                        
                        </span>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default About;