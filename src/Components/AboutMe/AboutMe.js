import React from "react";

import Navigation from "../Navbar/Navigation.js";
import Connect from "../Skills/Connect";

import "./AboutMe.css";
import "../Skills/Skills.css"

const AboutMe = () => {

    return (
        <div className="mainAbout">
        <Navigation/>
        <div className="mainIntro">
            <div className="title">
                <h2>My Background:</h2>
            </div>  
            <div className="background">
                <p className="wordsBackground">Full-stack web developer from Orem, Utah.</p>
                <p className="wordsBackground">I recently graduated from Lambda School, which is a 9+ online Computer Science</p> 
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

            <div className="background2">
                {/* <p className="wordsBackground">In April 2019, I found myself with no degree, and was just let go of my job. After trying to come up with a plan, </p> 
                <p className="wordsBackground">my father asked me "If you could be good at one thing, what would it be?"</p> 
                <p className="wordsBackground">Instead of being sad about my situation, I realized it was a new opportunity for me</p>
                <p className="wordsBackground">to start doing what I love to do. My favorite class in college was a Web Development class</p>
                <p className="wordsBackground">After some research, I enrolled in Lambda School and have loved it ever since. </p>
             */}
            </div>
        </div>
        <Connect/>
        </div>
    )
}

export default AboutMe;