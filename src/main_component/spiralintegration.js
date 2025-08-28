import React from "react";
import "../main_component/spiralintegration.css";
import { FaSlack, FaFigma, FaGoogle, FaTrello, FaFacebook, FaTwitter } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

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
      <div className="orbit-content">
        <h2>
          Explore <span>Integrations</span>
        </h2>
        <p>Our integrations make it easy to work with the applications your team already loves.</p>
        <button className="orbit-btn">Learn More →</button>
      </div>

      <div className="orbit-wrapper">
        <div className="orbit-center">Z</div>
        <div className="orbit-ring">
          {integrations.map((item, i) => (
            <div
              key={i}
              className={`orbit-icon orbit-${i + 1}`}
              style={{ "--orbit-color": item.color }}
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
