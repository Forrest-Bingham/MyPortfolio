import React, {useState} from "react";
import "./Navigation.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";


const Navigation = () => {


    return(
        <div className="navbar">
        {/* <div className="Icon">
        <h1>Forrest Bingham</h1>
        </div> */}
        <div className="Links">
        <Home/>
        <About/>
        <Projects/>
        </div>
        </div>
    )
}

export default Navigation