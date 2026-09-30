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
import TresAiAssistant from "./pages/TresAiAssistant";
import Chatbot from "./components/Chatbot";
import Seo from "./components/Seo";

function App() {
  return (
    <div id="top">
      <Router>
        <Seo />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/choose-us" element={<Choose />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-works" element={<OurWorks />} />
          <Route path="/tres-ai-assistant" element={<TresAiAssistant />} />
        </Routes>

        {/* Chatbot visible on all pages */}
        <Chatbot />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
