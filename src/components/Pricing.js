import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "./Pricing.css";
import Navbar from "../components/Navbar";
import FAQs from "../components/FAQs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const plans = [
  {
    name: "Pro",
    price: "₹12,999",
    period: "Yearly",
    description: "Automate Sales, Marketing & close more Deals",
    includedFeatures: [
      "Unlimited Lead Management",
      "5 Team Members",
      "Roles & Permissions",
      "WhatsApp Business API",
      "Template Message APIs",
      "Follow-up Reminders",
      "Unlimited Conversation Messages",
      "Send Bulk Broadcasts",
      "Shared Team Inbox",
      "Schedule Messages",
      "All Integrations",
      "SIM-based Call",
      "Automation 360",
      "Meetings & Appointments",
      "Reporting & Analytics",
      "Unlimited Quotes & Invoices",
      "Task Management",
      "Ticket Center",
      "Webhooks",
      "AI-powered chatbots",
      "Mobile Access to CRM",
      "API Integrations",
      "Live Support",
    ],
    excludedFeatures: [
      "Geo Tracking",
      "Custom Request",
      "Green Tick Application",
      "White-label Account",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Business",
    price: "₹19,999",
    period: "Yearly",
    description: "Accelerate growth with innovative solutions.",
    includedFeatures: [
      "Unlimited Lead Management",
      "20 Team Members",
      "Roles & Permissions",
      "WhatsApp Business API",
      "Template Message APIs",
      "Follow-up Reminders",
      "Unlimited Conversation Messages",
      "Send Bulk Broadcasts",
      "Shared Team Inbox",
      "Schedule Messages",
      "All Integrations",
      "SIM-based Call",
      "Automation 360",
      "Meetings & Appointments",
      "Reporting & Analytics",
      "Unlimited Quotes & Invoices",
      "Task Management",
      "Ticket Center",
      "Webhooks",
      "AI-powered chatbots",
      "Mobile Access to CRM",
      "API Integrations",
      "Priority Support",
      "Geo Tracking",
    ],
    excludedFeatures: ["Green Tick Application", "White-label Account"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom Price",
    period: "",
    description: "Build & Organize your Sales Function at your ease.",
    includedFeatures: [
      "Unlimited Lead Management",
      "Requested Team Members",
      "Roles & Permissions",
      "WhatsApp Business API",
      "Template Message APIs",
      "Follow-up Reminders",
      "Unlimited Conversation Messages",
      "Send Bulk Broadcasts",
      "Shared Team Inbox",
      "Schedule Messages",
      "All Integrations",
      "SIM-based Call",
      "Automation 360",
      "Meetings & Appointments",
      "Reporting & Analytics",
      "Unlimited Quotes & Invoices",
      "Task Management",
      "Ticket Center",
      "Webhooks",
      "AI-powered chatbots",
      "Mobile Access to CRM",
      "API Integrations",
      "Priority Support",
      "Geo Tracking",
      "Green Tick Application",
      "White-label Account",
    ],
    excludedFeatures: [],
    cta: "Contact Sales",
    popular: false,
  },
];

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
            className={billing === "monthly" ? "active" : ""}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            className={billing === "yearly" ? "active" : ""}
            onClick={() => setBilling("yearly")}
          >
            Yearly
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards">
          {plans.map((plan, idx) => (
            <div
  key={idx}
  className={`pricing-card ${plan.popular ? "highlighted" : ""}`}
>
  {plan.popular ? (
    <div className="inner-box">
      <span className="badge">Most Popular</span>
      <h3 className="plan-name">{plan.name}</h3>
      <p className="price">
        {plan.price} <span className="period">{plan.period}</span>
      </p>
      <p className="desc">{plan.description}</p>

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

      <button className="btn">{plan.cta}</button>
    </div>
  ) : (
    <>
      <h3 className="plan-name">{plan.name}</h3>
      <p className="price">
        {plan.price} <span className="period">{plan.period}</span>
      </p>
      <p className="desc">{plan.description}</p>

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

      <button className="btn">{plan.cta}</button>
    </>
  )}
</div>

          ))}
        </div>
      </section>
      <FAQs />
      <CTA />
      <Footer />
    </>
  );
};

export default PricingSection;


