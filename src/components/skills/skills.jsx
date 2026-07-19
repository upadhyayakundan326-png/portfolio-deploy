import "./Skills.css";
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML5",
    desc: "Creates the structure and semantic foundation of modern web pages.",
  },
  {
    name: "CSS3",
    desc: "Designs responsive layouts with clean styling and animations.",
  },
  {
    name: "JavaScript",
    desc: "Adds interactivity, logic and dynamic functionality to websites.",
  },
  {
    name: "React.js",
    desc: "Builds reusable components for fast and interactive user interfaces.",
  },
  {
    name: "Framer Motion",
    desc: "Creates smooth animations and engaging user experiences.",
  },
  {
    name: "OOP",
    desc: "Uses object-oriented programming principles to write scalable code.",
  },
];

const tools = [
  {
    name: "Git",
    desc: "Tracks code changes and manages version history efficiently.",
  },
  {
    name: "GitHub",
    desc: "Hosts projects and makes collaboration easier with Git.",
  },
  {
    name: "VS Code",
    desc: "My primary editor for writing and debugging code.",
  },
  {
    name: "Vercel",
    desc: "Deploys and hosts modern frontend applications with ease.",
  },
];

const learning = [
  {
    name: "Node.js",
    desc: "Learning backend development using JavaScript runtime.",
  },
  {
    name: "Express.js",
    desc: "Building REST APIs and server-side applications.",
  },
  {
    name: "MongoDB",
    desc: "Learning NoSQL databases for full-stack development.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Skills & <span>Technologies</span>
        </h2>

        <p className="skills-text">
          I build clean, responsive and modern web applications while
          continuously improving my frontend skills and expanding into
          full-stack development with the MERN Stack.
        </p>
      </motion.div>

      {/* Frontend Skills */}

      <div className="category">
        <h3 className="category-title">Frontend Skills</h3>

        <motion.div
          className="skills-container"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={index}
              variants={card}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <h4>{skill.name}</h4>

              <p>{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Tools */}

      <div className="category">
        <h3 className="category-title">Tools</h3>

        <motion.div
          className="skills-container"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {tools.map((tool, index) => (
            <motion.div
              className="skill-card"
              key={index}
              variants={card}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <h4>{tool.name}</h4>

              <p>{tool.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Currently Learning */}

      <div className="category">
        <h3 className="category-title">Currently Learning</h3>

        <motion.div
          className="skills-container"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {learning.map((item, index) => (
            <motion.div
              className="skill-card"
              key={index}
              variants={card}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <h4>{item.name}</h4>

              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;