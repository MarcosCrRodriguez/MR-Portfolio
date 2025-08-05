import React, { useState, useRef } from "react";
import services from "../../assets/data/services";
import "./Services.css";

const Services = () => {
  const [openService, setOpenService] = useState(null);
  const contentRefs = useRef({}); // Se guarda un ref por ID

  const toggleService = (id) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <section className="services-section" id="services">
      <h2 className="services-title">Servicios</h2>
      <p className="services-description">
        Descubrí los distintos servicios que ofrezco como desarrollador
        Full-Stack. Al hacer clic en cada uno, podrás ver más detalles sobre lo
        que incluye.
      </p>
      <div className="services-list">
        {services.map((service) => {
          const isOpen = openService === service.id;

          // Inicializamos el ref si no existe
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
                <h3 className="service-title">{service.title}</h3>
              </div>

              <div
                className={`service-details-wrapper ${isOpen ? "open" : ""}`}
                ref={contentRefs.current[service.id]}
              >
                <ul className="service-details">
                  {service.description.map((item, idx) => (
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
