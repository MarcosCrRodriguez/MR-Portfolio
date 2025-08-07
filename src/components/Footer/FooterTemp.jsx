import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import mrLogo from "../../assets/images/mr-logo.png";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <footer className="footer">
      {/* MR centrado arriba */}
      <div className="footer-header">
        <div className="footer-title">
          <img src={mrLogo} alt="Logo MR" className="logo-img" />
        </div>
        <p className="footer-subtitle">{t("footer.subtitle")}</p>
      </div>

      {/* Secciones de enlaces */}
      <div className="footer-sections">
        <div className="footer-column">
          <h3>{t("footer.sections.options")}</h3>
          <hr className="footer-divider" />
          <FooterLink id="home">{t("navbar.home")}</FooterLink>
          <FooterLink id="about">{t("navbar.about")}</FooterLink>
          <FooterLink id="works">{t("navbar.works")}</FooterLink>
          <FooterLink id="services">{t("navbar.services")}</FooterLink>
          <FooterLink id="contact">{t("navbar.contact")}</FooterLink>
        </div>

        <div className="footer-column">
          <h3>{t("footer.sections.links")}</h3>
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
          <h3>{t("footer.sections.contact")}</h3>
          <hr className="footer-divider" />
          <p>{t("footer.location")}</p>
          <p>programmer.crod@gmail.com</p>
          <p>{t("footer.availability")}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
