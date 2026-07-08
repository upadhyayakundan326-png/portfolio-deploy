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
      duration: 0.6,
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
                   color: word === "Kundan" ? "#00f5ff" : "white",
      textShadow: word === "Kundan" ? "10px 10px 15px #00f5ff" : "none",
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
              delay: 1.05,
              duration: 0.02,
            }}

            whileHover={{
              scale
              :1.08,
              
              ease:easeInOut,
            }}
            

              
          
            
          >
            Frontend Developer
            <br />
            Building Modern & Responsive Web Experiences
          </motion.h3>
<motion.div
  className=" sec3"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    delay: 1,
    duration: 1,
  }}
  style={{
    marginTop: "60px",
  }}
  whileHover={{
    scale: 1.02,
    
  }}
>
  <motion.p

  
  
  


whileHover={{
  scale:1.02,
    
}}

  
  >
    <b>Description:</b>
    <br />
    I'm a BCA 3rd-year student and a Frontend Developer, currently learning
    the MERN stack to become a Full-Stack Developer. I enjoy building
    responsive and user-friendly web applications while continuously
    improving my skills. I love learning new technologies, creating
    real-world projects, and growing through hands-on development and
    practical experience.
  </motion.p>
</motion.div>

</div>
        

        {/* Right Side */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          <motion.img
            src="/kundan.jpeg"
            alt="kundan"
            className="siuu"
            whileHover={{
              scale: 1.05,
              rotate: 2,
            }}
            transition={{
              duration: 0.4,
            }}
          />
        </motion.div>
      </section>
    </motion.div>
  );
}

export default Home;