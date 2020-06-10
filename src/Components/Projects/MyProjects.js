import React from "react";
import {FaGithub} from "react-icons/fa";
import {IconContext} from "react-icons";
import Navigation from "../Navbar/Navigation.js";
import AngelCity from "./Images/AngelCity.PNG";
import "./Projects.css";

const MyProjects = () => {

    return (
        <div className="projectsMain">
        <IconContext.Provider value={{ style: {color: "#4abc76", height: "60px", width: "60px" }}}> 
        <Navigation/>
         <h1>This is my Projects page</h1>   
        <div className="project">
            <div className="projectName">
            <p className="name">Angel City Sports</p>
            <img src={AngelCity} alt="Angel City Sports" className="projectImage"/>
            </div>
            <div className="projectDescription">
             <p className="role">Full Stack Web Designer</p>   
             <p className="appDescription">An app designed for increased participation and communication for Special Olympic events. 
                Completed 2 release canvases during an 8 week time period. 
                Team consisted of 6 Full Stack Web Developers.</p>
                <ul className="accomplishments">
                    <li>Took initiative to self-teach GraphQL, Prisma, and Apollo.</li>
                    <li>Created back-end data models for Users, Activities, and Events using GraphQL</li>
                    <li>Built front-end functionality for signing up for Activities</li>
                    <li>Created back-end testing using Jest.</li>
                    <li>Enabled signing up for activities while only using a keyboard </li>
                </ul>
             <p className="techStack">Tech Stack:</p>
             <p className="tech">This | That | Yeah</p>
             <div className="github">
                <FaGithub/>
                <h6>Check out the code on Github </h6>
             </div>
            </div>
            
        </div>
        <div className="project">
            <p>Project info</p>
        </div>
        <div className="project">
            <p>Project info</p>
        </div>
        </IconContext.Provider>
        </div>
    )
}

export default MyProjects;