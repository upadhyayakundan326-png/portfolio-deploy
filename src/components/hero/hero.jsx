import React from "react";
import "./Hero.css";
import { easeInOut, motion } from "framer-motion";

const text = "Hi, I'm Kundan 👋";
const name ="Kundan";

// Parent Variant
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Child Variant
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
    <div className="home-section">
      <section id="home" className="hero">

        {/* Left Side */}
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
              delay: 1,
              duration: 0.02,
            }}

            whileHover={{
              scale
              :1.08,
              color:"crimson",
              ease:easeInOut,
            }}
            

              
          
            
          >
            Frontend Developer
            <br />
            Building Modern & Responsive Web Experiences
          </motion.h3>
<motion.div
  className="left sec3"
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

  
  
  
initial={
  {
    //x:-50,
    color:"#212121",
  }
}  
animate={{
  //x:[-50,50,50],
  color:"#fff",
}}

whileHover={{
  scale:1.02,
    
}}
transition={{
  duration:10,
  ease:easeInOut,
  repeat:Infinity,
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
    </div>
  );
}

export default Home;