import React from "react";
import "./WhyChooseUs.css";

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