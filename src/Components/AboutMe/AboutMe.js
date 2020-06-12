import React from "react";

import Navigation from "../Navbar/Navigation.js";

import "./AboutMe.css";

const AboutMe = () => {

    return (
        <div className="mainAbout">
        <Navigation/>
        <div className="mainIntro">
            <div className="title">
                <h2>My Background:</h2>
            </div>  
            <div className="background">
                <h3>This is where I started</h3>
            </div>
        </div>
        </div>
    )
}

export default AboutMe;