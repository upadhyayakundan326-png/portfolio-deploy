import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import Skills from "./components/skills/skills";
import Project from "./components/project/project";


function App(){

  return(
  <>
  <Navbar/>
  <Hero/>
  <Skills/>
  <Project/>
  
  <Contact/>
  <Footer/>
  
</>
)}
export default App;