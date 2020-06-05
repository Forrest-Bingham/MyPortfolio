import React from "react";
import "./Navigation.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Projects = () =>{

    return(
        <div className="Home">
        <Link to="/projects" className="Link">Projects</Link>
        </div>
    )
}
export default Projects