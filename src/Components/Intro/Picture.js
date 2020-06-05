import React from "react";
import SirReginald from "./Images/SirReginald.jpg";
import "../Intro/Intro.css";
const Picture = () =>{
    return (
        <img src={SirReginald} className="ProfilePicture" alt="Sir Reginald, Duke of Chutney" height="120px" width="120px"/>
    )
}

export default Picture