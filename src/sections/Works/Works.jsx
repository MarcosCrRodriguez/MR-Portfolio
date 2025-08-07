import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Works.css";
import projects from "../../assets/data/projects";

const Works = () => {
  const [showAll, setShowAll] = useState(false);
  const { t, i18n } = useTranslation();

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  const toggleShow = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section id="works" className="projects-section">
      <h2 className="projects-title">{t("works.title")}</h2>
      <p className="projects-description">{t("works.description")}</p>

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
                alt={project.title[i18n.language]}
                className="project-image"
              />
              <div className="project-info">
                <h3>{project.title[i18n.language]}</h3>
                <p>{project.description[i18n.language]}</p>
              </div>
            </a>
          );
        })}
      </div>

      {projects.length > 6 && (
        <div className="show-more-container">
          <button className="show-more-button" onClick={toggleShow}>
            {showAll ? t("works.showLess") : t("works.showMore")}
          </button>
        </div>
      )}
    </section>
  );
};

export default Works;
