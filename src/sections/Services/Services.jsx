import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import services from "../../assets/data/services";
import "./Services.css";

const Services = () => {
  const [openService, setOpenService] = useState(null);
  const contentRefs = useRef({});
  const { t, i18n } = useTranslation();

  const toggleService = (id) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <section className="services-section" id="services">
      <h2 className="services-title">{t("services.title")}</h2>
      <p className="services-description">{t("services.description")}</p>

      <div className="services-list">
        {services.map((service) => {
          const isOpen = openService === service.id;

          if (!contentRefs.current[service.id]) {
            contentRefs.current[service.id] = React.createRef();
          }

          return (
            <div
              key={service.id}
              className={`service-card ${isOpen ? "open" : ""}`}
              onClick={() => toggleService(service.id)}
            >
              <div className="service-header">
                <span className="service-icon">{service.icon}</span>
                <h3 className="service-title">
                  {service.title[i18n.language]}
                </h3>
              </div>

              <div
                className={`service-details-wrapper ${isOpen ? "open" : ""}`}
                ref={contentRefs.current[service.id]}
              >
                <ul className="service-details">
                  {service.description[i18n.language].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
