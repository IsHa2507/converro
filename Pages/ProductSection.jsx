"use client";

import React from "react";
import Image from "next/image";
import "../Pages/ProductSection.css"; // adjust path

import { FaArrowRight } from "react-icons/fa";
import ProductFeatures from "../about/ProductFeatures";
import FAQs from "../Components/FAQs";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";

// Import your hero image (replace path)
import heroLaptop from "../public/images/hero-laptop.png";

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

            <button
              className="herop-cta"
              onClick={() =>
                (window.location.href = "https://app.converro.online/register")
              }
            >
              Start For Free
              <FaArrowRight className="ctap-icon" />
            </button>

            <p className="herop-trust">
              Trusted by <strong>3K+ companies</strong> around the world
            </p>
          </div>

          {/* Right Image */}
          <div className="herop-image">
            <Image
              src={heroLaptop}
              alt="GrowthFlow Dashboard Preview"
              width={600} // adjust size
              height={400} // adjust size
              priority
            />
          </div>
        </div>
      </section>

      <ProductFeatures />
      <FAQs />
      <CTA />
      <Footer />
    </>
  );
}
