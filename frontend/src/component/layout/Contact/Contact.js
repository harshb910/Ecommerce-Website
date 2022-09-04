import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import MetaData from "../MetaData";


const Contact = () => {

return (
    <div className="contactContainer">
        <MetaData title={"Contact Me"} />
        <a className="mailBtn" href="mailto:mymailforabhi@gmail.com">
            <Button>Contact: harshbadwaik2001@gmail.com</Button>
        </a>
    </div>
);
};

export default Contact;