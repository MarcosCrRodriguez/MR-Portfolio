import pygameImg from "../images/pygame.png";
import stockImg from "../images/stock.png";
import perfyImg from "../images/perfy.png";
import gamesImg from "../images/games.png";
import clinicasaludImg from "../images/clinica-img.png";
import formulaoneImg from "../images/formulaone.png";
import arcanefanpageImg from "../images/arcanefanpage.png";
import palImg from "../images/pal.png";
import zyImg from "../images/zy-bg.png";

const projects = [
  {
    title: "Street Fighter - Rerscue",
    description:
      "Juego de lucha inspirado en Street Fighter, proyecto personal programado en Python (con Pygame).",
    image: pygameImg,
    link: "https://www.youtube.com/watch?v=GRXQdSPsfF4",
  },
  {
    title: "Usuarios y Stock",
    description:
      "Un sistema de windows form en donde hay manejo de usurios, carga y descarga de materiales (materias primas / productos terminados).",
    image: stockImg,
    link: "https://www.youtube.com/watch?v=B1gitUJAib8",
  },
  {
    title: "Perfy Drinks",
    description:
      "Sitio de bebidas energéticas, con carrito de compras y simulación de compra.",
    image: perfyImg,
    link: "https://perfy-drinks.netlify.app/",
  },
  {
    title: "Sala de Juegos",
    description:
      "Sitio donde podras encontrar distintos juegos, sección de ranking y foro para comentar",
    image: gamesImg,
    link: "https://angular-game-cdb9d.web.app/home",
  },
  {
    title: "Clínica Salud",
    description: "Sistema web para turnos y administración de clínica médica", // , permitiendo a los pacientes reservar turnos y a los médicos gestionar sus horarios.
    image: clinicasaludImg,
    link: "https://clinicasalud-app.web.app/home",
  },
  {
    title: "App Fórmula 1",
    description:
      "Landing page temática inspirado en actuales y pasadas temporadas de Fórmula 1, mostrando información de pilotos, autos y resultados.",
    image: formulaoneImg,
    link: "https://formulaone-angular.netlify.app/",
  },
  {
    title: "FanPage de Arcane",
    description:
      "Landing page temática inspirada en la serie de League of Legends.",
    image: arcanefanpageImg,
    link: "https://angular-arcanefanpage.netlify.app/presentacion",
  },
  {
    title: "Sitio institucional PAL",
    description:
      "Sitio web institucional para la organización PAL, mostrando su misión, visión y servicios.",
    image: palImg,
    link: "https://pal-website.netlify.app/home",
  },
  {
    title: "ZY – Plataforma de becas y finanzas",
    description:
      "ZY te ayuda a buscar becas, planear tu presupuesto y crecer profesionalmente.",
    image: zyImg,
    link: "https://tryzy.app/",
  },
];

export default projects;
