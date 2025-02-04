import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/servicePage";
import PrivacyPage from "./pages/Privacypage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage></ServicesPage>} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="privacyPolicy" element={<PrivacyPage />} />
      </Routes>
    </>
  );
};

export default App;
