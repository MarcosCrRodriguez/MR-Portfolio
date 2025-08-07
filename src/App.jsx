import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/FooterTemp";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Works from "./sections/Works/Works";
import Services from "./sections/Services/Services";
import Contact from "./sections/Contact/Contact";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";

function App() {
  return (
    <>
      <Navbar />
      <LanguageSwitcher />
      <Home />
      <About />
      <Works />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
