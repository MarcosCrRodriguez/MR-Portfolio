// src/sections/About/About.jsx
import React from "react";
import "./About.css";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaJava,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiAngular,
  SiIonic,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiPhp,
  SiPython,
  SiSupabase,
  SiPostman,
  SiBootstrap,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <h2 className="about-title">{t("about.title")}</h2>
      <p className="about-description">{t("about.description")}</p>

      <div className="about-skills">
        <div className="skill-category">
          <h3>{t("about.skills.languages")}</h3>
          <ul>
            <li>
              <FaJs /> JavaScript
            </li>
            <li>
              <SiTypescript /> TypeScript
            </li>
            <li>
              <FaHtml5 /> HTML
            </li>
            <li>
              <FaCss3Alt /> CSS
            </li>
            <li>
              <FaJava /> Java
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>C#</span> C#
            </li>
            <li>
              <SiPython /> Python
            </li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>{t("about.skills.frameworks")}</h3>
          <ul>
            <li>
              <FaReact /> React Native
            </li>
            <li>
              <FaReact /> React
            </li>
            <li>
              <SiAngular /> Angular
            </li>
            <li>
              <FaNodeJs /> Node.js
            </li>
            <li>
              <SiIonic /> Ionic
            </li>
            <li>
              <SiBootstrap /> Bootstrap
            </li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>{t("about.skills.databases")}</h3>
          <ul>
            <li>
              <SiPostgresql /> PostgreSQL
            </li>
            <li>
              <FaDatabase /> SQL
            </li>
            <li>
              <SiFirebase /> Firebase
            </li>
            <li>
              <SiSupabase /> Supabase
            </li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>{t("about.skills.tools")}</h3>
          <ul>
            <li>
              <FaGitAlt /> Git
            </li>
            <li>
              <SiPostman /> Postman
            </li>
            <li>
              <FaCode /> VSCode
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
