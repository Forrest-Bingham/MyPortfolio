import React, {useState} from "react";
import "./Intro.css";
import FrontEnd from "../Skills/FrontEnd"

const Intro = () => {

    return(
        <div className="IntroMain">
            <div className="IntroInfo"> 
                <h1 className="Name">Forrest Bingham</h1>
                <h1 className="Title">Full-Stack Web Developer</h1>
                <FrontEnd/>
            </div>
            <div className="bgIMG">
                <div className="hidden">
                    <p className="Hello">Hello World</p>
                </div>
            </div>
                
            
            

        </div>
    )
}

export default Intro