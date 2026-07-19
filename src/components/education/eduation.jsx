import "./education.css";

function Education() {
  const education = [
    {
      year: "2022",
      title: "Higher Secondary",
      place: "Tamulpur Higher Secondary School",
      desc: "Completed Class 12 with a strong interest in technology and software development.",
    },
    {
      year: "2023 - Present",
      title: "Bachelor of Computer Applications",
      place: "Pragjyotish College",
      desc: "Currently pursuing BCA while learning modern web development and building real-world projects.",
    },
    {
      year: "Internship",
      title: "Web Development Intern",
      place: "Luit Studio",
      desc: "Worked on responsive websites and modern frontend development using current web technologies.",
    },
  ];

  return (
    <section className="education" id="education">

      <p className="section-tag">MY JOURNEY</p>

      <h2 className="section-title">
        Education & Experience
      </h2>

      <p className="section-desc">
        My academic journey and practical experience in web development.
      </p>

      <div className="education-grid">

        {education.map((item, index) => (
          <div className="edu-card" key={index}>

            <span className="year">{item.year}</span>

            <h3>{item.title}</h3>

            <h4>{item.place}</h4>

            <p>{item.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Education;