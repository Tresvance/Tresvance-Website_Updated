import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Choose from "./pages/Choose";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import JoinUs from "./pages/JoinUs";
import OurWorks from "./pages/OurWorks";

function App() {
  return (
    <div id="top" className="min-h-screen flex flex-col">
      <Router>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/choose-us" element={<Choose />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-works" element={<OurWorks />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


