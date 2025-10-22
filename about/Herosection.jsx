"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import "../Styles/HeroSection.css";

import ipadMockup from "../public/images/Tab.png";
import badge1 from "../public/images/badge1.svg";
import badge2 from "../public/images/badge2.svg";
import badge3 from "../public/images/badge3.svg";
import badge4 from "../public/images/badge4.svg";
import badge5 from "../public/images/badge5.svg";
import badge6 from "../public/images/badge6.svg";
import badge7 from "../public/images/badge7.svg";
import spiral from "../public/images/herosection-bg.png";

export default function HeroSection() {
  const TrustedSection = () => (
    <div className="hero-bottom">
      <div className="trusted">
        <div className="trusted-top">
          <div className="logos overlap-logos">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5968/5968299.png"
              alt="Google"
              width={40}
              height={40}
            />
            <Image
              src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
              alt="Microsoft"
              width={40}
              height={40}
            />
            <Image
              src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
              alt="Apple"
              width={40}
              height={40}
            />
          </div>
          <p className="trusted-text">
            Trusted by <strong>3K+ companies</strong>
            <br /> around the world
          </p>
        </div>

        <div className="rating">
          <FaStar className="star-icon" />
          <span className="rating-score">4.9</span>
          <p>Based on 200+ reviews</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Smart <strong className="highlightH">CRM</strong>
            <br /> For Smarter <br /> Businesses
          </h1>
          <p>
            Converro helps you capture, organize, and convert leads effortlessly
            so you can focus on closing deals and scaling your business, not
            managing complexity.
          </p>

          {/* Mobile only trusted */}
          <div className="mobile-only">
            <TrustedSection />
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() =>
                (window.location.href = "https://app.converro.online/register")
              }
            >
              Start Free Trial
              <span
                className="arrow-circle"
                onClick={() =>
                  (window.location.href = "https://app.converro.online/register")
                }
              >
                <FiArrowRight className="arrow" />
              </span>
            </button>
          </div>
        </div>

        <div className="hero-image">
          {/* Spiral Background */}
          <Image
            src={spiral}
            alt="Spiral Background"
            className="spiral-bg"
            priority
          />

          {/* iPad Mockup */}
          <Image
            src={ipadMockup}
            alt="iPad CRM Dashboard"
            className="ipad"
            priority
          />

          {/* Floating Badges */}
          <Image src={badge1} alt="WhatsApp" className="badge badge1" />
          <Image src={badge2} alt="Task Auto Allocation" className="badge badge2" />
          <Image src={badge3} alt="Lead Score" className="badge badge3" />
          <Image src={badge4} alt="AI Marketing" className="badge badge4" />
          <Image src={badge5} alt="AI Support" className="badge badge5" />
          <Image src={badge6} alt="Workflows" className="badge badge6" />
          <Image src={badge7} alt="AI Chatbot" className="badge badge7" />
        </div>

        {/* Desktop trusted */}
        <div className="desktop-only">
          <TrustedSection />
        </div>
      </div>
    </section>
  );
}
