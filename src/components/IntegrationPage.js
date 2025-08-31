import React, { useState } from "react";
import "./IntegrationPage.css";
import Navbar from "./Navbar";
import CTA from "./CTA";
import Footer from "./Footer";
import { FaExclamationTriangle } from "react-icons/fa";
//images of company
import imgi1 from "../integrationimages/facebook.png";
import imgi2 from "../integrationimages/insta.png";
import imgi3 from "../integrationimages/gads.png";
import imgi4 from "../integrationimages/indiamart.png";
import imgi5 from "../integrationimages/gforms.png";
import imgi6 from "../integrationimages/clickfunnels.png";
import imgi7 from "../integrationimages/pabbley.png";
import imgi8 from "../integrationimages/wix.png";
import imgi9 from "../integrationimages/99.png";
import imgi10 from "../integrationimages/magicbricks.png";
import imgi11 from "../integrationimages/housing.png";
import imgi12 from "../integrationimages/wordpress.png";
import imgi13 from "../integrationimages/sulekha.png";
import imgi14 from "../integrationimages/csv.png";
import imgi15 from "../integrationimages/twak.png";
import imgi16 from "../integrationimages/tradeindia.png";
import imgi17 from "../integrationimages/website.png";
import imgi18 from "../integrationimages/flexifunnel.png";
import imgi19 from "../integrationimages/justdail.png";
import imgi20 from "../integrationimages/tiktok.png";
import imgi21 from "../integrationimages/whatsapp.png";
import imgi22 from "../integrationimages/callendly.png";
import imgi23 from "../integrationimages/myoprator.png";
import imgi24 from "../integrationimages/caller desk.png";
import imgi25 from "../integrationimages/callhippo.png";
import imgi26 from "../integrationimages/callyzer.png";
import imgi27 from "../integrationimages/servtel.png";
import imgi28 from "../integrationimages/exotel.png";
import imgi29 from "../integrationimages/telicmi.png";
import imgi30 from "../integrationimages/knowlarity.png";
import imgi31 from "../integrationimages/voxbay.png";
import imgi32 from "../integrationimages/dexotel.png";
import imgi33 from "../integrationimages/gsheet.png";
import imgi34 from "../integrationimages/zlinter.png";
import imgi35 from "../integrationimages/petpooja.png";
import imgi36 from "../integrationimages/acefone.png";
import imgi37 from "../integrationimages/callgear.png";
import imgi38 from "../integrationimages/dubizell.png";
import imgi39 from "../integrationimages/propertyfinder.png";
import imgi40 from "../integrationimages/bayut.png";
import imgi41 from "../integrationimages/zapeir.png";
import imgi42 from "../integrationimages/webhooks.png";
const integrations = [
  {
    name: "Facebook",
    desc: "Trigger WhatsApp message with Facebook Lead Ads directly from",
     imageI: imgi1,
    badgeI: "free",
  },
  {
    name: "Instagram",
    desc: "Sync leads directly to a marketing automation or CRM system.",
    imageI: imgi2,
    badgeI: "free",
  },
  {
    name: "Google Ads Leads",
    desc: "Google Ads Leads: Captures leads with ease, streamlining data collection.",
    imageI: imgi3,
    badgeI: "pro",
  },
  {
    name: "IndiaMART",
    desc: "IndiaMART Leads: Gather inquiries and leads for business growth.",
    imageI: imgi4,
    badgeI: "pro",
  },
  {
    name: "Google Forms",
    desc: "Google Forms: Create surveys, quizzes, and forms easily.",
    imageI: imgi5,
    badgeI: "pro",
  },
  {
    name: "ClickFunnels ",
    desc: "ClickFunnels: Build sales funnels and landing pages efficiently.",
    imageI: imgi6,
    badgeI: "pro",
  },
  {
    name: "Pabbly ",
    desc: "Pabbly Forms: Simplifies form creation, automates data collection effortlessly.",
    imageI: imgi7,
    badgeI: "pro",
  },
  {
    name: "Wix ",
    desc: "Wix Forms: Easy way to create and customize forms for your website.",
    imageI: imgi8,
    badgeI: "pro",
  },
  {
    name: "Webhooks",
    desc: "Webhooks: Automate data exchange between applications.",
   imageI: imgi42,
    badgeI: "pro",
  },
  {
    name: "99acres",
    desc: "Real estate property fetch leads directly in dashboard.",
    imageI: imgi9,
    badgeI: "pro",
  },
  {
    name: "MagicBricks",
    desc: "MagicBricks property fetch leads directly in dashboard.",
    imageI: imgi10,
    badgeI: "pro",
  },
  {
    name: "Housing",
    desc: "Housing property fetch leads directly in dashboard.",
    imageI: imgi11,
    badgeI: "pro",
  },
  {
    name: "WordPress",
    desc: "Create and manage websites easily, connect plugin and fetch leads.",
    imageI: imgi12,
    badgeI: "pro",
  },
  {
    name: "Sulekha",
    desc: "Sulekha Leads: Connects users with service providers, get buyer leads.",
    imageI: imgi13,
    badgeI: "pro",
  },
  {
    name: "Import Clients from CSV ",
    desc: "Import Clients from CSV: Simplify data migration..",
    imageI: imgi14,
    badgeI: "free",
  },
  {
    name: "Tawk.to Live Chat",
    desc: "A truly customizable live chat and sync customer data in CRM.",
    imageI: imgi15,
    badgeI: "pro",
  },
  {
    name: "TradeIndia",
    desc: "Expand business with qualified leads from allover India.",
   imageI: imgi16,
    badgeI: "pro",
  },
  {
    name: "Website",
    desc: "You can connect your website with CRM to fetch leads in dashboard.",
    imageI: imgi17,
    badgeI: "pro",
  },
  {
    name: "FlexiFunnel",
    desc: "FlexiFunnels is a cost-effective, all-in-one tool for growing an online business.",
   imageI: imgi18,
    badgeI: "pro",
  },
  {
    name: "JustDial",
    desc: "JustDial one of the popular lead engine in India, fetch leads smartly.",
    imageI: imgi19,
    badgeI: "business",
  },
  {
    name: "TikTok",
    desc: "Connect your TikTok account to fetch leads from ads.",
    imageI: imgi20,
    badgeI: "pro",
  },
  {
    name: "WhatsApp Business API",
    desc: "Connect WhatsApp API to fetch/tag leads in your dashboard.",
    imageI: imgi21,
    badgeI: "pro",
  },
  {
    name: "Calendly",
    desc: "Connect Calendly to fetch leads in your dashboard from Calendly forms.",
    imageI: imgi22,
    badgeI: "business",
  },
  {
    name: "MyOperator",
    desc: "Connect your MyOperator to get customer details directly sync with CRM.",
    imageI: imgi23,
    badgeI: "business",
  },
  {
    name: "CallerDesk",
    desc: "CallerDesk is a cloud telephony company providing voice communication.",
    imageI: imgi24,
    badgeI: "business",
  },
  {
    name: "CallHippo",
    desc: "CallHippo is a cloud telephony company providing voice communication.",
    imageI: imgi25,
    badgeI: "business",
  },
  {
    name: "Callyzer",
    desc: "Callyzer is a cloud telephony company providing voice communication.",
    imageI: imgi26,
    badgeI: "business",
  },
  {
    name: "Servetel",
    desc: "Servetel is a cloud telephony company providing voice communication.",
    imageI: imgi27,
    badgeI: "business",
  },
  {
    name: "Exotel",
    desc: "Exotel is a cloud telephony company providing voice communication.",
    imageI: imgi28,
    badgeI: "business",
  },
  {
    name: "TeleCMI",
    desc: "AI- powered IVR Calling System, Improve efficiency, boost customer satisfaction.",
    imageI: imgi29,
    badgeI: "business",
  },
  {
    name: "Knowlarity",
    desc: "Knowlarity is the largest provider of cloud based communications solutions.",
    imageI: imgi30,
    badgeI: "business",
  },
  {
    name: "Voxbay",
    desc: "Voxbay is the most popular desktop cloud based IVR communications solutions.",
    imageI: imgi31,
    badgeI: "business",
  },
  {
    name: "Dexotel ",
    desc: "Dexotel is a leading provider of cloud-based communication solutions.",
    imageI: imgi32,
    badgeI: "business",
  },
  {
    name: "Google Sheet",
    desc: "Seamlessly sync leads between Google Sheets and CRM with direct automation.",
    imageI: imgi33,
    badgeI: "free",
  },
  {
    name: "Zintlr",
    desc: "Effortlessly generate high-quality B2B leads with Zintlr.",
    imageI: imgi34,
    badgeI: "business",
  },
  {
    name: "Petpooja",
    desc: "Integrate Petpooja for automatic customer detail sync with your CRM.",
    imageI: imgi35,
    badgeI: "business",
  },
  {
    name: "Acefone",
    desc: "Power packed cloud based dialers to streamline customer interactions.",
    imageI: imgi36,
    badgeI: "business",
  },
  {
    name: "Callgear",
    desc: "CallGear is a cloud-based solution that works with stable internet connection.",
    imageI: imgi37,
    badgeI: "business",
  },
  {
    name: "Dubizzle",
    desc: "Dubizzle is the largest general classifieds platform in MENA.",
    imageI: imgi38,
    badgeI: "business",
  },
  {
    name: "Property Finder",
    desc: "Explore new projects in the UAE, most trusted property search app.",
    imageI: imgi39,
    badgeI: "business",
  },
  {
    name: "Bayut",
    desc: "Browse the largest inventory of residential properties in UAE.",
    imageI: imgi40,
    badgeI: "business",
  },
  {
    name: "Zapier",
    desc: "Zapier is secure automation that sticks with multiple workflows.",
    imageI: imgi41,
    badgeI: "business",
  },
];

