import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import mrLogo from "../../assets/images/mr-logo.png";

const scrollToId = (id) => {
  const element = document.getElementById(id);
  const offset = 100;
  const y = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const FooterLink = ({ id, children }) => (
  <button onClick={() => scrollToId(id)} className="footer-link-button">
    {children}
  </button>
);

const Footer = () => {
  return (
    <footer className="footer">
      {/* MR centrado arriba */}
      <div className="footer-header">
        <div className="footer-title">
          <img src={mrLogo} alt="Logo MR" className="logo-img" />
        </div>
        <p className="footer-subtitle">Portfolio Personal</p>
        <div className="footer-icons"></div>
      </div>

      {/* Secciones de enlaces */}
      <div className="footer-sections">
        <div className="footer-column">
          <h3>Opciones</h3>
          <hr className="footer-divider" />
          <FooterLink id="home">Inicio</FooterLink>
          <FooterLink id="about">Acerca de mí</FooterLink>
          <FooterLink id="works">Trabajos</FooterLink>
          <FooterLink id="services">Servicios</FooterLink>
          <FooterLink id="contact">Contacto</FooterLink>
        </div>

        <div className="footer-column">
          <h3>Links</h3>
          <hr className="footer-divider" />
          <a
            href="https://github.com/MarcosCrRodriguez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/marcos-cruz-rodriguez-3151a2230/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/marcos_crod/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        <div className="footer-column">
          <h3>Contacto</h3>
          <hr className="footer-divider" />
          {/* <FooterLink id="contact">Formulario</FooterLink> */}
          <p>Buenos Aires, Argentina</p>
          <p>programmer.crod@gmail.com</p>
          <p>Disponible para proyectos freelance</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Marcos Cruz Rodriguez</p>
      </div>
    </footer>
  );
};

export default Footer;
