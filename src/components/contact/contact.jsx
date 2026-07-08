import "./Contact.css";
import { color, motion } from "framer-motion";

function Contact() {
  return (
    <motion.section className="contact-section" id="contact"
    
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
      <h2>Contact Me</h2>
      <p>Feel free to reach out. I'm always open to new opportunities.</p>

    <div className="contact-box">

        <div className="contact-item">
  <span>@gmail</span>

  <a
    href="mailto:upadhyayakundan326@gmail.com?subject=Portfolio%20Enquiry"
    className="mail-btn"
  >
    📩
  </a>
</div>

        <a
          href="tel:9101648595"
          className="contact-item"
        >
          📞 +91 9101648595
        </a>

        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >
          💼 LinkedIn
        </a>

        <a
          href="https://github.com/upadhyayakundan326-png"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >
          💻 GitHub
        </a>

      </div>
    </motion.section>
  );
}

export default Contact;