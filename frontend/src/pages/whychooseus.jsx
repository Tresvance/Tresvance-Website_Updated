import React from "react";
import "./whychooseus.css";
import "./WhyChooseUs.css";

const points = [
  {
    num: "01",
    title: "Cutting-Edge Expertise in Tech",
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
    title: "Client-Centric Product Architecture",
    description:
      "You receive complete code ownership, transparent documentation, agile delivery, and scalable solutions built around your business goals.",
  },
  {
    num: "04",
    title: "Scalable Data & Automation Engines",
    description:
      "From AI workflows to IoT integrations, we automate business operations and transform data into intelligent decision-making.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="arch-values-section">
      <div className="arch-container">
        
        {/* UTILITY HEADER */}
        <header className="arch-utility-header">
          <div className="utility-left">
            <span>FILTER: VALUES / ADVANTAGES</span>
          </div>
          <div className="utility-right">
            <span className="active-metric">METRIC</span>
            <span className="metric-divider"></span>
            <span className="inactive-metric">IMPERIAL</span>
          </div>
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

    <section className="why-choose-us-section">
      <div className="why-choose-us-container">

        {/* LEFT SIDE */}
        <div className="why-choose-us-left">
          <div className="why-choose-us-sticky">
            <span className="why-subtitle">
              // Core Advantages
            </span>

            <h2>
              Why Forward-Thinking
              <br />
              Businesses Choose
              <br />
              Tresvance.
            </h2>

            <p>
              We engineer mission-critical systems and elegant user
              interfaces that transform raw digital potential into
              unfair competitive advantages.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="why-choose-us-right">
          {points.map((point) => (
            <div
              key={point.num}
              className="point-card"
            >
              <div className="card-top">
                <span className="card-number">
                  {point.num}
                </span>

                <span className="card-dot"></span>
              </div>

              <h3>{point.title}</h3>

              <p>{point.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;