"use client";

import { useState } from "react";
import Image from "next/image";
import { FaExclamationTriangle } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import "../Styles/IntegrationPage.css";

// Images
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
  { name: "Facebook", desc: "Trigger WhatsApp message with Facebook Lead Ads directly from", imageI: imgi1, badgeI: "free" },
  { name: "Instagram", desc: "Sync leads directly to a marketing automation or CRM system.", imageI: imgi2, badgeI: "free" },
  { name: "Google Ads Leads", desc: "Captures leads with ease, streamlining data collection.", imageI: imgi3, badgeI: "pro" },
  { name: "IndiaMART", desc: "Gather inquiries and leads for business growth.", imageI: imgi4, badgeI: "pro" },
  { name: "Google Forms", desc: "Create surveys, quizzes, and forms easily.", imageI: imgi5, badgeI: "pro" },
  { name: "ClickFunnels", desc: "Build sales funnels and landing pages efficiently.", imageI: imgi6, badgeI: "pro" },
  { name: "Pabbly", desc: "Simplifies form creation, automates data collection effortlessly.", imageI: imgi7, badgeI: "pro" },
  { name: "Wix", desc: "Create and customize forms for your website.", imageI: imgi8, badgeI: "pro" },
  { name: "Webhooks", desc: "Automate data exchange between applications.", imageI: imgi42, badgeI: "pro" },
  { name: "99acres", desc: "Real estate property fetch leads directly in dashboard.", imageI: imgi9, badgeI: "pro" },
  { name: "MagicBricks", desc: "Fetch leads directly in dashboard.", imageI: imgi10, badgeI: "pro" },
  { name: "Housing", desc: "Fetch leads directly in dashboard.", imageI: imgi11, badgeI: "pro" },
  { name: "WordPress", desc: "Connect plugin and fetch leads.", imageI: imgi12, badgeI: "pro" },
  { name: "Sulekha", desc: "Get buyer leads easily.", imageI: imgi13, badgeI: "pro" },
  { name: "Import Clients from CSV", desc: "Simplify data migration.", imageI: imgi14, badgeI: "free" },
  { name: "Tawk.to Live Chat", desc: "Sync customer data in CRM.", imageI: imgi15, badgeI: "pro" },
  { name: "TradeIndia", desc: "Expand business with qualified leads.", imageI: imgi16, badgeI: "pro" },
  { name: "Website", desc: "Connect your website with CRM to fetch leads.", imageI: imgi17, badgeI: "pro" },
  { name: "FlexiFunnel", desc: "All-in-one tool for online business.", imageI: imgi18, badgeI: "pro" },
  { name: "JustDial", desc: "Fetch leads smartly.", imageI: imgi19, badgeI: "business" },
  { name: "TikTok", desc: "Fetch leads from ads.", imageI: imgi20, badgeI: "pro" },
  { name: "WhatsApp Business API", desc: "Tag and fetch leads in dashboard.", imageI: imgi21, badgeI: "pro" },
  { name: "Calendly", desc: "Fetch leads from Calendly forms.", imageI: imgi22, badgeI: "business" },
  { name: "MyOperator", desc: "Sync customer details directly.", imageI: imgi23, badgeI: "business" },
  { name: "CallerDesk", desc: "Cloud telephony service.", imageI: imgi24, badgeI: "business" },
  { name: "CallHippo", desc: "Cloud telephony system.", imageI: imgi25, badgeI: "business" },
  { name: "Callyzer", desc: "Cloud telephony platform.", imageI: imgi26, badgeI: "business" },
  { name: "Servetel", desc: "Voice communication system.", imageI: imgi27, badgeI: "business" },
  { name: "Exotel", desc: "Cloud-based calling solution.", imageI: imgi28, badgeI: "business" },
  { name: "TeleCMI", desc: "AI-powered IVR calling system.", imageI: imgi29, badgeI: "business" },
  { name: "Knowlarity", desc: "Cloud-based communication solutions.", imageI: imgi30, badgeI: "business" },
  { name: "Voxbay", desc: "IVR communications solution.", imageI: imgi31, badgeI: "business" },
  { name: "Dexotel", desc: "Cloud-based communication provider.", imageI: imgi32, badgeI: "business" },
  { name: "Google Sheet", desc: "Sync leads between Sheets and CRM.", imageI: imgi33, badgeI: "free" },
  { name: "Zintlr", desc: "Generate high-quality B2B leads.", imageI: imgi34, badgeI: "business" },
  { name: "Petpooja", desc: "Automatic customer detail sync.", imageI: imgi35, badgeI: "business" },
  { name: "Acefone", desc: "Streamline customer interactions.", imageI: imgi36, badgeI: "business" },
  { name: "Callgear", desc: "Cloud-based telephony solution.", imageI: imgi37, badgeI: "business" },
  { name: "Dubizzle", desc: "Largest classifieds platform.", imageI: imgi38, badgeI: "business" },
  { name: "Property Finder", desc: "Trusted property search app.", imageI: imgi39, badgeI: "business" },
  { name: "Bayut", desc: "Inventory of residential properties.", imageI: imgi40, badgeI: "business" },
  { name: "Zapier", desc: "Secure workflow automation.", imageI: imgi41, badgeI: "business" },
];

export default function Integrations() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <Navbar />

      <section className="integrations-section">
        <div className="integrations-container">
          <h2 className="integrations-title">
            More Than <span>100+</span> Integrations
          </h2>
          <p className="integrations-subtitle">
            Our platform seamlessly integrates with the tools your team already
            uses — from CRMs and email clients.
          </p>

          <div className="integrations-grid">
            {integrations.map((item, index) => (
              <div key={index} className="integration-card">
                <div className="icon">
                  {item.imageI ? (
                    <Image src={item.imageI} alt={item.name} />
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
              <br /> Don’t worry — we’ll set it up for you at no cost. Connect
              with our consultants to get started.
            </p>

            <div className="alert-actions">
              <a href="/contactus" className="alert-btn">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      )}

      <CTA />
      <Footer />
    </>
  );
}
