import React, {useState} from "react";
import "./Intro.css";
import FrontEnd from "../Skills/FrontEnd"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Intro = () => {

    return(
        <div className="IntroMain">
            <div className="IntroInfo"> 
                <h1 className="Name">Forrest Bingham</h1>
                <h1 className="Title">Full-Stack Web Developer</h1>
            </div>
            <div className="introButton">
                <FrontEnd/>
                <Link to="/projects">
                <button className="introBtn">Check out my Portfolio</button>
                </Link>
            </div>
            
            {/* <div className="bgIMG"/> */}
                 
            
        </div>
    )
}

export default Intro