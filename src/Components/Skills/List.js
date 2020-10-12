import React from "react";
import Connect from "./Connect";
import ContactForm from "./ContactForm"

const List = () => {

    return(
        <div className="List">
        
        {/* <div className="FrontEnd">
        <h1 className="Titles">Send me a message!</h1> 
        
        </div>    */}
        <ContactForm/>
        <Connect/>
        </div>
    )
}

export default List