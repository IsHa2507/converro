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
    texth:"For small team (Min- 5 Users)",
    price: "₹ 315",
    period: "₹ 450",
    // text: "+18% GST",
    description: "per month for Single user (billed annually)",
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
      "White-label Account",
    ],
    excludedFeatures: [
      
      "Geo Tracking",
      "Custom Request",
      "Green Tick Application",
    ],
    cta: "Get Started",
    textb:"Include",
textp:"Everting you get in this plan",
    popular: false,
  },
  {
    name: "Business",
    texth:"For mid size team (Min- 20 Users)",
    price: "₹ 210",
    period: "₹ 300",
    // text: "+18% GST",
    description: "per month for Single user (billed annually)",
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
      "White-label Account"
    ],
    excludedFeatures: ["Green Tick Application", ],
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
    textb:"Include",
textp:"Everting you get in this plan",
    popular: false,
  },
  ],
  quarterly: [
{
name: "Startup",
    texth:"For small team (Min- 5 Users)",
    price: "₹ 450",
    // period: "₹ 450",
    
    description: "per month for Single user (billed annually)",
   includedFeatures: [ "Unlimited Lead Management",
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
      
    ],
excludedFeatures: [
  "Live Support",
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
    texth:"For mid size team (Min- 20 Users)",
    price: "₹ 300",
    // period: "₹ 300",
    // text: "+18% GST",
    description: "per month for Single user (billed annually)",
includedFeatures: ["Unlimited Lead Management",
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
      "Geo Tracking",],
excludedFeatures: ["Green Tick Application", "White-label Account"],
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
includedFeatures: ["Unlimited Lead Management",
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
textb:"Include",
textp:"Everting you get in this plan",
popular: false,
},
],
// monthly: [
// {
// name: "Pro",
// price: "₹1,299",
// period: "/Monthly",
// text: "+18% GST",
// description: "Automate Sales, Marketing & close more Deals",
// includedFeatures: ["5 Team Members",
//       "Roles & Permissions",
//       "WhatsApp Business API",
//       "Template Message APIs",
//       "Follow-up Reminders",
//       "Unlimited Conversation Messages",
//       "Send Bulk Broadcasts",
//       "Shared Team Inbox",
//       "Schedule Messages",
//       "All Integrations",
//       "SIM-based Call",
//       "Automation 360",
//       "Meetings & Appointments",
//       "Reporting & Analytics",
//       "Unlimited Quotes & Invoices",
//       "Task Management",
//       "Ticket Center",
//       "Webhooks",
//       "AI-powered chatbots",
//       "Mobile Access to CRM",
//       "API Integrations",
      
//     ],
// excludedFeatures: [
//   "Live Support",
//   "Geo Tracking",
//       "Custom Request",
//       "Green Tick Application",
//       "White-label Account",],
// cta: "Get Started",
// popular: false,
// },
// {
// name: "Business",
// price: "₹1,999",
// period: "/Monthly",
// text: "+18% GST",
// description: "Accelerate growth with innovative solutions.",
// includedFeatures: ["Unlimited Lead Management",
//       "20 Team Members",
//       "Roles & Permissions",
//       "WhatsApp Business API",
//       "Template Message APIs",
//       "Follow-up Reminders",
//       "Unlimited Conversation Messages",
//       "Send Bulk Broadcasts",
//       "Shared Team Inbox",
//       "Schedule Messages",
//       "All Integrations",
//       "SIM-based Call",
//       "Automation 360",
//       "Meetings & Appointments",
//       "Reporting & Analytics",
//       "Unlimited Quotes & Invoices",
//       "Task Management",
//       "Ticket Center",
//       "Webhooks",
//       "AI-powered chatbots",
//       "Mobile Access to CRM",
//       "API Integrations",
//       "Priority Support",
//       "Geo Tracking",
//     ],
// excludedFeatures: ["Green Tick Application", "White-label Account"],
// cta: "Get Started",
// popular: true,
// },
// {
// name: "Enterprise",
// price: "Custom Price",
// period: "",
// text: "",
// description: "Build & Organize your Sales Function at your ease.",
// includedFeatures: ["Unlimited Lead Management",
//       "Requested Team Members",
//       "Roles & Permissions",
//       "WhatsApp Business API",
//       "Template Message APIs",
//       "Follow-up Reminders",
//       "Unlimited Conversation Messages",
//       "Send Bulk Broadcasts",
//       "Shared Team Inbox",
//       "Schedule Messages",
//       "All Integrations",
//       "SIM-based Call",
//       "Automation 360",
//       "Meetings & Appointments",
//       "Reporting & Analytics",
//       "Unlimited Quotes & Invoices",
//       "Task Management",
//       "Ticket Center",
//       "Webhooks",
//       "AI-powered chatbots",
//       "Mobile Access to CRM",
//       "API Integrations",
//       "Priority Support",
//       "Geo Tracking",
//       "Green Tick Application",
//       "White-label Account",
//     ],
// excludedFeatures: [],
// cta: "Contact Sales",
// popular: false,
// },
// ],
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
{/* <button
className={billing === "monthly" ? "active" : ""}
onClick={() => setBilling("monthly")}
>
Quarterly
</button> */}
{/* Toggle Button */}

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


