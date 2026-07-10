import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="kundan">
        <em>KUNDAN.</em>
      </h2>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Menu
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#project" onClick={() => setMenuOpen(false)}>Project</a>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }}>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;