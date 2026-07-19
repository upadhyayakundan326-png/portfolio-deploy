import "./Contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      className="contact-section"
      id="contact"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2>Contact Me</h2>
      <p>Feel free to reach out. I'm always open to new opportunities.</p>

      <div className="contact-box">

        <a
          href="mailto:upadhyayakundan326@gmail.com?subject=Portfolio%20Enquiry"
          className="contact-item"
        >
          📩 Gmail: upadhyayakundan326@gmail.com
        </a>

        <a
          href="tel:+919101648595"
          className="contact-item"
        >
          📞 Phone: +91 9101648595
        </a>

        <a
          href="https://www.linkedin.com/in/kundan-upadhyaya-28b9a7412"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >
          💼 LinkedIn: Kundan Upadhyaya
        </a>

        <a
          href="https://github.com/upadhyayakundan326-png"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >
          💻 GitHub: Click Here
        </a>

      </div>
    </motion.section>
  );
}

export default Contact;