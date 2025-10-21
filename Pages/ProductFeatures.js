import React from "react";
import "./ProductFeatures.css";

import sms from "../images/message-notifF.svg";
import email from "../images/EMAILF.svg";
import auto from "../images/AUTOMATIONF.svg";
import whatsapp from "../images/WhatsappF.svg";
import ivr from "../images/IVR SolutionF.svg";
import google from "../images/GOOGLEF.svg";
import calendar from "../images/CALENDERF.svg";
import obd from "../images/OBD CallF.svg";
import analytics from "../images/INVOICEF.svg";

const features = [
  {
    product: "sms-marketing",
    icon: sms,
    title: "SMS Marketing",
    description:
      "Reach customers instantly with targeted SMS campaigns and track results in real time.",
    highlightp: "✅ Perfect for promotions, reminders, and alerts.",
    knowMoreLink: "/products/sms-marketing",
    startFreeLink: "/signup/sms-marketing",
  },
  {
    product: "email-marketing",
    icon: email,
    title: "Email Marketing",
    description:
      "Design, automate, and send high-converting emails with zero coding.",
    highlightp: "✅ Nurture leads, boost engagement, and drive conversions.",
    knowMoreLink: "/products/email-marketing",
    startFreeLink: "/signup/email-marketing",
  },
  {
    product: "automation-360",
    icon: auto,
    title: "Automation 360",
    description:
      "Automate lead assignment, follow-ups, and workflows so you never miss an opportunity.",
    highlightp: "✅ Save hours every week and keep your pipeline moving.",
    knowMoreLink: "/products/automation-360",
    startFreeLink: "/signup/automation-360",
  },
  {
    product: "whatsapp-api",
    icon: whatsapp,
    title: "WhatsApp Business API",
    description:
      "Connect with customers on WhatsApp using automated campaigns and chatbots.",
    highlightp: "✅ Send order updates, catalogs, and instant notifications.",
    knowMoreLink: "/products/whatsapp-api",
    startFreeLink: "/signup/whatsapp-api",
  },
  {
    product: "ivr-solution",
    icon: ivr,
    title: "IVR Solution",
    description:
      "Deliver professional, interactive voice menus that route calls to the right team.",
    highlightp: "✅ Reduce wait times and improve caller experience.",
    knowMoreLink: "/products/ivr-solution",
    startFreeLink: "/signup/ivr-solution",
  },
  {
    product: "google-data-extractor",
    icon: google,
    title: "Google Data Extractor",
    description:
      "Capture leads directly from Google Ads, Search, and Maps into your system.",
    highlightp: "✅ Engage hot leads instantly and boost ROI.",
    knowMoreLink: "/products/google-data-extractor",
    startFreeLink: "/signup/google-data-extractor",
  },
  {
    product: "ai-chatbot",
    icon: calendar,
    title: "AI Chatbot",
    description:
      "Automate customer support with an intelligent AI chatbot available 24/7.",
    highlightp: "✅ Answer FAQs instantly and improve satisfaction.",
    knowMoreLink: "/products/ai-chatbot",
    startFreeLink: "/signup/ai-chatbot",
  },
  {
    product: "analytics-dashboard",
    icon: analytics,
    title: "Analytics Dashboard",
    description:
      "Track performance with real-time analytics and insightful reports.",
    highlightp: "✅ Make data-driven decisions with confidence.",
    knowMoreLink: "/products/analytics-dashboard",
    startFreeLink: "/signup/analytics-dashboard",
  },
  {
    product: "crm-tool",
    icon: obd,
    title: "CRM Tool",
    description:
      "Manage all customer data, leads, and interactions in one place.",
    highlightp: "✅ Boost productivity and close deals faster.",
    knowMoreLink: "/products/crm-tool",
    startFreeLink: "/signup/crm-tool",
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-sectionp">
      <div className="features-wrapperp">
        <h2 className="features-titlep">Features That Drive Results</h2>
        <p className="features-subtitlep">
          From lead generation to customer engagement and billing, our products
          equip you with intelligent features designed to maximize ROI, improve
          collaboration, and keep your pipeline moving.
        </p>

        <div className="features-gridp">
          {features.map((feature) => (
            <div className="feature-cardp" key={feature.product}>
              <img
                src={feature.icon}
                alt={feature.title}
                className="feature-iconp"
                loading="lazy"
              />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <p className="highlightpf">{feature.highlightp}</p>
              <div className="feature-buttonsp">
                <a href={feature.knowMoreLink} className="btn-outlinep">
                  Know More
                </a>
                <a href={feature.startFreeLink} className="btn-primaryp">
                  Start For Free
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
