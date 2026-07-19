import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import Skills from "./components/skills/skills";
import Project from "./components/project/project";

import About from "./components/about/about";
import Education from "./components/education/eduation";
function App(){

  return(
  <>
  <Navbar/>
  <Hero/>
  <About/>

  <Skills/>
  <Education/>
  <Project/>
  
  <Contact/>
  <Footer/>
  
</>
)}
export default App;