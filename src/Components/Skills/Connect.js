import React from "react";

import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {IconContext} from "react-icons";
const Connect = () => {

    return (
        <IconContext.Provider value={{ style: {color: "#00818a", height: "60px", width: "60px" }}}> 
        <div className="connect">
            <h3> CONNECT WITH ME</h3>
            <div className="links">
                <div className="link">
                <a href="https://github.com/Forrest-Bingham" rel="noopener noreferrer" target="_blank">
                <FaGithub/>
                </a>
                </div>
                <div className="link">
                <a href="https://www.linkedin.com/in/forrest-bingham-8b3a091a8/" rel="noopener noreferrer" target="_blank">
                <FaLinkedin/>
                </a>
                </div>
                <div className="link">
                <a href="mailto:bingham_5@live.com?subject=Hello!">
                <MdEmail/>
                </a> 
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Connect;