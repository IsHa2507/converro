import React from "react";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { FaStar } from "react-icons/fa"; // React Star Icon
import "./Home.css";

const Homepage = () => {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-container">
          {/* Top Tag */}
          <button className="intro-btn">Introducing Converro →</button>

          {/* Heading */}
          <h1 className="hero-title">
            Powerful CRM Solutions <br /> for Growing Businesses
          </h1>

          {/* Subheading */}
          <p className="hero-subtitle">
            Streamline your customer relationships with an intuitive CRM platform.
            <br />
            Optimize workflows, and drive business growth with ease.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="btn-dark">Start for Free</button>
          </div>

          {/* Bottom Section */}
<div className="hero-bottom">
  <div className="trusted">
  <div className="logos overlap-logos">
    <img
      src="https://cdn-icons-png.flaticon.com/512/5968/5968299.png"
      alt="Google"
    />
    <img
      src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
      alt="Microsoft"
    />
    <img
      src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
      alt="Slack"
    />
  </div>
  <p>Trusted by 3K+ companies<br/> around the world</p>
</div>

            <div className="reviews">
  <strong className="rating-score">4.9</strong>
  <div className="rating-details">
    <div className="stars">
      <FaStar className="star-icon" />
      <FaStar className="star-icon" />
      <FaStar className="star-icon" />
      <FaStar className="star-icon" />
      <FaStar className="star-icon" />
    </div>
    <p>Based on 200+ reviews</p>
  </div>
</div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
};

export default Homepage;

