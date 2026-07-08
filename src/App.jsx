import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";

import Contact from "./components/contact/contact";
import Skills from "./components/skills/skills";
import Project from "./components/project/project";

function App(){

  return(
  <>
  <Navbar/>
  <Hero/>
  
  <Project/>
  <Skills/>
  <Contact/>
  
</>
)}
export default App;