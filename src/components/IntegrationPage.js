import React from "react";
import "./IntegrationPage.css";
import Navbar from "./Navbar";
import CTA from "./CTA";
import Footer from "./Footer";

const integrations = [
  {
    name: "Facebook",
    desc: "Trigger WhatsApp message with Facebook Lead Ads directly from",
    icon: "🌐",
  },
  {
    name: "Instagram",
    desc: "Sync leads directly to a marketing automation or CRM system.",
    icon: "🔗",
  },
  {
    name: "Google Ads Leads",
    desc: "Google Ads Leads: Captures leads with ease, streamlining data collection.",
    icon: "⭕",
    // highlight: true,
  },
  {
    name: "IndiaMART",
    desc: "IndiaMART Leads: Gather inquiries and leads for business growth.",
    icon: "🔄",
  },
  {
    name: "Google Forms",
    desc: "Google Forms: Create surveys, quizzes, and forms easily.",
    icon: "🤖",
  },
  {
    name: "ClickFunnels ",
    desc: "ClickFunnels: Build sales funnels and landing pages efficiently.",
    icon: "📡",
  },
  {
    name: "Pabbly ",
    desc: "Pabbly Forms: Simplifies form creation, automates data collection effortlessly.",
    icon: "⚡",
  },
  {
    name: "Wix ",
    desc: "Wix Forms: Easy way to create and customize forms for your website.",
    icon: "🔌",
  },
  {
    name: "Webhooks",
    desc: "Webhooks: Automate data exchange between applications.",
    icon: "💠",
  },
  {
    name: "99acres",
    desc: "Real estate property fetch leads directly in dashboard.",
    icon: "💠",
  },
  {
    name: "MagicBricks",
    desc: "MagicBricks property fetch leads directly in dashboard.",
    icon: "💠",
  },
  {
    name: "Housing",
    desc: "Housing property fetch leads directly in dashboard.",
    icon: "💠",
  },
  {
    name: "WordPress",
    desc: "Create and manage websites easily, connect plugin and fetch leads.",
    icon: "💠",
  },
  {
    name: "Sulekha",
    desc: "Sulekha Leads: Connects users with service providers, get buyer leads.",
    icon: "💠",
  },
  {
    name: "Import Clients from CSV ",
    desc: "Import Clients from CSV: Simplify data migration..",
    icon: "💠",
  },
  {
    name: "Tawk.to Live Chat",
    desc: "A truly customizable live chat and sync customer data in CRM.",
    icon: "💠",
  },
  {
    name: "TradeIndia",
    desc: "Expand business with qualified leads from allover India.",
    icon: "💠",
  },
  {
    name: "Website",
    desc: "You can connect your website with CRM to fetch leads in dashboard.",
    icon: "💠",
  },
  {
    name: "FlexiFunnel",
    desc: "FlexiFunnels is a cost-effective, all-in-one tool for growing an online business.",
    icon: "💠",
  },
  {
    name: "JustDial",
    desc: "JustDial one of the popular lead engine in India, fetch leads smartly.",
    icon: "💠",
  },
  {
    name: "TikTok",
    desc: "Connect your TikTok account to fetch leads from ads.",
    icon: "💠",
  },
  {
    name: "WhatsApp Business API",
    desc: "Connect WhatsApp API to fetch/tag leads in your dashboard.",
    icon: "💠",
  },
  {
    name: "Calendly",
    desc: "Connect Calendly to fetch leads in your dashboard from Calendly forms.",
    icon: "💠",
  },
  {
    name: "MyOperator",
    desc: "Connect your MyOperator to get customer details directly sync with CRM.",
    icon: "💠",
  },
  {
    name: "CallerDesk",
    desc: "CallerDesk is a cloud telephony company providing voice communication.",
    icon: "💠",
  },
  {
    name: "CallHippo",
    desc: "CallHippo is a cloud telephony company providing voice communication.",
    icon: "💠",
  },
  {
    name: "Callyzer",
    desc: "Callyzer is a cloud telephony company providing voice communication.",
    icon: "💠",
  },
  {
    name: "Servetel",
    desc: "Servetel is a cloud telephony company providing voice communication.",
    icon: "💠",
  },
  {
    name: "Exotel",
    desc: "Exotel is a cloud telephony company providing voice communication.",
    icon: "💠",
  },
  {
    name: "TeleCMIs",
    desc: "AI- powered IVR Calling System, Improve efficiency, boost customer satisfaction.",
    icon: "💠",
  },
  {
    name: "Knowlarity",
    desc: "Knowlarity is the largest provider of cloud based communications solutions.",
    icon: "💠",
  },
  {
    name: "Voxbay",
    desc: "Voxbay is the most popular desktop cloud based IVR communications solutions.",
    icon: "💠",
  },
  {
    name: "Dexotel ",
    desc: "Dexotel is a leading provider of cloud-based communication solutions.",
    icon: "💠",
  },
  {
    name: "Google Sheet",
    desc: "Seamlessly sync leads between Google Sheets and CRM with direct automation.",
    icon: "💠",
  },
  {
    name: "Zintlr",
    desc: "Effortlessly generate high-quality B2B leads with Zintlr.",
    icon: "💠",
  },
  {
    name: "Petpooja",
    desc: "Integrate Petpooja for automatic customer detail sync with your CRM.",
    icon: "💠",
  },
  {
    name: "Acefone",
    desc: "Power packed cloud based dialers to streamline customer interactions.",
    icon: "💠",
  },
  {
    name: "Callgear",
    desc: "CallGear is a cloud-based solution that works with stable internet connection.",
    icon: "💠",
  },
  {
    name: "Dubizzle",
    desc: "Dubizzle is the largest general classifieds platform in MENA.",
    icon: "💠",
  },
  {
    name: "Property Finder",
    desc: "Explore new projects in the UAE, most trusted property search app.",
    icon: "💠",
  },
  {
    name: "Bayut",
    desc: "Browse the largest inventory of residential properties in UAE.",
    icon: "💠",
  },
  {
    name: "Zapier",
    desc: "Zapier is secure automation that sticks with multiple workflows.",
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
