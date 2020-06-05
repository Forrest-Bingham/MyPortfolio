import React, {useState} from "react";
import "./Intro.css";

import Picture from "./Picture";

const Intro = () => {

    return(
        <div className="IntroMain">
            <div className="Picture">
            <Picture/>
            </div>

            <div className="IntroInfo">
            <h1 className="IntroWords">Hello, I'm Forrest Bingham</h1>
            <h2 className="IntroWords">Full-Stack Web Developer</h2>
            </div>

        </div>
    )
}

export default Intro