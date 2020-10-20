import React from "react";

import Navigation from "../Navbar/Navigation.js";
import Connect from "../Skills/Connect";
import ProfilePic from "./ProfilePic";
import "./AboutMe.css";
import "../Skills/Skills.css"

const AboutMe = () => {

    return (
        <div className="mainAbout">
        <Navigation/>
        <div className="mainIntro">
            <div className="profilepic">
                <ProfilePic/>
            </div>
            <div className="title">
                <h2>My Background:</h2>
            </div>  
            <div className="background">
                <p className="wordsBackground">Full-stack web developer from Orem, Utah.</p>
                <p className="wordsBackground">I recently graduated from Lambda School, which is a 9+ month online Computer Science</p> 
                <p className="wordsBackground">and Software Engineering Academy providing an immersive hands-on</p> 
                <p className="wordsBackground">curriculum with a focus on computer science, software engineering, and web development.</p>
                
            </div>
            <div className="background2">
                <p className="wordsBackground">I build back-ends, front-ends, and everything in between.</p>
                <p className="wordsBackground">I am a fast learner and am able to adapt quickly in new environments.</p>  
                <p className="wordsBackground">I have developed communication and collaboration skills from past work and school experiences</p>
                <p className="wordsBackground">that have become an essential part of my coding process. I look forward to working with others</p>
                <p className="wordsBackground">because there is always something new to learn.</p>
            </div>

            {/* <div className="background2">
                <p className="wordsBackground">When I am not coding, </p> 
                <p className="wordsBackground"> </p> 
                <p className="wordsBackground"></p>
                <p className="wordsBackground"></p>
                <p className="wordsBackground"></p>
            
            </div> */}
        </div>
        <Connect/>
        </div>
    )
}

export default AboutMe;