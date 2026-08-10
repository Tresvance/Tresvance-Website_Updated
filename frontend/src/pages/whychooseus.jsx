import React from "react";
import "./whychooseus.css";

const points = [
  {
    num: "01",
    title: "Cutting-Edge Expertise",
    description:
      "We don't just follow tech trends; we build them. From advanced machine learning models to enterprise full-stack ecosystems, our engineering team brings deep technical mastery to every line of code.",
  },
  {
    num: "02",
    title: "Precision Security Frameworks",
    description:
      "Every digital product is hardened against vulnerabilities from day one using zero-trust architecture and industry-leading security practices.",
  },
  {
    num: "03",
    title: "Client-Centric Architecture",
    description:
      "You receive complete code ownership, transparent documentation, agile delivery, and scalable solutions built exactly around your core business parameters.",
  },
  {
    num: "04",
    title: "Scalable Data Engines",
    description:
      "From AI workflows to IoT integrations, we automate complex business operations and transform raw data into intelligent, structured decision-making.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="arch-values-section">
      <div className="arch-container">
        
        {/* UTILITY HEADER */}
        <header className="arch-utility-header">
          <div className="utility-left">
            <span>WHY CHOOSE US</span>
          </div>
          {/* <div className="utility-right">
            <span className="active-metric">METRIC</span>
            <span className="metric-divider"></span>
            <span className="inactive-metric">IMPERIAL</span>
          </div> */}
        </header>

        {/* COLLECTION LIST */}
        <div className="arch-collection-list">
          {points.map((point) => (
            <div key={point.num} className="arch-collection-row">
              
              <div className="row-number">
                {point.num}
              </div>

              <div className="row-content">
                <h2 className="row-title">{point.title}</h2>
                <div className="row-description-wrapper">
                  <p className="row-description">{point.description}</p>
                </div>
              </div>

              <div className="row-action">
                <div className="minimal-plus">
                  <span className="horizontal"></span>
                  <span className="vertical"></span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;