const Integrations = () => {
  const [visible, setVisible] = useState(true);

  return (
     <>
      <Navbar />
      <section className="integrations-section">
        <div className="integrations-container">
          <h2 className="integrations-title">Integrations</h2>
          <p className="integrations-subtitle">
            Our platform seamlessly integrates with the tools your team already
            uses — from CRMs and email clients.
          </p>

          <div className="integrations-grid">
            {integrations.map((item, index) => (
              <div
                key={index}
                className={`integration-card ${item.highlight ? "highlight" : ""}`}
              >
                <div className="icon">
                  {item.imageI ? (
                    <img src={item.imageI} alt={item.name} />
                  ) : (
                    <div className="placeholder-icon">{item.name[0]}</div>
                  )}
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

      {visible && (
        <section className="alert-section">
          <div className="alert-box">
            <FaExclamationTriangle className="alert-icon" />
            <p className="alert-text">
              <strong>Can’t find your integration in the list above?</strong>
              <br /> Don’t worry— we’ll set it up for you at no cost. Connect
              with our consultants to get started.
            </p>

            <div className="alert-actions">
              <a href="/contactus" className="alert-btn">
                Contact Us
              </a>
              <button
                className="alert-close"
                onClick={() => setVisible(false)}
              >
                ✕
              </button>
            </div>
          </div>
        </section>
      )}

      <CTA />
      <Footer />
    </>
  );
};

export default Integrations;
