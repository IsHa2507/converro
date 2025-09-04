import React from "react";
import "./SMS_Marketing.css";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import smsHeroImg from "../images/SMS Marketing.svg";

const SMS_Marketing = () => {
  return (
  <>
  <Navbar/>
    <section className="sms-hero">
      <div className="sms-hero-container">
        {/* Left Content */}
        <div className="sms-hero-content">
          <h1>
            Send Instant <br />
            <span className="sms-highlight">Bulk SMS</span> for Business
          </h1>
          <p className="sms-description">
            Bulk SMS service or bulk message means sending SMS to one or more
            recipients via software/API/web platforms such as Wetroo provide
            platform to send online.
          </p>
          <div className="sms-hero-buttons">
            <button className="sms-btn-primary">Try for free</button>
            <button className="sms-btn-secondary">Contact an expert</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="sms-hero-image">
          <img src={smsHeroImg} alt="Bulk SMS" />
        </div>
      </div>
    </section>
    <CTA/>
    <Footer/>
    </>
  );
};

export default SMS_Marketing;
