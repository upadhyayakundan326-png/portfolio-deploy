import React from "react";
import "./Project.css";

function Project() {
  return (
    <section className="project-container" id="project">

      <h1 className="h1">My Projects</h1>

      <div className="project-card">

        <img
          src="jerseycaaaaa.jpg"
          alt="JerseyCA"
          className="jerseyca"
        />

        <div className="project-content">

          <h2 className="project-title">JerseyCA</h2>

          <p className="project-desc">
            A responsive React.js jersey shopping application with search,
            filters and cart management.
          </p>

          <div className="project-section">

            <h3 className="features">Key Features</h3>

            <ul className="bulletine">
              <li>React Router</li>
              <li>useState & useEffect</li>
              <li>Reusable Components</li>
              <li>Search & Filter Jerseys</li>
              <li>Cart Management</li>
              <li>Size Selection</li>
              <li>Total Price Calculation</li>
            </ul>

          </div>

          <div className="project-section">

            <h3 className="future-title">Future Plans</h3>

            <ul className="future">
              <li>Context API</li>
              <li>Backend Integration</li>
              <li>Authentication</li>
              <li>Improve UI & Performance</li>
            </ul>

          </div>

          <div className="flex">

            <a href="#" className="demo">
              Live Demo
            </a>

            <a
              href="https://github.com/upadhyayakundan326-png/jerseyca"
              target="_blank"
              rel="noreferrer"
              className="Github"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Project;