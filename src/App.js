import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "./Components/Navbar/Navigation";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skill"
import AboutMe from "./Components/AboutMe/AboutMe";
import MyProjects from "./Components/Projects/MyProjects";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Navigation}/>
      <Route exact path="/" component={Intro}/>
      <Route exact path="/" component={Skills}/>
      <Route exact path="/about" component={AboutMe}/>
      <Route exact path="/projects" component={MyProjects}/>
    </div>
  );
}

export default App;
