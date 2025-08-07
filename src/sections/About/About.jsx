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

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">Acerca de mí</h2>
      <p className="about-description">
        Soy un desarrollador Full-Stack apasionado, con una sólida base
        construida a través de años de estudio constante y experiencia práctica.
        Aunque aún no cuento con una trayectoria laboral extensa en el ámbito
        profesional, he completado con éxito numerosos proyectos personales y
        colaborativos, donde he perfeccionado mis habilidades tanto en el
        desarrollo front-end como back-end.
        <br />
        <br />
        Mi entusiasmo por el desarrollo Full-Stack se refleja en la dedicación
        que aporto a cada proyecto y en mi búsqueda constante de excelencia en
        cada etapa del proceso.
      </p>

      <div className="about-skills">
        {/* Lenguajes */}
        <div className="skill-category">
          <h3>Lenguajes</h3>
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
            {/* <li>
              <SiPhp /> PHP
            </li> */}
            <li>
              <SiPython /> Python
            </li>
          </ul>
        </div>

        {/* Frameworks y Librerías */}
        <div className="skill-category">
          <h3>Frameworks / Librerías</h3>
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

        {/* Bases de Datos */}
        <div className="skill-category">
          <h3>Bases de Datos</h3>
          <ul>
            {/* <li>
              <SiMongodb /> MongoDB
            </li> */}
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

        {/* Herramientas */}
        <div className="skill-category">
          <h3>Herramientas</h3>
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
