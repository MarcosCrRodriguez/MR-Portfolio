import React from "react";
import "./Home.css";
import PortfolioIcon from "../../assets/profile.jpg";
import { FiDownload } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const scrollToId = (id) => {
  const element = document.getElementById(id);
  const offset = 100;
  const y = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const Home = () => {
  const { t, i18n } = useTranslation();

  // Determinar el archivo a descargar según el idioma actual
  const currentLang = i18n.language;
  const cvFile = currentLang === "en" ? "/cv-en.pdf" : "/cv-es.pdf";

  return (
    <section id="home" className="home-section">
      <img src={PortfolioIcon} alt={t("home.title")} className="home-image" />
      <h1 className="home-name">{t("home.title")}</h1>
      <h2 className="home-subtitle">{t("home.subtitle")}</h2>
      <p className="home-description">{t("home.description")}</p>

      <div className="home-buttons">
        <a
          className="home-button primary"
          onClick={() => scrollToId("contact")}
        >
          {t("home.contactButton")}
        </a>
        <a href={cvFile} download className="home-button secondary">
          <FiDownload style={{ marginRight: "8px" }} />
          {t("home.cvButton")}
        </a>
      </div>
    </section>
  );
};

export default Home;
