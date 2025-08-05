import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css";

import mrLogo from "../../assets/images/mr-logo.png";

const scrollToId = (id) => {
  const element = document.getElementById(id);
  const offset = 100;
  const y = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Inicio", id: "home" },
    { label: "Acerca de mí", id: "about" },
    { label: "Trabajos", id: "works" },
    { label: "Servicios", id: "services" },
    { label: "Contacto", id: "contact" },
  ];

  return (
    <>
      <header className="nz-navbar">
        <div className="nz-inner">
          {/* Logo / título */}
          <div className="navbar-logo">
            <img src={mrLogo} alt="Logo MR" className="logo-img" />
          </div>

          {/* Menú Desktop */}
          <nav className="nz-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="nav-link-button"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Iconos sociales */}
          <div className="nz-icons">
            <a
              href="https://github.com/MarcosCrRodriguez"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/marcos-cruz-rodriguez-3151a2230/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/marcos_crod/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Menú hamburguesa (mobile) */}
          <button
            className="nz-burger"
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </header>

      {/* Menú overlay (mobile) */}
      {open && (
        <aside className="nz-overlay">
          <button
            className="nz-close"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          >
            <IoMdClose />
          </button>

          <nav className="nz-overlay-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToId(item.id);
                  setOpen(false);
                }}
                className="nav-link-button"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>
      )}
    </>
  );
};

export default Navbar;
