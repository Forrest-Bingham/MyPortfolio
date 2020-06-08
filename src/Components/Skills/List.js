import React from "react";
import Connect from "./Connect";
import FrontEnd from "./FrontEnd";
const List = () => {

    return(
        <div className="List">
        
        <div className="FrontEnd">
        <h1 className="Titles">Skills</h1> 
        <FrontEnd/>
        </div>   
        <Connect/>
        </div>
    )
}

export default List