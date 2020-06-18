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
                <p className="wordsBackground">I am a full stack web developer from Orem, Utah. </p>
                <p>I recently graduated from Lambda School, which is a 9+ month online CS 
                    and Software Engineering Academy </p>
                <p> providing an immersive hands-on curriculum with a focus on computer science,
                     software engineering, and web development. </p>
            </div>
        </div>
        </div>
    )
}

export default AboutMe;