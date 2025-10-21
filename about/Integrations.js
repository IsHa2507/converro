import React from "react";
import "./Integrations.css";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Integrations = () => {
  const integrations = [
    { name: "Webhooks", icon: require("../integrationimages/magicbricks.png"), color: "#3fce71" },
    { name: "Housing", icon: require("../integrationimages/indiamart.png"), color: "#3fce71" },
    { name: "Google Ads", icon: require("../integrationimages/gads.png"), color: "#3fce71" },
    { name: "Dubizell", icon: require("../integrationimages/justdail.png"), color: "#3fce71" },
    { name: "Facebook", icon: require("../integrationimages/wordpress.png"), color: "#3fce71" },
    { name: "Zapier", icon: require("../integrationimages/zapeir.png"), color: "#3fce71" },
    { name: "Bayut", icon: require("../integrationimages/propertyfinder.png"), color: "#3fce71" },
    { name: "Google Sheets", icon: require("../integrationimages/99.png"), color: "#3fce71" },
    { name: "WhatsApp", icon: require("../integrationimages/whatsapp.png"), color: "#3fce71" },
  ];

  const navigate = useNavigate();

  return (
    <section className="orbit-section">
      {/* Left Content */}
      <div className="orbit-content">
        <h2>
          Seamless<span> Connections</span>, Endless Possibilities
        </h2>
        <p>
         Converro integrates with your favorite apps ads, email, messaging, and productivity tools so your team can capture leads, communicate, and collaborate without switching platforms.
        </p>
        <button
          className="orbit-btn"
          onClick={() => navigate("/integrationpage")}
        >
          Explore
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
                "--orbit-radius": `${80 + i * 40}px`,
                "--orbit-speed": `${6 + i * 2}s`,
              }}
              title={item.name}
            >
              <img src={item.icon} alt={item.name} className="orbit-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
