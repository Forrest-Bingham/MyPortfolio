import React from "react";

import FrontEnd from "./FrontEnd";
const List = () => {

    return(
        <div className="List">
        
        <div className="FrontEnd">
        <h2 className="Titles">Front End</h2>
        <FrontEnd/>
        </div>   
        <div className="BackEnd">
        <h2 className="Titles">Back End</h2>
        </div>
        </div>
    )
}

export default List