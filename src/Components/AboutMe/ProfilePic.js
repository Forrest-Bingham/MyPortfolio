import React from "react";
import profilepic from "./images/profilepic.jpg";
import "./AboutMe.css";
const ProfilePic = () =>{
    return (
        <img src={profilepic} className="ProfilePicture" alt="It's a me!" height="130px" width="130px" border-radius="50%"/>
    )
}

export default ProfilePic