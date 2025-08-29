import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import HandshakeImg from "../images/handshake.svg"; // ✅ adjust path to your image
import "./Differentstory.css";

const StorySection = () => {
  const features = [
    {
      title: "Zero Setup Hassle",
      text: [
        "No lengthy onboarding or weeks of training.",
        "Plug in your lead sources and start within minutes.",
      ],
    },
    {
      title: "Instant Automation",
      text: [
        "Automated follow-ups, reminders, and calling without manual effort.",
        "Keep prospects engaged in real-time, 24/7.",
      ],
    },
    {
      title: "Smarter, Not Harder Selling",
      text: [
        "AI-driven insights help teams prioritize leads that truly convert.",
        "Reduce wasted effort and focus only on high-value opportunities.",
      ],
    },
    {
      title: "Designed for Growth",
      text: [
        "Scales effortlessly as your business expands.",
        "Simplifies processes so your team can close more deals, faster.",
      ],
    },
  ];

  return (
    <>
      {/* ✅ Story Section */}
      <section className="story-wrapper">
  <div className="story-container">
    {/* Left Image */}
    <div className="story-image">
      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
        alt="Team working"
      />
    </div>

    {/* Right Content */}
    <div className="story-content">
      <h2 className="story-heading">What Makes Us Different</h2>
      <p className="story-subtext">
        At Converro, we reimagined the CRM experience to eliminate
        complexity and deliver instant value. Here’s how we stand apart:
      </p>

      <div className="story-features">
        {features.map((feature, index) => (
          <div className="story-feature" key={index}>
            <div className="story-feature-top">
              <FaCheckCircle className="story-icon" />
              <h3>{feature.title}</h3>
            </div>
            {/* ✅ loop over feature.text array */}
            {feature.text.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* ✅ Promise Block inside same wrapper */}
  <div className="promise-container">
    <div className="promise-content">
      <h2 className="promise-title">
        Our Promise{" "}
        <img
          src={HandshakeImg}
          alt="Handshake"
          className="promise-image"
        />
      </h2>
      <p className="promise-text">
        We don’t just provide a CRM, we provide a{" "}
        <span className="highlight">“partner”</span> in your business
        growth journey. At Converro, we promise to continuously innovate,
        listen to our users, and deliver tools that amplify sales and
        customer engagement.
      </p>
    </div>
    <button
      className="promise-btn"
      onClick={() =>
        (window.location.href = "https://app.converro.online/register")
      }
    >
      Start For Free
      <FiArrowRight className="promise-arrow" />
    </button>
  </div>
</section>

    </>
  );
};

export default StorySection;



