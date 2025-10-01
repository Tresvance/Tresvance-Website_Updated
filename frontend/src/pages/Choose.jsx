import React from "react";
import Header from "../components/Header";
import "./Choose.css";
import img1 from "../assets/choose.jpg";
import ChooseCards from "./ChooseCards";


const Choose = () => {
  return (
    <div className="choose-container">
      <Header />
      <div className="choose-heading">
      <div className="choose-subheading1">
        <p>WHY CHOOSE</p><br></br>
        <p>TRESVANCE</p><br></br>
      </div>

      <div className="choose-subheading2">
        <p>We dont't just deliver technology-we</p><br/>
        <p>deliver trust,innovation and</p><br/>
        <p>long term value.</p>
        <div className="choose-fullbtn">
        <a>Learn More ↓</a>
        </div>
      </div>
      </div>

      <div className="choose-image-container">
        <img src={img1} alt="Choose Us" className="choose-image" />
      </div>

      <div className="choose-marquee">
        <div className="choose-marquee-content">
            ✦ WHY CHOOSE US  ✦  WHY CHOOSE US  ✦  WHY CHOOSE US  ✦  WHY CHOOSE US  ✦  WHY CHOOSE US  
        </div>
      </div>
      <ChooseCards/>
        
    </div>
  );
};

export default Choose;
