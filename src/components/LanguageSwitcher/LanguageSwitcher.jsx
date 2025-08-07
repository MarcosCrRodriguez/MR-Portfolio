import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language;

  return (
    <div className="floating-language-buttons">
      <button
        onClick={() => changeLanguage("es")}
        className={`lang-circle ${currentLang === "es" ? "active" : ""}`}
      >
        ES
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`lang-circle ${currentLang === "en" ? "active" : ""}`}
      >
        EN
      </button>
    </div>
  );
};
export default LanguageSwitcher;
