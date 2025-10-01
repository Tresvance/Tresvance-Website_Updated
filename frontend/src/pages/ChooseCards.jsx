import React from "react";
import { FaRocket, FaLightbulb, FaUsers, FaCogs } from "react-icons/fa";
import "./ChooseCards.css";

const cardData = [
  {
    icon: <FaRocket />,
    title: "Fast Performance",
    description: "Our solutions are optimized for speed and efficiency."
  },
  {
    icon: <FaLightbulb />,
    title: "Innovative Ideas",
    description: "We bring creative and modern solutions to your business."
  },
  {
    icon: <FaUsers />,
    title: "Customer Focus",
    description: "Our team is dedicated to providing exceptional service."
  },
  {
    icon: <FaCogs />,
    title: "Custom Solutions",
    description: "We tailor our products to fit your unique requirements."
  }
];

const ChooseCards = () => {
  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-icon">{card.icon}</div>
          <h3 className="card-title">{card.title}</h3>
          <p className="card-description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ChooseCards;
