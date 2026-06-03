import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Choose from "./pages/Choose";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import JoinUs from "./pages/JoinUs";
import OurWorks from "./pages/OurWorks";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div id="top">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/choose-us" element={<Choose />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-works" element={<OurWorks />} />
        </Routes>

        {/* Chatbot visible on all pages */}
        <Chatbot />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
