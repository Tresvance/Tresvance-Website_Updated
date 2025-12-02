// Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-left">
        <div>
        <nav className="footer-nav">
          <a href="https://tresvance.com/index.html">Home</a>
          <a href="https://tresvance.com/about.html">About</a>
          <a href="https://tresvance.com/feature.html">Services</a>
          <a href="https://tresvance.com/contact.html">Contact Us</a>
        </nav>
        </div>
        <div className="footer-contact">
          <a href="mailto:contact@tresvance.com" className="contact-link">
            contact@tresvance.com <span className="arrow">→</span>
          </a>
          <p className="copyright">
            © <a href="https://tresvance.com/">Tresvance.com</a> All Rights Reserved. Powered by Tresvance
          </p>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-description">
          At Tresvance Software, we deliver reliable IT and software development services tailored to your needs. Our global network of skilled developers ensures fast, flexible, and future-ready solutions.
        </div>
        <form className="email-form">
          <input type="email" placeholder="Your email Here" />
          <button type="submit" className="email-arrow">→</button>
        </form>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-location">📍 Cochin, India</div>
      <div className="footer-social">
        <a href="https://www.instagram.com/tresvance.connect/">INSTAGRAM</a>
        <a href="https://www.linkedin.com/company/tresvance/posts/?feedView=all">LINKEDIN</a>
      </div>
      <a href="#" className="back-to-top">Back to Top ↑</a>
    </div>
    <div className="footer-brand">TRESVANCE</div>
  </footer>
);

export default Footer;
