import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import "./Differentstory.css";

const StorySection = () => {
  const features = [
    {
      title: " Zero Setup Hassle",
      text: ["No lengthy onboarding or weeks of training.",
        "No lengthy onboarding or weeks of training.",
      ]
    },
    {
      title: "Instant Automation",
      text:[ "Automated follow-ups, reminders, and calling without manual effort.",
        "Keep prospects engaged in real-time, 24/7.",
      ]

    },
    {
      title: "Smarter, Not Harder Selling",
      text:[ "AI-driven insights help teams prioritize leads that truly convert.",
        "Reduce wasted effort and focus only on high-value opportunities.",
      ]
    },
    {
      title: "Designed for Growth",
      text: ["Scales effortlessly as your business expands.",
        "Simplifies processes so your team can close more deals, faster.",

      ]
    },
  ];

  return (
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
            At Converro, we reimagined the CRM experience to eliminate complexity
            and deliver instant value. Here’s how we stand apart:
          </p>

          <div className="story-features">
            {features.map((feature, index) => (
              <div className="story-feature" key={index}>
                <div className="story-feature-top">
                  <FaCheckCircle className="story-icon" />
                  <h3>{feature.title}</h3>
                </div>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ✅ Button outside the box, centered */}
      <div className="story-button-wrapper">
        <button className="story-button"
        onClick={()=>window.location.href="https://app.converro.online/register"}>Start For Free
          <FiArrowRight className="story-arrow"/>
          </button>
      </div>
    </section>
  );
};

export default StorySection;


