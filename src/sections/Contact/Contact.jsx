import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "El nombre es obligatorio";
    if (!formData.email) {
      newErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Formato de email inválido";
    }
    if (!formData.subject) newErrors.subject = "El asunto es obligatorio";
    if (!formData.message)
      newErrors.message = "El mensaje no puede estar vacío";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const serviceID = "service_jy7lcsw";
    const templateID = "template_y21y7tr";
    const publicKey = "Cv4YaCzIqoMOO5Uhx";

    const currentTime = new Date().toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
      hour12: false,
    });

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      time: currentTime,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("Error al enviar el formulario:", error);
        alert("Ocurrió un error. Intentalo nuevamente.");
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contacto</h2>
      <p className="contact-description">
        Si tenés alguna consulta, propuesta o simplemente querés saludar,
        completá el formulario y te responderé lo antes posible.
      </p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Nombre *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Asunto *</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje *</label>
          <textarea
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-button">
          Enviar mensaje
        </button>

        {/* Mensaje de éxito */}
        {sent && (
          <p className="success-message">Mensaje enviado correctamente.</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
