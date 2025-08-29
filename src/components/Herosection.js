import React from "react";
import "./Herosection.css";
import { FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

import ipadMockup from "../images/Tab.png"; // iPad PNG
import badge1 from "../images/badge1.svg";
import badge2 from "../images/badge2.svg";
import badge3 from "../images/badge3.svg";
import badge4 from "../images/badge4.svg";
import badge5 from "../images/badge5.svg";
import badge6 from "../images/badge6.svg";
import badge7 from "../images/badge7.svg";
import spiral from "../images/herosection-bg.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Smart <strong className="highlight">  CRM</strong>  <br /> For Smarter <br /> Businesses
          </h1>
          <p>
            Converro helps you capture, organize, and convert leads effortlessly so you can focus on closing deals and scaling your business, not managing complexity.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="btn-primary">
              Start For Free
              <span className="arrow-circle" onClick={()=>window.location.href="https://app.converro.online/register"}>
                <FiArrowRight className="arrow" />
              </span>
            </button>

            <button className="btn-secondary" >
              Book A Demo
              <FiArrowRight className="arrow2" />
            </button>
          </div>

         
        </div>

       <div className="hero-image">
  {/* Spiral Background */}
  <img src={spiral} alt="Spiral Background" className="spiral-bg" />

  {/* iPad Mockup */}
  <img src={ipadMockup} alt="iPad CRM Dashboard" className="ipad" />

  {/* Floating Badges */}
  <img src={badge1} alt="WhatsApp" className="badge badge1" />
  <img src={badge2} alt="Task Auto Allocation" className="badge badge2" />
  <img src={badge3} alt="Lead Score" className="badge badge3" />
  <img src={badge4} alt="AI Marketing" className="badge badge4" />
  <img src={badge5} alt="AI Support" className="badge badge5" />
  <img src={badge6} alt="Workflows" className="badge badge6" />
  <img src={badge7} alt="AI Chatbot" className="badge badge7" />
</div>
      
<div className="hero-bottom">
  <div className="trusted">
    <div className="trusted-top">
      <div className="logos overlap-logos">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968299.png" alt="Google"/>
        <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" alt="Microsoft"/>
        <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="Apple"/>
      </div>
      <p className="trusted-text">
        Trusted by <strong>3K+ companies</strong><br/> around the world
      </p>
    </div>

    <div className="rating">
      <FaStar className="star-icon" />
      <span className="rating-score">4.9</span>
      <p>Based on 200+ reviews</p>
    </div>
  </div>
</div>

</div>

    </section>
  );
};

export default HeroSection;

