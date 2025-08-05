import React, { useState } from "react";
import "./Works.css";
import projects from "../../assets/data/projects";

const Works = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  const toggleShow = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section id="works" className="projects-section">
      <h2 className="projects-title">Trabajos</h2>
      <p className="projects-description">
        Aquí puedes explorar algunos de los proyectos en los que he trabajado,
        abarcando desarrollos personales, colaborativos y de diversa
        complejidad. Cada uno refleja mi pasión por la tecnología y el diseño.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const isVisible = showAll || index < 6;

          return (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card ${
                index >= 6 ? (showAll ? "fade-in" : "fade-out") : ""
              }`}
              style={{ display: isVisible ? "flex" : "none" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          );
        })}
      </div>

      {projects.length > 6 && (
        <div className="show-more-container">
          <button className="show-more-button" onClick={toggleShow}>
            {showAll ? "Mostrar menos ▲" : "Mostrar más ▼"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Works;
