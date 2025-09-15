import React from "react";
import "./ProductSection.css";
// import heroLaptop from "../assets/hero-laptop.png"; // Replace with your actual laptop image

import { FaArrowRight } from "react-icons/fa";
import ProductFeatures from "./ProductFeatures";
import FAQs from "../components/FAQs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function ProductSection() {
  return (
    <>
    <section className="herop">
      <div className="herop-container">
        {/* Left Content */}
        <div className="herop-text">
          <h1>
            Power Your Growth with <br />
            <span className="highlightp">GrowthFlow</span>
          </h1>
          <p className="herop-subtext">
            GrowthFlow helps you manage leads, automate workflows, engage
            customers, and close more deals — all in one AI-powered hub. Our
            features are designed to streamline your business and maximize ROI.
          </p>

          <button className="herop-cta"  onClick={() => (window.location.href = "https://app.converro.online/register")}>
  
            Start For Free
             <FaArrowRight className="ctap-icon" />
          </button>

          <p className="herop-trust">
            Trusted by <strong>3K+ companies</strong> around the world
          </p>
        </div>

        {/* Right Image */}
        <div className="herop-image">
          <img src="#" alt="GrowthFlow Dashboard Preview" />
        </div>
      </div>
      
    </section>
    <ProductFeatures/>
    <FAQs/>
    <CTA/>
    <Footer/>
    </>

  );
}
