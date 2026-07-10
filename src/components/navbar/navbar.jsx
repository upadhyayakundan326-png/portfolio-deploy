import React from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
      }}
    >
      <h2 className="kundan"><em>KUNDAN.</em></h2>
      <ul className="nav-links"
       
       
      
      
      
      >
    
        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#home">Home</a>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#project">Project</a>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#skills">Skills</a>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#contact">Contact</a>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;