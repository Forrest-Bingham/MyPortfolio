import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "./Components/Navbar/Navigation";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skill"
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
          <Navigation/>
      </header>
      <div className="Intro">
        <Intro/>
      </div>
      <div className="Skills">
        <Skills/>
      </div>
    </div>
  );
}

export default App;
