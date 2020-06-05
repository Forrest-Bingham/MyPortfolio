import React from "react";
import {FaHtml5} from "react-icons/fa";
import {FaCss3} from "react-icons/fa";
import {FaJs} from "react-icons/fa";
import {FaReact} from "react-icons/fa";

import reduxIcon from '@iconify/icons-simple-icons/redux';
import {IconContext} from "react-icons";
import "./Skills.css"

const FrontEnd = () => {

    return (
        <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)", }}}>
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
            
            <p>Redux</p>
            </div>
            <div className="icon">
            
            </div>
            <div className="icon">
            <p>ok</p>
            </div>
        </div>
        </div>
        </IconContext.Provider>
    )
}

export default FrontEnd