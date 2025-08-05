import React from "react";
import "./Home.css";
import PortfolioIcon from "../../assets/profile.jpg";
import { FiDownload } from "react-icons/fi";

const scrollToId = (id) => {
  const element = document.getElementById(id);
  const offset = 100;
  const y = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const Home = () => {
  return (
    <section id="home" className="home-section">
      <img
        src={PortfolioIcon}
        alt="Foto de Marcos Cruz Rodriguez"
        className="home-image"
      />
      <h1 className="home-name">Marcos Cruz Rodriguez</h1>
      <h2 className="home-subtitle">Full-Stack Developer en Argentina</h2>
      <p className="home-description">
        Soy desarrollador Full-Stack de Buenos Aires, Argentina, con varios años
        de experiencia tanto en programación back-end como front-end. Busco
        nuevas oportunidades para seguir perfeccionando mis habilidades y
        contribuir a proyectos innovadores.
      </p>

      <div className="home-buttons">
        <a
          className="home-button primary"
          onClick={() => scrollToId("contact")}
        >
          Contacta conmigo
        </a>
        <a href="/cv.pdf" download className="home-button secondary">
          <FiDownload style={{ marginRight: "8px" }} />
          Mi CV
        </a>
      </div>
    </section>
  );
};

export default Home;
