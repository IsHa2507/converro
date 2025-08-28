import React from "react";
import "./Integrations.css";
import { FaSlack, FaFigma, FaGoogle, FaTrello, FaFacebook, FaTwitter } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Integrations = () => {
  const integrations = [
    { name: "Slack", icon: <FaSlack />, color: "#4A154B" },
    { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
    { name: "Google", icon: <FaGoogle />, color: "#4285F4" },
    { name: "Trello", icon: <FaTrello />, color: "#0079BF" },
    { name: "Facebook", icon: <FaFacebook />, color: "#1877F2" },
    { name: "Twitter", icon: <FaTwitter />, color: "#1DA1F2" },
  ];

  return (
    <section className="orbit-section">
      {/* Left Content */}
      <div className="orbit-content">
        <h2>
          Explore <span>Integrations</span>
        </h2>
        <p>
          Our integrations make it easy to work with the applications your team
          already loves.
        </p>
        <button className="orbit-btn">
          Start For Free
          <FiArrowRight className="integrations-arrow" />
        </button>
      </div>

      {/* Orbit Center & Icons */}
      <div className="orbit-wrapper">
        <div className="orbit-center">
          <img src="/Fav.svg" alt="Logo" className="orbit-image" />
        </div>

        {/* Rings */}
        <div className="orbit-ring ring-1"></div>
        <div className="orbit-ring ring-2"></div>
        <div className="orbit-ring ring-3"></div>
        <div className="orbit-ring ring-4"></div>

        {/* Orbiting Icons */}
        <div className="orbit-icons">
          {integrations.map((item, i) => (
            <div
              key={i}
              className={`orbit-icon orbit-${i + 1}`}
              style={{
                "--orbit-color": item.color,
                "--orbit-radius": `${80 + i * 40}px`, // different radius per icon
                "--orbit-speed": `${6 + i * 2}s` // different rotation speed
              }}
              title={item.name}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
