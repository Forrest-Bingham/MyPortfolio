import React from "react";
import "./Navigation.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const About = () =>{

    return(
        <div className="About">
        <Link to="/about" className="Link">About</Link>
        </div>
    )
}
export default About