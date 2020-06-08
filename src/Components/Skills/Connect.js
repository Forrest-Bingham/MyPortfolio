import React from "react";

import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {IconContext} from "react-icons";
const Connect = () => {

    return (
        <IconContext.Provider value={{ style: {color: "#4abc76", height: "60px", width: "60px" }}}> 
        <div className="connect">
            <h1> CONNECT WITH ME</h1>
            <div className="links">
                <div className="link">
                <FaGithub/>
                </div>
                <div className="link">
                <FaLinkedin/>
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