
import "./Skills.css";
import { color, motion } from "framer-motion";
const skills = [
  { name:"HTML5", icon: "🌐" },
  { name:"CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "🟨" },
  { name: "React.js", icon: "⚛️" },
  { name:"Framer Motion", icon: "✨" },
  {name:"C++",icon:"➕"},
  {name:"OOPS",icon:"🧩"},
];

const tools = [
  { name: "Git", icon: "🔧" },
  { name: "GitHub", icon: "🐙" },
  { name: "VS Code", icon: "💻" },
  { name: "Vercel", icon: "▲" },
];

const learning = [
  { name: "Node.js", icon: "🟢" },
  { name: "Express.js", icon: "🚀" },
  { name: "MongoDB", icon: "🍃" },
];
const card = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
  duration: 0.5,
    },
  },
};

const Skills = () => {
  return (
    <motion.section id="skills" className="skills-section"
    initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 2}}
  viewport={{ once: false, amount: 0.3 }}
    
    >
      <h2>My Skills</h2>

      <p className="skills-text">
        Here are the technologies and tools I use to build modern,
        responsive, and interactive web applications. I'm continuously
        improving my skills while expanding into the MERN stack.
      </p>

      {/* Skills */}
      <h3 className="category-title">Frontend Skills</h3>

      <motion.div className="skills-container"
      
       initial={{
    y: 100,
    opacity: 0,
  }}
  whileInView={{
    y: 0,
    opacity: 1,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  viewport={{
    once: false,
    amount: 0.3,
  }}
      
      
      
      
      >
        {skills.map((skill, index) => (
          <motion.div className="skill-card" key={index}
          whileHover={{ scale: 1.1, 
            rotate: 0 ,
            backgroundColor:"crimson",

          }}
  transition={{ type: "spring", stiffness: 300 }}
  whileTap={{
    scale:0.7,
    opacity:0.6,
  }}

          
          >
            <span className="skill-icon">{skill.icon}</span>
            <h4 className="skill-name">  {skill.name}</h4>
            
          
            
            
                
        
          </motion.div>

        ))}
      </motion.div>

      {/* Tools */}
      <h3 className="category-title">Tools</h3>

      <motion.div className="skills-container"
      
      initial={{
    y: 100,
    opacity: 0,
  }}
  whileInView={{
    y: 0,
    opacity: 1,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  viewport={{
    once: false,
    amount: 0.3,
  }}
       
      >
        {tools.map((tool, index) => (
          <motion.div className="skill-card" key={index}
             
           whileHover={{ scale: 1.1, 
            rotate: 0 ,
            backgroundColor:"crimson",
           }}
           whileTap={{
            scale:0.5,
           }}
          
          
          >
            <span className="skill-icon">{tool.icon}</span>
            <h4 className="skill-name">{tool.name}</h4>
          </motion.div>
        ))}
      </motion.div>

      {/* Learning */}
      <h3 className="category-title">Currently Learning</h3>

      <motion.div className="skills-container"
       initial={{
    y: 100,
    opacity: 0,
  }}
  whileInView={{
    y: 0,
    opacity: 1,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  viewport={{
    once: false,
    amount: 0.3,
  }}>
        {learning.map((item, index) => (
          <motion.div className="skill-card" key={index}
          
        
  variants={card}
  whileHover={{
    scale: 1.08,
    backgroundColor: "crimson",
  }}
        
          
          >
            <span className="skill-icon">{item.icon}</span>
            <h4 className="skill-name">{item.name}</h4>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
    
  );
};

export default Skills;