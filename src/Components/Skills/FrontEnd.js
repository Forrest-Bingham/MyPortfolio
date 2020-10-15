import React from "react";
import {FaHtml5} from "react-icons/fa";
import {FaCss3} from "react-icons/fa";
import {FaJs} from "react-icons/fa";
import {FaReact} from "react-icons/fa";
import {FaPython} from "react-icons/fa";
import {FaNodeJs} from "react-icons/fa";
import redux from "./images/redux.png";
import graphql from "./images/graphql.png";
import prisma from "./images/prisma.png";
import sql from "./images/sql.png";
import knex from "./images/knex.png";
import apollo from "./images/apollo.png";
import {IconContext} from "react-icons";
import "./Skills.css"

const FrontEnd = () => {

    return (
        // <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)", }}}>
        <IconContext.Provider value={{ style: {fontSize: '30px', color: "#66fcf1", }}}> 
        <div className="FrontEndList">
        <div className="Fundamentals">
            <div className="icon">
            <FaHtml5/>
            <p>HTML5</p>
            </div>
        
            <div className="icon">
            <FaCss3/>
            <p>CSS</p>
            </div>

            <div className="icon">
            <FaJs/>
            <p>JavaScript</p>
            </div>
        </div>
        
        <div className="Libraries">
            <div className="icon">
            <FaReact/>
            <p>ReactJS</p>
            </div>    
            <div className="icon">
            <img src={redux} alt="redux logo" className="logo"/>
            <p>Redux</p>
            </div>
            <div className="icon">
            <img src={graphql} alt="graphql logo" className="logo"/>
            <p>GraphQL</p>
            </div>
            <div className="icon">
            <img src={prisma} alt="prisma logo" className="logo"/>
            <p>Prisma</p>
            </div>
            <div className="icon">
            <img src={sql} alt="prisma logo" className="logo"/>
            <p>SQL</p>
            </div>
        </div>
        <div className="Backend">
            <div className="icon">
            <FaPython/>
            <p>Python</p>
            </div>
            <div className="icon">
            <FaNodeJs/>
            <p>NodeJS</p>
            </div>
            <div className="icon">
            <img src={knex} alt="knex logo" className="logo"/>
            <p>KnexJS</p>
            </div>
            <div className="icon">
            <img src={apollo} alt="knex logo" className="logo"/>
            <p>Apollo</p>
            </div>
        </div>
        </div>
        </IconContext.Provider>
    )
}

export default FrontEnd