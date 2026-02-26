import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import sparkle from "../images/star.svg"; 
import "./Pricing.css";
import Navbar from "../components/Navbar";
import FAQs from "../components/FAQs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import AddOns from "./AddOns";

const plans = {
  yearly:[
  {
    name: "Startup",
    texth:"For small team ( 1 Owner + 5 Users )",
    price: "₹ 630",
    period: "₹ 900",
    // text: "+18% GST",
    description: "per month for Single user (billed annually)",
    includedFeatures: [
      "AI-Powered Chatbots",
      "AI Qualification Agent",
      "AI Credit - 1 Million",
      "Lead Management",
      "Team Members",
      "Roles & Permissions",
      "Mobile Access to CRM",
      "WhatsApp Business API",
      "Template Message APIs",
      "Conversation Messages",
      "Multi-Agent Live Chat",
      "Schedule Messages",
      "Broadcasting & Retargeting",
      "Follow-up Reminders",
      "Meetings & Appointments",
      "Invoice & Quotation",
      "Reporting & Analytics",
      "Webhooks",
      "Integrations & Custom Setup",
      "Live Support",
    ],
    excludedFeatures: [
      
       "Sentiment Analysis",
      "API Integrations",
      "SIM-based Call",
      "Task Management",
      "Ticket Center",
      "Geo Tracking",
      "Custom Request",
      "Green Tick Application",
      "White-label Account",

    ],
    cta: "Get Started",
    textb:"Include",
textp:"Everting you get in this plan",
    popular: false,
  },
  {
    name: "Business",
    texth:"For mid size team ( 1 Owner + 20 Users )",
    price: "₹ 490",
    period: "₹ 700",
    // text: "+18% GST",
    description: "per month for Single user (billed annually)",
    includedFeatures: [
       "AI-Powered Chatbots",
      "AI Qualification Agent",
      "AI Credit - 2.5 Million ",
      "Sentiment Analysis",
      "Lead Management",
      "Team Members",
      "Roles & Permissions",
      "Mobile Access to CRM",
      "WhatsApp Business API",
      "Template Message APIs",
      "Conversation Messages",
      "Multi-Agent Live Chat",
      "Schedule Messages",
      "Broadcasting & Retargeting",
      "Follow-up Reminders",
      "Meetings & Appointments",
      "Invoice & Quotation",
      "Reporting & Analytics",
      "Webhooks",
      "Integrations & Custom Setup",
      "Live Support",
      "API Integrations",
      "SIM-based Call",
      "Task Management",
      "Ticket Center",
      "Geo Tracking",
      "Custom Request",
    ],
    excludedFeatures: ["Green Tick Application","White-label Account", ],
    cta: "Get Started",
    textb:"Include",
textp:"Everting you get in this plan",
    popular: true,
  },
  {
    name: "Enterprise",
    texth:"For large team and organization",
    price: "₹ Custom ",
    period: "",
    
    description: "Customise price as per your needs",
    includedFeatures: [
      "AI-Powered Chatbots",
      "AI Qualification Agent",
      "AI Credit - Custom",
      "Sentiment Analysis",
      "Lead Management",
      "Team Members",
      "Roles & Permissions",
      "Task Management",
      "Ticket Center",
      "Geo Tracking",
      "Mobile Access to CRM",
      "WhatsApp Business API",
      "Template Message APIs",
      "Conversation Messages",
      "Multi-Agent Live Chat",
      "Schedule Messages",
      "Broadcasting & Retargeting",
      "Follow-up Reminders",
      "SIM-based Call",
      "Meetings & Appointments",
      "Invoice & Quotation",
      "Reporting & Analytics",
      "Webhooks",
      "API Integrations",
      "Integrations & Custom Setup",
      "Custom Request",
"White-label Account",
"Green Tick Application",

"Live Support",
    ],
    excludedFeatures: [],
    cta: "Contact Sales",
    textb:"Include",
textp:"Everting you get in this plan",
    popular: false,
  },
  ],
  quarterly: [
{
name: "Startup",
    texth:"For small team ( 1 Owner + 5 Users )",
    price: "₹ 900",
    // period: "₹ 450",
    
    description: "per month for Single user (billed annually)",
  includedFeatures: [
      "AI-Powered Chatbots",
      "AI Qualification Agent",
      "AI Credit - 1 Million",
      "Lead Management",
      "Team Members",
      "Roles & Permissions",
      "Mobile Access to CRM",
      "WhatsApp Business API",
      "Template Message APIs",
      "Conversation Messages",
      "Multi-Agent Live Chat",
      "Schedule Messages",
      "Broadcasting & Retargeting",
      "Follow-up Reminders",
      "Meetings & Appointments",
      "Invoice & Quotation",
      "Reporting & Analytics",
      "Webhooks",
      "Integrations & Custom Setup",
      "Live Support",
    ],
    excludedFeatures: [
      
       "Sentiment Analysis",
      "API Integrations",
      "SIM-based Call",
      "Task Management",
      "Ticket Center",
      "Geo Tracking",
      "Custom Request",
      "Green Tick Application",
      "White-label Account",

    ],
cta: "Get Started",
textb:"Include",
textp:"Everting you get in this plan",
popular: false,
},
{
 name: "Business",
    texth:"For mid size team ( 1 Owner + 20 Users )",
    price: "₹ 700",
    // period: "₹ 300",
    // text: "+18% GST",
    description: "per month for Single user (billed annually)",
 includedFeatures: [
       "AI-Powered Chatbots",
      "AI Qualification Agent",
      "AI Credit - 2.5 Million ",
      "Sentiment Analysis",
      "Lead Management",
      "Team Members",
      "Roles & Permissions",
      "Mobile Access to CRM",
      "WhatsApp Business API",
      "Template Message APIs",
      "Conversation Messages",
      "Multi-Agent Live Chat",
      "Schedule Messages",
      "Broadcasting & Retargeting",
      "Follow-up Reminders",
      "Meetings & Appointments",
      "Invoice & Quotation",
      "Reporting & Analytics",
      "Webhooks",
      "Integrations & Custom Setup",
      "Live Support",
      "API Integrations",
      "SIM-based Call",
      "Task Management",
      "Ticket Center",
      "Geo Tracking",
      "Custom Request",
    ],
    excludedFeatures: ["Green Tick Application","White-label Account", ],
cta: "Get Started",
textb:"Include",
textp:"Everting you get in this plan",
popular: true,
},
{
name: "Enterprise",
    texth:"For large team and organization",
    price: "₹ Custom ",
    period: "",
    
    description: "Customise price as per your needs",
includedFeatures: ["AI-Powered Chatbots",
      "AI Qualification Agent",
      "AI Credit - Custom",
      "Sentiment Analysis",
      "Lead Management",
      "Team Members",
      "Roles & Permissions",
      "Task Management",
      "Ticket Center",
      "Geo Tracking",
      "Mobile Access to CRM",
      "WhatsApp Business API",
      "Template Message APIs",
      "Conversation Messages",
      "Multi-Agent Live Chat",
      "Schedule Messages",
      "Broadcasting & Retargeting",
      "Follow-up Reminders",
      "SIM-based Call",
      "Meetings & Appointments",
      "Invoice & Quotation",
      "Reporting & Analytics",
      "Webhooks",
      "API Integrations",
      "Integrations & Custom Setup",
      "Custom Request",
"White-label Account",
"Green Tick Application",

"Live Support",
    ],
excludedFeatures: [],
cta: "Contact Sales",
textb:"Include",
textp:"Everting you get in this plan",
popular: false,
},
],
};

