import React from "react";
import "./AboutUs.css";
import bannerImg from '../assets/banner.jpg';
import { FaPhoneAlt, FaUserCog, FaChartLine, FaHandshake } from "react-icons/fa";


 const services = [
  {
    number: "01",
    title: "AI DEVELOPMENT",
    desc:
      "OUR AI POWERED SOLUTIONS ENHANCE BUSINESS PROCESSES WITH MACHINE LEARNING MODELS, CHATBOTS, PREDICTIVE ANALYTICS AND AUTOMATION TOOLS.",
    img: "c:\Users\Hisham Haskar\Desktop\TRESVANCE\Blue and Green Modern AI Chatbot Development Services Poster (Instagram Post (45)).png", // replace with your image path or remove for text-only
  },
  {
    number: "02",
    title: "IoT Device Implementation",
    desc:
      "Transform your business with IoT integration, device management, and data-driven automation.",
    img: "your-image2.jpg",
  },
  {
    number: "03",
    title: "IoT Device Implementation",
    desc:
      "Transform your business with IoT integration, device management, and data-driven automation.",
    img: "your-image3.jpg",
  },
  {
    number: "04",
    title: "IoT Device Implementation",
    desc:
      "Transform your business with IoT integration, device management, and data-driven automation.",
    img: "your-image4.jpg",
  },
  {
    number: "05",
    title: "IoT Device Implementation",
    desc:
      "Transform your business with IoT integration, device management, and data-driven automation.",
    img: "your-image5.jpg",
  },
  {
    number: "06",
    title: "IoT Device Implementation",
    desc:
      "Transform your business with IoT integration, device management, and data-driven automation.",
    img: "your-image6.jpg",
  },
];

function AboutUs() {
  return (
    <div className="aboutus-container">
      {/* Header
      <nav className="aboutus-header">
        <span className="aboutus-logo">tresvance</span>
        <span className="aboutus-menu">Menu</span>
      </nav> */}

      {/* Main Title */}
      <div className="aboutus-main-title">
        EMPOWERING BUSINESSES WITH AI-DRIVEN DESIGN, DEVELOPMENT, AND STRATEGY
      </div>
      <div className="aboutus-subtitle">
        YOUR PARTNER IN AI-FIRST DIGITAL TRANSFORMATION
      </div>

      {/* Banner Image */}
      <div className="aboutus-image-block">
        <img 
            src={bannerImg}
        //   src="c:\Users\Hisham Haskar\Desktop\TRESVANCE\AboutUs image.jpg"
            alt="banner"
            className="aboutus-banner-image"
        />
      </div>

      {/* About Us Section */}
      <section className="aboutus-section">
        <div className="aboutus-section-title">About Us</div>
        <div className="aboutus-section-text">
          WE PROVIDE COMPREHENSIVE IT AND MANAGED SERVICES PRIMARILY TO CLIENTS IN NORTH AMERICA, THE MIDDLE EAST, AND ACROSS THE GLOBE. BACKED BY A FAR-REACHING NETWORK OF HIGHLY EXPERIENCED AND PROMINENT SOFTWARE PROFESSIONALS, WE ENSURE DELIVERED AND RELIABLE, SCALABLE, AND INNOVATIVE SOLUTIONS TAILORED TO DIVERSE BUSINESS NEEDS.
        </div>
      </section>

      <hr className="custom-divider" />


      {/* Why Choose Us Section */}

    <section className="aboutus-why-section">
    <div className="aboutus-why-title">WHY CHOOSE US ?</div>
    <div className="aboutus-why-grid">
        {[1, 2, 3, 4].map((item) => (
        <div className="aboutus-why-item" key={item}>
            <div className="aboutus-why-icon">
            {item === 1 && <FaPhoneAlt />}
            {item === 2 && <FaUserCog />}
            {item === 3 && <FaChartLine />}
            {item === 4 && <FaHandshake />}
            </div>
            <b className="aboutus-why-text-title">HOW WE DRIVE BUSINESS GROWTH</b>
            <div className="aboutus-why-text">
            {item === 1 && "At Tresvance Softwares, we empower businesses with cutting-edge technology solutions that enhance efficiency and scalability. From automation to data-driven insights, we create customized software that accelerates growth and maximizes ROI."}
            {item === 2 && "At Tresvance Softwares, we empower businesses with cutting-edge technology solutions that enhance efficiency and scalability. From automation to data-driven insights, we create customized software that accelerates growth and maximizes ROI."}
            {item === 3 && "At Tresvance Softwares, we empower businesses with cutting-edge technology solutions that enhance efficiency and scalability. From automation to data-driven insights, we create customized software that accelerates growth and maximizes ROI."}
            {item === 4 && "At Tresvance Softwares, we empower businesses with cutting-edge technology solutions that enhance efficiency and scalability. From automation to data-driven insights, we create customized software that accelerates growth and maximizes ROI."}
            </div>
        </div>
        ))}
    </div>
    </section>


      {/* Our Services */}
      <section className="aboutus-service-section">
        {/* <div className="aboutus-service-maintitle">OUR SERVICES </div>
        <div className="aboutus-service-title">
          CUSTOM IT SOLUTIONS FOR YOUR SUCCESSFUL BUSINESS
        <div className="aboutus-services-grid">
        {[
            "AI DEVELOPMENT",
            "IoT Device Implementation",
            "IoT Device Implementation",
            "IoT Device Implementation",
            "IoT Device Implementation",
            "IoT Device Implementation",
        ].map((service, idx) => (
            <div className="aboutus-service-card" key={idx}>
            <span className="aboutus-service-number">{`0${idx + 1}`}</span>
            <div className="aboutus-service-title">{service}</div>
            </div>
        ))}
        </div>
        </div> */}

        <section className="aboutus-service-section">
        <div className="aboutus-service-maintitle">OUR SERVICES</div>
        <div className="aboutus-services-grid">
            {services.map((service, idx) => (
            <div className="aboutus-service-card" key={service.number}>
                <span className="aboutus-service-number">{service.number}</span>
                <div className="aboutus-service-title">{service.title}</div>
                <div className="aboutus-service-desc">{service.desc}</div>
                {/* Uncomment below line to display image if desired */}
                {/* <img className="aboutus-service-img" src={} alt={service.title}/> */}
            </div>
            ))}
        </div>
        </section>



      </section>



    </div>
  );
}

export default AboutUs;
