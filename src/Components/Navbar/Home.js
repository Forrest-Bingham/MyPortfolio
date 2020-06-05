import React from "react";
import "./Navigation.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () =>{

    return(
        <div className="Home">
        <Link to="/" className="Link">Home</Link>
        </div>
    )
}
export default Home