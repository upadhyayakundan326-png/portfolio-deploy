import React from "react";
import "./Hero.css";
import { easeInOut, motion } from "framer-motion";

const text = "Hi, I'm Kundan 👋";
const name ="Kundan";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};


const child = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,  
    transition: {
      duration:0.6,
      delay:0.5,
    },
  },
};

function Home() {
  return (
    <motion.div className="home-section"
    
    initial={{
      opacity:0,
      scale:0.9,

    }}
    whileInView={{
      opacity:1,
      scale:1.02,
    }}
    transition={{ duration: 2}}
  viewport={{ once: false, amount: 0.3 }}
    
    >
      <section id="home" className="hero">

        
        <div className="hero-left">

          <motion.h1
            className="sec1"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {text.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={child}
                style={{ 
                  display: "inline-block",
                  marginRight: "10px",
                   color: word === "Kundan" ? "crimson" : "white",

                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
           
          <motion.h3
            className="sec2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              
              duration: 3,
              delay:1,
            }}

            whileHover={{
              scale
              :1.08,
              
              ease:easeInOut,
            }}
            

              
          
            
          >
            <p className="bca">BCA Student  |  Frontend Developer, 
            <br/>
            Building Modern & Responsive <br/>Web Experiences</p>
          </motion.h3>

          <motion.button className="resume"
          
           initial={{
      opacity:0,
      scale:0.9,

    }}
    whileInView={{
      opacity:1,
      scale:1.02,
    }}
    transition={{ duration: 2}}
  viewport={{ once: false, amount: 0.3 }}
          
          >Download Resume</motion.button>


</div>
        

    
              <motion.div className="hero-right">
  <motion.img
    src="/kundan.jpeg"
    alt="kundan"
    className="siuu"
  />
</motion.div>
      </section>
    </motion.div>
  );
}

export default Home;

