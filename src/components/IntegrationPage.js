import React from "react";
import "./IntegrationPage.css";
import Navbar from "./Navbar";
import CTA from "./CTA";
import Footer from "./Footer";

const integrations = [
  {
    name: "Facebook",
    desc: "ConnectFlow is a powerful collaboration platform that facilitates effective communication.",
    icon: "🌐",
  },
  {
    name: "Instagram",
    desc: "SyncHubX is a comprehensive team collaboration platform that enhances communication and simplifies.",
    icon: "🔗",
  },
  {
    name: "UniConnect",
    desc: "UniConnect is a versatile collaboration platform that strengthens team communication and streamlines.",
    icon: "⭕",
    // highlight: true,
  },
  {
    name: "ChainNexus",
    desc: "ChainNexus is a powerful collaboration platform that optimizes communication and file sharing for enhanced.",
    icon: "🔄",
  },
  {
    name: "BridgeAI",
    desc: "BridgeAI is a cutting-edge collaboration platform that enhances communication and facilitates smooth file sharing.",
    icon: "🤖",
  },
  {
    name: "FlowSyncer",
    desc: "FlowSyncer is a robust team collaboration platform that simplifies communication and file sharing.",
    icon: "📡",
  },
  {
    name: "ZapLinker",
    desc: "ZapLinker is an advanced collaboration platform that fosters effective communication and enhances.",
    icon: "⚡",
  },
  {
    name: "Integr8r",
    desc: "Integr8r is an innovative team collaboration platform that empowers seamless communication.",
    icon: "🔌",
  },
  {
    name: "FuseMatrix",
    desc: "FuseMatrix is a dynamic team collaboration platform designed to enhance communication.",
    icon: "💠",
  },
];

const Integrations = () => {
  return (
    <>
    <Navbar/>
    <section className="integrations-section">
  <div className="integrations-container">
    <h2 className="integrations-title">Integrations</h2>
    <p className="integrations-subtitle">
      Our platform seamlessly integrates with the tools your team already uses
      — from CRMs and email clients.
    </p>

    <div className="integrations-grid">
      {integrations.map((item, index) => (
        <div
          key={index}
          className={`integration-card ${item.highlight ? "highlight" : ""}`}
        >
          <div className="icon">{item.icon}</div>
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<CTA/>
<Footer/>
</>
  );
};

export default Integrations;
