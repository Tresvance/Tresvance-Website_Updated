import React, { useState } from 'react';
import './JoinUs.css';

const JoinUs = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const benefits = [
    {
      title: "Fast-Growing Company",
      description: "Be part of an ambitious team at an inflection point, shaping the future of IT & AI services."
    },
    {
      title: "Never Stop Learning",
      description: "Continuous learning environment with access to new tools, mentorship, and growth opportunities."
    },
    {
      title: "Take Charge",
      description: "Own your projects and ideas — we empower you to lead, innovate, and excel."
    },
    {
      title: "Latest Technology Stack",
      description: "Hands-on experience with cutting edge AI, cloud, and enterprise tech solutions."
    },
    {
      title: "Great Colleagues",
      description: "Work alongside a supportive, collaborative, and diverse team that values growth and creativity."
    },
    {
      title: "Cross Domain Exposure",
      description: "Work on global projects across industries, combining technology with business innovation."
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToJoin = (e) => {
    e.preventDefault();
    const joinSection = document.getElementById('join');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = () => {
    console.log('Searching for:', jobTitle, location);
  };

  return (
    <div className="joinus-container">
     
      <section className="jhero-section">
        <h1 className="jhero-title">
          Unleash Your Potential: Join a Team of Innovators
        </h1>
        <p className="jhero-description">
          Innovate, create and grow with a company that's redefining the digital landscape. At Tresvance we empower visionaries, problem solvers and change makers to turn bold ideas into impactful solutions. We foster a culture of learning, collaboration and growth giving you the tools and freedom to excel. Your journey to making a real difference starts here.
        </p>
        <a href="#join" className="jsee-openings-btn" onClick={scrollToJoin}>
          See Openings Below ↓
        </a>
      </section>

      
      <section className="jteam-image-section">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=500&fit=crop&q=80" 
          alt="Team collaboration" 
          className="jteam-image"
        />
      </section>

      
      <section className="jbenefits-section">
        <span className="jbenefits-badge">Benefits</span>
        <h2 className="jbenefits-title">Why Join Us</h2>
        
        <div className="jbenefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="jbenefit-card">
              <div className="jbenefit-header">
                <h3 className="jbenefit-title">{benefit.title}</h3>
                <span className="jcheckmark">✓</span>
              </div>
              <p className="jbenefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="join-section" id="join">
        <h2 className="join-title">JOIN US NOW</h2>
        <p className="join-description">
          Shape the future of technology with us. At Tresvance, we bring together brilliant minds, innovative ideas, and cutting-edge strategies to build solutions that make a great impact.
        </p>
        
        <div className="jsearch-container">
          <div className="jsearch-form">
            <div className="jform-group">
              <label className="jform-label">What</label>
              <input 
                type="text" 
                className="jform-input" 
                placeholder="Job title or skill"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div className="jform-group">
              <label className="jform-label">Where</label>
              <input 
                type="text" 
                className="jform-input" 
                placeholder="City, State/Province or Country"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button className="jsearch-btn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>

        <p className="jno-openings">
          Currently we don't have any open jobs at Tresvance. Check out our page sometime later.
        </p>
      </section>

      <div className="jscroll-top" onClick={scrollToTop}>
        ↑
      </div>
    </div>
  );
};

export default JoinUs;