const PricingSection = () => {
  const [billing, setBilling] = useState("yearly");

  return (
    <>
      <Navbar />
      <section className="pricing-section">
        <h2 className="section-title">Designed for Sustainable Growth</h2>
        <p className="section-subtitle">
          Invest in a solution that scales with precision and purpose.
        </p>

       {/* Toggle Button */}
<div className="billing-toggle">


   <button
    className={billing === "quarterly" ? "active" : ""}
    onClick={() => setBilling("quarterly")}
  >
    Quarterly
  </button>
  <button
    className={billing === "yearly" ? "active" : ""}
    onClick={() => setBilling("yearly")}
  >
    Annual <span className="save">(Save 30%)</span>
  </button>
  <span className={`slider ${billing}`}></span>
</div>


        <div className="pricing-cards">
  {plans[billing].map((plan, idx) => (
    <div
      key={idx}
      className={`pricing-card ${plan.popular ? "highlighted" : ""}`}
    >
      {plan.popular ? (
        <div className="inner-box">
          <div className="badgeP">
            <img src={sparkle} alt="sparkle" className="icon" />
            Most Popular
            <img src={sparkle} alt="sparkle" className="icon" />
          </div>

          {/* Plan Name */}
          <h3 className="plan-name">{plan.name}</h3>
          {/* texth below plan name */}
          <p className="plan-subtitle">{plan.texth}</p>

          <p className="price">
            {plan.price}{" "}
            <span className="period">{plan.period}</span>{" "}
          </p>

          <p className="desc">{plan.description}</p>

          <button className="btn">{plan.cta}</button>

          {/* textb and textp after button */}
          <h4 className="include-title">{plan.textb}</h4>
          <p className="include-subtitle">{plan.textp}</p>

          <ul className="features">
            {plan.includedFeatures.map((f, i) => (
              <li key={i} className="available">
                <FaCheckCircle className="icon check" /> {f}
              </li>
            ))}
            {plan.excludedFeatures.map((f, i) => (
              <li key={i} className="unavailable">
                <FaTimesCircle className="icon cross" /> {f}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          {/* Plan Name */}
          <h3 className="plan-name">{plan.name}</h3>
          {/* texth below plan name */}
          <p className="plan-subtitle">{plan.texth}</p>

          <p className="price">
            {plan.price}{" "}
            <span className="period">{plan.period}</span>{" "}
          </p>

          <p className="desc">{plan.description}</p>

          <button className="btn">{plan.cta}</button>

          {/* textb and textp after button */}
          <h4 className="include-title">{plan.textb}</h4>
          <p className="include-subtitle">{plan.textp}</p>

          <ul className="features">
            {plan.includedFeatures.map((f, i) => (
              <li key={i} className="available">
                <FaCheckCircle className="icon check" /> {f}
              </li>
            ))}
            {plan.excludedFeatures.map((f, i) => (
              <li key={i} className="unavailable">
                <FaTimesCircle className="icon cross" /> {f}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  ))}
</div>


      </section>
      <AddOns/>
      <FAQs />
      <CTA />
      <Footer />
    </>
  );
};

export default PricingSection;


