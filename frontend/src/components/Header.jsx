import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import './Header.css';

const ThinClose = ({ size, color, className, onClick }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="0.25"
    viewBox="0 0 24 24"
    className={className}
    style={{ cursor: "pointer" }}
  >
    <line x1="4" y1="4" x2="20" y2="20" />
    <line x1="20" y1="4" x2="4" y2="20" />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleOpen = () => setIsMenuOpen(true);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsMenuOpen(false);
    }, 500); 
  };

  return (
    <>
      <div className={`header-container ${isMenuOpen ? "header-open" : ""}`}>
        <div className="header-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header-menu">
          {isMenuOpen ? (
            <a href="#" className="menu-btn" onClick={handleClose}>
              CLOSE
            </a>
          ) : (
            <a href="#" className="menu-btn" onClick={handleOpen}>
              MENU
            </a>
          )}
        </div>
      </div>

      <div>
        <div
          className={`overlay 
            ${isMenuOpen ? "overlay-open" : ""} 
            ${isClosing ? "overlay-closing" : ""}
          `}
        >
          <ThinClose
            size={130}
            color="white"
            className="overlay-close"
            onClick={handleClose}
          />

          <ul className="overlay-links">
            <li><Link to="/" onClick={handleClose}><span>HOME</span></Link></li>
            <li><Link to="/about-us" onClick={handleClose}><span>ABOUT</span></Link></li>
            <li><Link to="/our-works" onClick={handleClose}><span>OUR WORKS</span></Link></li>
            <li><Link to="/choose-us" onClick={handleClose}><span>WHY CHOOSE US</span></Link></li>
            <li><Link to="/join-us" onClick={handleClose}><span>CAREERS</span></Link></li>
            <li><Link to="/contact" onClick={handleClose}><span>CONTACT</span></Link></li>
          </ul>

          {/* <div className="overlay-details">
            <p>TRESVANCE SOFTWARES</p>
            <p><FaEnvelope style={{ marginRight: "8px" }} /> contact@tresvance</p>
            <p><FaMapMarkerAlt style={{ marginRight: "8px" }} /> Cochin, India</p>
          </div> */}

          <p className="overlay-vedio">
            <span>INNOVATE</span><br />
            <span>INTEGRATE</span><br />
            <span>ELEVATE</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
