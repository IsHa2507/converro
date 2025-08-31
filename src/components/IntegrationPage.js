import React, { useState } from "react";
import "./IntegrationPage.css";
import Navbar from "./Navbar";
import CTA from "./CTA";
import Footer from "./Footer";
import { FaExclamationTriangle } from "react-icons/fa";



const integrations = [
  {
    name: "Facebook",
    desc: "Trigger WhatsApp message with Facebook Lead Ads directly from",
    badgeI: "free",
  },
  {
    name: "Instagram",
    desc: "Sync leads directly to a marketing automation or CRM system.",
    
    badgeI: "free",
  },
  {
    name: "Google Ads Leads",
    desc: "Google Ads Leads: Captures leads with ease, streamlining data collection.",
    icon: "⭕",
    badgeI: "pro",
  },
  {
    name: "IndiaMART",
    desc: "IndiaMART Leads: Gather inquiries and leads for business growth.",
    icon: "🔄",
    badgeI: "pro",
  },
  {
    name: "Google Forms",
    desc: "Google Forms: Create surveys, quizzes, and forms easily.",
    icon: "🤖",
    badgeI: "pro",
  },
  {
    name: "ClickFunnels ",
    desc: "ClickFunnels: Build sales funnels and landing pages efficiently.",
    icon: "📡",
    badgeI: "pro",
  },
  {
    name: "Pabbly ",
    desc: "Pabbly Forms: Simplifies form creation, automates data collection effortlessly.",
    icon: "⚡",
    badgeI: "pro",
  },
  {
    name: "Wix ",
    desc: "Wix Forms: Easy way to create and customize forms for your website.",
    icon: "🔌",
    badgeI: "pro",
  },
  {
    name: "Webhooks",
    desc: "Webhooks: Automate data exchange between applications.",
    icon: "💠",
    badgeI: "pro",
  },
  {
    name: "99acres",
    desc: "Real estate property fetch leads directly in dashboard.",
    icon: "💠",
    badgeI: "pro",
  },
  {
    name: "MagicBricks",
    desc: "MagicBricks property fetch leads directly in dashboard.",
    icon: "💠",
    badgeI: "pro",
  },
  {
    name: "Housing",
    desc: "Housing property fetch leads directly in dashboard.",
    icon: "💠",
    badgeI: "pro",
  },
  {
    name: "WordPress",
    desc: "Create and manage websites easily, connect plugin and fetch leads.",
    icon: "💠",
    badgeI: "pro",
  },
  {
    name: "Sulekha",
    desc: "Sulekha Leads: Connects users with service providers, get buyer leads.",
    icon: "💠",
    badgeI: "pro",
  },
  {
    name: "Import Clients from CSV ",
    desc: "Import Clients from CSV: Simplify data migration..",
    icon: "💠",
    badgeI: "free",
  },
  {
    name: "Tawk.to Live Chat",
    desc: "A truly customizable live chat and sync customer data in CRM.",
    icon: "💠",
    badgeI: "pro",
  },
  {
    name: "TradeIndia",
    desc: "Expand business with qualified leads from allover India.",
    icon: "💠",
    badgeI: "pro",
  },
  {
    name: "Website",
    desc: "You can connect your website with CRM to fetch leads in dashboard.",
    icon: "💠",
    badgeI: "pro",
  },
  {
    name: "FlexiFunnel",
    desc: "FlexiFunnels is a cost-effective, all-in-one tool for growing an online business.",
    icon: "💠",
    badgeI: "pro",
  },
  {
    name: "JustDial",
    desc: "JustDial one of the popular lead engine in India, fetch leads smartly.",
    icon: "💠",
    badgeI: "business",
  },
  {
    name: "TikTok",
    desc: "Connect your TikTok account to fetch leads from ads.",
    icon: "💠",
    badgeI: "pro",
  },
  {
    name: "WhatsApp Business API",
    desc: "Connect WhatsApp API to fetch/tag leads in your dashboard.",
    icon: "💠",
    badgeI: "pro",
  },
  {
    name: "Calendly",
    desc: "Connect Calendly to fetch leads in your dashboard from Calendly forms.",
    icon: "💠",
    badgeI: "business",
  },
  {
    name: "MyOperator",
    desc: "Connect your MyOperator to get customer details directly sync with CRM.",
    icon: "💠",
    badgeI: "business",
  },
  {
    name: "CallerDesk",
    desc: "CallerDesk is a cloud telephony company providing voice communication.",
    icon: "💠",
    badgeI: "business",
  },
  {
    name: "CallHippo",
    desc: "CallHippo is a cloud telephony company providing voice communication.",
    icon: "💠",
    badgeI: "business",
  },
  {
    name: "Callyzer",
    desc: "Callyzer is a cloud telephony company providing voice communication.",
    icon: "💠",
    badgeI: "business",
  },
  {
    name: "Servetel",
    desc: "Servetel is a cloud telephony company providing voice communication.",
    icon: "💠",
    badgeI: "business",
  },
  {
    name: "Exotel",
    desc: "Exotel is a cloud telephony company providing voice communication.",
    icon: "💠",
    badgeI: "business",
  },
  {
    name: "TeleCMI",
    desc: "AI- powered IVR Calling System, Improve efficiency, boost customer satisfaction.",
    icon: "💠",
    badgeI: "business",
  },
  {
    name: "Knowlarity",
    desc: "Knowlarity is the largest provider of cloud based communications solutions.",
    icon: "💠",
    badgeI: "business",
  },
  {
    name: "Voxbay",
    desc: "Voxbay is the most popular desktop cloud based IVR communications solutions.",
    icon: "💠",
    badgeI: "business",
  },
  {
    name: "Dexotel ",
    desc: "Dexotel is a leading provider of cloud-based communication solutions.",
    icon: "💠",
    badgeI: "business",
  },
  {
    name: "Google Sheet",
    desc: "Seamlessly sync leads between Google Sheets and CRM with direct automation.",
    icon: "💠",
    badgeI: "free",
  },
  {
    name: "Zintlr",
    desc: "Effortlessly generate high-quality B2B leads with Zintlr.",
    icon: "💠",
    badgeI: "business",
  },
  {
    name: "Petpooja",
    desc: "Integrate Petpooja for automatic customer detail sync with your CRM.",
    icon: "💠",
    badgeI: "business",
  },
  {
    name: "Acefone",
    desc: "Power packed cloud based dialers to streamline customer interactions.",
    icon: "💠",
    badgeI: "business",
  },
  {
    name: "Callgear",
    desc: "CallGear is a cloud-based solution that works with stable internet connection.",
    icon: "💠",
    badgeI: "business",
  },
  {
    name: "Dubizzle",
    desc: "Dubizzle is the largest general classifieds platform in MENA.",
    icon: "💠",
    badgeI: "business",
  },
  {
    name: "Property Finder",
    desc: "Explore new projects in the UAE, most trusted property search app.",
    icon: "💠",
    badgeI: "business",
  },
  {
    name: "Bayut",
    desc: "Browse the largest inventory of residential properties in UAE.",
    icon: "💠",
    badgeI: "business",
  },
  {
    name: "Zapier",
    desc: "Zapier is secure automation that sticks with multiple workflows.",
    icon: "💠",
    badgeI: "business",
  },
];

const Integrations = () => {
  const [visible, setVisible] = useState(true);

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
      <div className="icon">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="integration-header">
  <h3>{item.name}</h3>
  {item.badgeI && (
    <span className={`badgeI ${item.badgeI}`}>
      {item.badgeI === "pro" && "Pro"}
      {item.badgeI === "business" && "Business"}
      {item.badgeI === "free" && "Free"}
    </span>
  )}
</div>

      <p>{item.desc}</p>
    </div>
  ))}
</div>

  </div>
</section>
<section className="alert-section">
      <div className="alert-box">
        <FaExclamationTriangle className="alert-icon" />
        <p className="alert-text">
          <strong>Can’t find your integration in the list above?</strong><br/> Don’t
          worry— we’ll set it up for you at no cost. Connect with our consultants
          to get started.
        </p>

        <div className="alert-actions">
          <a href="/contact" className="alert-btn">
            Contact Us
          </a>
          <button className="alert-close" onClick={() => setVisible(false)}>
            
          </button>
        </div>
      </div>
    </section>
<CTA/>
<Footer/>
</>
  );
};

export default Integrations;
