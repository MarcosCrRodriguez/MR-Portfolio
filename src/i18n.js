// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Traducciones
const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About Me",
        works: "Projects",
        services: "Services",
        contact: "Contact",
      },
      home: {
        title: "Marcos Cruz Rodriguez",
        subtitle: "Full-Stack Developer in Argentina",
        description:
          "I am a Full-Stack developer from Buenos Aires, Argentina, with several years of experience in both back-end and front-end programming. I am looking for new opportunities to continue improving my skills and contribute to innovative projects.",
        contactButton: "Contact me",
        cvButton: "My CV",
      },
      about: {
        title: "About Me",
        description:
          "I am a passionate Full-Stack developer with a solid foundation built through years of continuous learning and hands-on experience. Although I don't yet have an extensive professional track record, I have successfully completed numerous personal and collaborative projects, where I have honed my skills in both front-end and back-end development.\n\nMy enthusiasm for Full-Stack development is reflected in the dedication I bring to each project and my constant pursuit of excellence at every stage of the process.",
        skills: {
          languages: "Languages",
          frameworks: "Frameworks / Libraries",
          databases: "Databases",
          tools: "Tools",
        },
      },
      works: {
        title: "Projects",
        description:
          "Here you can explore some of the projects I've worked on, including personal, collaborative, and complex developments. Each one reflects my passion for technology and design.",
        showMore: "Show more ▼",
        showLess: "Show less ▲",
      },
      services: {
        title: "Services",
        description:
          "Discover the different services I offer as a Full-Stack developer. Click on each one to see more details about what's included.",
      },
      contact: {
        title: "Contact",
        description:
          "If you have any questions, proposals or just want to say hi, fill out the form and I’ll get back to you as soon as possible.",
        labels: {
          name: "Name",
          email: "Email",
          subject: "Subject",
          message: "Message",
        },
        sendButton: "Send Message",
        success: "Message sent successfully.",
        errors: {
          name: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Invalid email format",
          subject: "Subject is required",
          message: "Message cannot be empty",
          sendError: "An error occurred. Please try again.",
        },
      },
      footer: {
        subtitle: "Personal Portfolio",
        sections: {
          options: "Options",
          links: "Links",
          contact: "Contact",
        },
        location: "Buenos Aires, Argentina",
        availability: "Available for freelance projects",
        copyright: "© 2025 Marcos Cruz Rodriguez",
      },
    },
  },
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        about: "Acerca de mí",
        works: "Trabajos",
        services: "Servicios",
        contact: "Contacto",
      },
      home: {
        title: "Marcos Cruz Rodriguez",
        subtitle: "Full-Stack Developer en Argentina",
        description:
          "Soy desarrollador Full-Stack de Buenos Aires, Argentina, con varios años de experiencia tanto en programación back-end como front-end. Busco nuevas oportunidades para seguir perfeccionando mis habilidades y contribuir a proyectos innovadores.",
        contactButton: "Contacta conmigo",
        cvButton: "Mi CV",
      },
      about: {
        title: "Acerca de mí",
        description:
          "Soy un desarrollador Full-Stack apasionado, con una sólida base construida a través de años de estudio constante y experiencia práctica. Aunque aún no cuento con una trayectoria laboral extensa en el ámbito profesional, he completado con éxito numerosos proyectos personales y colaborativos, donde he perfeccionado mis habilidades tanto en el desarrollo front-end como back-end.\n\nMi entusiasmo por el desarrollo Full-Stack se refleja en la dedicación que aporto a cada proyecto y en mi búsqueda constante de excelencia en cada etapa del proceso.",
        skills: {
          languages: "Lenguajes",
          frameworks: "Frameworks / Librerías",
          databases: "Bases de Datos",
          tools: "Herramientas",
        },
      },
      works: {
        title: "Trabajos",
        description:
          "Aquí puedes explorar algunos de los proyectos en los que he trabajado, abarcando desarrollos personales, colaborativos y de diversa complejidad. Cada uno refleja mi pasión por la tecnología y el diseño.",
        showMore: "Mostrar más ▼",
        showLess: "Mostrar menos ▲",
      },
      services: {
        title: "Servicios",
        description:
          "Descubrí los distintos servicios que ofrezco como desarrollador Full-Stack. Al hacer clic en cada uno, podrás ver más detalles sobre lo que incluye.",
      },
      contact: {
        title: "Contacto",
        description:
          "Si tenés alguna consulta, propuesta o simplemente querés saludar, completá el formulario y te responderé lo antes posible.",
        labels: {
          name: "Nombre",
          email: "Correo electrónico",
          subject: "Asunto",
          message: "Mensaje",
        },
        sendButton: "Enviar mensaje",
        success: "Mensaje enviado correctamente.",
        errors: {
          name: "El nombre es obligatorio",
          emailRequired: "El email es obligatorio",
          emailInvalid: "Formato de email inválido",
          subject: "El asunto es obligatorio",
          message: "El mensaje no puede estar vacío",
          sendError: "Ocurrió un error. Intentalo nuevamente.",
        },
      },
      footer: {
        subtitle: "Portfolio Personal",
        sections: {
          options: "Opciones",
          links: "Links",
          contact: "Contacto",
        },
        location: "Buenos Aires, Argentina",
        availability: "Disponible para proyectos freelance",
        copyright: "© 2025 Marcos Cruz Rodriguez",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // Idioma por defecto
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
