import React from "react";
import "./ChooseCards.css";
import { FaRocket, FaLightbulb, FaUsers, FaCogs } from "react-icons/fa";

const cardData = [
  {
    icon: <FaRocket />,
    title: "END-TO-END DEVELOPMENT SUPPORT",
    description: "We provide complete development services, from planning to deployment. Ensuring your project is built efficiently and effectively."
  },
  {
    icon: <FaLightbulb />,
    title: "COMPREHENSIVE TESTING & QUALITY ASSURANCE",
    description: "Rigorous testing at every stage to guarantee quality. We make sure your product is bug-free and reliable."
  },
  {
    icon: <FaUsers />,
    title: "SCALABLE AND FUTURE READY SOLUTIONS",
    description: "Our solutions are designed to grow with your business. Future-proof technology for long term success."
  },
  {
    icon: <FaCogs />,
    title: "ONTIME DELIVERY",
    description: "We prioritize deadlines without compromising quality. Projects delivered promptly, every time."
  }
];



const ChooseCards =()=>{
    return(
      <div className="choosecards-container">
      {cardData.map((card, index) => (
        <div className="choosecards" key={index}>
          <div className="choosecards-icon">{card.icon}</div>
          <h3 className="choosecards-title">{card.title}</h3>
          <p className="choosecards-description">{card.description}</p>
        </div>
      ))}
    </div>
    );

};
export default ChooseCards;