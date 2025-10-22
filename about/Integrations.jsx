"use client";
import React from "react";
import "../Styles/Integrations.css";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

import magicbricks from "../public/images/integrationimages/magicbricks.png";
import indiamart from "../public/images/integrationimages/indiamart.png";
import gads from "../public/images/integrationimages/gads.png";
import justdail from "../public/images/integrationimages/justdail.png";
import wordpress from "../public/images/integrationimages/wordpress.png";
import zapeir from "../public/images/integrationimages/zapeir.png";
import propertyfinder from "../public/images/integrationimages/propertyfinder.png";
import ninetynine from "../public/images/integrationimages/99.png";
import whatsapp from "../public/images/integrationimages/whatsapp.png";

const Integrations = () => {
  const router = useRouter();

  const integrations = [
    { name: "Webhooks", icon: magicbricks, color: "#3fce71" },
    { name: "Housing", icon: indiamart, color: "#3fce71" },
    { name: "Google Ads", icon: gads, color: "#3fce71" },
    { name: "Dubizell", icon: justdail, color: "#3fce71" },
    { name: "Facebook", icon: wordpress, color: "#3fce71" },
    { name: "Zapier", icon: zapeir, color: "#3fce71" },
    { name: "Bayut", icon: propertyfinder, color: "#3fce71" },
    { name: "Google Sheets", icon: ninetynine, color: "#3fce71" },
    { name: "WhatsApp", icon: whatsapp, color: "#3fce71" },
  ];

  return (
    <section className="orbit-section">
      {/* Left Content */}
      <div className="orbit-content">
        <h2>
          Seamless<span> Connections</span>, Endless Possibilities
        </h2>
        <p>
          Converro integrates with your favorite apps ads, email, messaging, and
          productivity tools so your team can capture leads, communicate, and
          collaborate without switching platforms.
        </p>
        <button className="orbit-btn" onClick={() => router.push("/integrationpage")}>
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
              <img src={item.icon.src} alt={item.name} className="orbit-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
