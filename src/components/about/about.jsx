import "./about.css";

function About() {
  return (
    <section className="about-section" id="about">

      <p className="about-tag">ABOUT ME</p>

      <h2 className="about-title">
        Building Experiences,
        <span> Not Just Websites.</span>
      </h2>

      <div className="about-card">

        <div className="about-line"></div>

        <div className="about-content">

          <p>
            Hi, I'm <strong>Kundan Upadhyaya</strong>, a BCA student and
            Frontend Developer passionate about crafting modern and
            responsive web experiences.
          </p>

          <p>
            I enjoy transforming ideas into real products. Whether it's a
            simple landing page or a complete web application, I focus on
            writing clean code, creating smooth user experiences and paying
            attention to every detail.
          </p>

          <p>
            Currently I'm expanding my skills into the
            <span> MERN Stack </span>
            while continuously improving React, Next.js and modern frontend
            development.
          </p>

          <div className="about-footer">
           

            

            <div>
              <h3>MERN</h3>
              <span>Currently Learning</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;