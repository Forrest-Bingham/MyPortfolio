import React from "react";
import {FaGithub} from "react-icons/fa";
import {IconContext} from "react-icons";
import Navigation from "../Navbar/Navigation.js";
import AngelCity from "./Images/AngelCity.PNG";
import FarmFresh from "./Images/FarmFresh.PNG";
import SleepTracker from "./Images/SleepTracker.PNG";
import Nba from "./Images/Nba.PNG";
import "./Projects.css";
import Connect from "../Skills/Connect";

const MyProjects = () => {

    return (
        <div className="projectsMain">
        <IconContext.Provider value={{ style: {color: "#66fcf1", height: "25px", width: "25px" }}}> 
        <Navigation/>  
        <div className="project">
            <div className="projectName">
                <p className="name">Angel City Sports</p>
                <img src={AngelCity} alt="Angel City Sports" className="projectImage"/>
            </div>
            <div className="projectDescription">
                <div className="projectAchievements">
                    <p className="role">Full Stack Web Developer</p>   
                    <p className="appDescription">An app designed for increased participation and communication for Special Olympic events. 
                Completed 2 release canvases during an 8 week time period. 
                Team consisted of 6 Full Stack Web Developers.</p>
                    <ul className="accomplishments">
                        <li>Took initiative to self-teach GraphQL, Prisma, and Apollo.</li>
                        <li>Created back-end data models for Users, Activities, and Events using GraphQL</li>
                        <li>Built front-end functionality for signing up for Activities</li>
                        <li>Created back-end testing using Jest.</li>
                        <li>Enabled keyboard accessibility for signing up for activities.</li>
                    </ul>
                </div>
            <div className="github">
                <p className="techStack">Tech Stack:</p>
                <p className="tech">GraphQL | Prisma | Apollo</p>
                <h4>Check out the code on Github </h4>
                <div className="githubLinks">
                    <div className="link1">
                        <a href="https://github.com/Lambda-School-Labs/AdaptivApps-fe" rel="noopener noreferrer" target="_blank" className="link">
                            <p>Front-End</p>
                        </a>
                        <FaGithub/>
                    </div>
                    <div className="link2">
                        <a href="https://github.com/Lambda-School-Labs/AdaptivApps-be" rel="noopener noreferrer" target="_blank" className="link">
                            <p>Back-End</p>  
                        </a>
                        <FaGithub/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="project">
            <div className="projectName">
                <p className="name">Farmer Pal</p>
                <img src={FarmFresh} alt="Farmer Pal" className="projectImage"/>
            </div>
            <div className="projectDescription">
                <div className="projectAchievements">
                    <p className="role">Front End Developer</p>   
                    <p className="appDescription">An app designed for consumers to find and purchase locally grown food from local farmers and 
                    to increase farmer sales with better communication between consumer and farmer. Team consisted of 3 Front-End developers. App designed and built in 5 day period.</p>
                    <ul className="accomplishments">
                        <li>Created sign up and login forms for Farmers and Consumers with Formik</li>
                        <li>Built User and Farmer profiles, Shopping Inventory page, and Cart page with React.</li>
                        <li>Made API calls for adding and editing items to the cart with Axios.</li>
                        <li>Incorporated authentication and authorization services in API for security. </li>
                        </ul>
                </div>
            <div className="github">
                <p className="techStack">Tech Stack:</p>
                <p className="tech">ReactJS | React Hooks | Context API | Axios | Formik | React Router </p>
                <h4>Check out the code on Github </h4>
                <div className="githubLinks">
                    <div className="link1">
                        <a href="https://github.com/Build-Week-Farm-Fresh-1/Front-End2" rel="noopener noreferrer" target="_blank" className="link">
                            <p>Front-End</p>
                        </a>
                        <FaGithub/>
                    </div>
                </div>
            </div>
        </div>
            
            
        </div>
        <div className="project">
            <div className="projectName">
                <p className="name">Sleep Tracker</p>
                <img src={SleepTracker} alt="Sleep Tracker" className="projectImage"/>
            </div>
            <div className="projectDescription">
                <div className="projectAchievements">
                    <p className="role">Back End Developer</p>   
                    <p className="appDescription">An app designed to give users their optimal number of hours of sleep per night. Users rate their quality of sleep along with hours slept and the
                    app will calculate how much sleep they need to get. Solo member of the back end development team. Back end built and deployed before the 5 day deadline.</p>
                    <ul className="accomplishments">
                        <li>Took initiative to self-teach GraphQL, Prisma, and Apollo.</li>
                        <li>Created back-end data models for Users, Activities, and Events using GraphQL</li>
                        <li>Built front-end functionality for signing up for Activities</li>
                        <li>Created back-end testing using Jest.</li>
                        <li>Enabled keyboard accessibility for signing up for activities.</li>
                    </ul>
                </div>
            <div className="github">
                <p className="techStack">Tech Stack:</p>
                <p className="tech">KnexJS| NodeJS | Express | JWT</p>
                <h4>Check out the code on Github </h4>
                <div className="githubLinks">
                    <div className="link1">
                        <a href="https://github.com/Lambda-School-Labs/AdaptivApps-fe" rel="noopener noreferrer" target="_blank" className="link">
                            <p>Front-End</p>
                        </a>
                        <FaGithub/>
                    </div>
                    <div className="link2">
                        <a href="https://github.com/Lambda-School-Labs/AdaptivApps-be" rel="noopener noreferrer" target="_blank" className="link">
                            <p>Back-End</p>  
                        </a>
                        <FaGithub/>
                    </div>
                </div>
            </div>
        </div>
            
            
        </div>

        <div className="project">
            <div className="projectName">
                <p className="name">NBA Career Predictor</p>
                <img src={Nba} alt="Nba Career Predictor" className="projectImage"/>
            </div>
            <div className="projectDescription">
                <div className="projectAchievements">
                    <p className="role">Front End Developer</p>   
                    <p className="appDescription">An app designed to calculate the career longevity of any current player and compare 
                    them to a past NBA player. Team consisted of 3 Front End Developers.</p>
                    <ul className="accomplishments">
                        <li>Created login and searchbar components with React.</li>
                        <li>Managed state with React Hooks and Redux</li>
                        <li>Components styled with CSS.</li>
                    </ul>
                </div>
            <div className="github">
                <p className="techStack">Tech Stack:</p>
                <p className="tech">React | Redux </p>
                <h4>Check out the code on Github </h4>
                <div className="githubLinks">
                    <div className="link1">
                        <a href="https://github.com/Build-NBA-Career-Longevity-Predictor/front-end" rel="noopener noreferrer" target="_blank" className="link">
                            <p>Front-End</p>
                        </a>
                        <FaGithub/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </IconContext.Provider>
        <Connect/>
        </div>
    )
}

export default MyProjects;