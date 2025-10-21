import React from "react";
import { FaWhatsapp } from "react-icons/fa"; 
import "./AddOns.css";

const addons = [
  {
    title: "IVR Service - Unlimited Incoming & Outgoing",
    description:
      "Zero setup fee for the Unlimited Incoming & Outgoing Plan. Accelerate sales and enhance customer support with IVR, auto-dialer, and efficient call management. IVR service is available exclusively with the annual plan.",
    price: "Contact Sales",
    whatsapp: "https://wa.me/9211616225",
  },
  {
    title: "SMS Marketing",
    description:
      "If you have DLT verification in India, access SMS marketing at a low cost of 17p per SMS. Promote your business with instant delivery. Minimum order quantity: 10,000.",
    price: "Contact Sales",
    whatsapp: "https://wa.me/9211616225",
  },
  {
    title: "Voice OBD Message",
    description:
      "Voice broadcasting service allows you to send notifications, alerts, offers, announcements, surveys, and more. Minimum order quantity: 10,000.",
    price: "Contact Sales",
    whatsapp: "https://wa.me/9211616225",
  },
];

const AddOns = () => {
  return (
    
  <>
    <div className="addons-container">
      <h2 className="addons-heading">Add-ons & Services</h2>
      <div className="addons-list">
        {addons.map((item, index) => (
          <div key={index} className="addon-card">
            <div className="addon-content">
              <h3 className="addon-title">{item.title}</h3>
              <p className="addon-description">{item.description}</p>
            </div>

            {/* WhatsApp button with icon */}
            <a
              href={item.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="addon-btn"
            >
              <FaWhatsapp className="whatsapp-icon" /> {item.price}
            </a>
          </div>
        ))}
      </div>
    </div>

    {/* ✅ Optional Services Section */}
    <section className="optional-services-section">
      <div className="optional-services-container">
        <div className="optional-services-box">
          <h3 className="optional-services-title">
            Other optional services (on setup basis):
          </h3>
          <ul className="optional-services-list">
            <li>
              WhatsApp API setup charges: ₹2000 per setup + 18% GST session
              (including re-logins), applicable for Startup Plans.
            </li>
            <li>
              Automation Workflow Creation: ₹3000 per setup flow for Startup
              Plans, and ₹1500 per setup + 18% GST flow for Business Plans.
            </li>
          </ul>
          <div className="optional-services-support">
            <p>
              <strong>For more info Contact Support</strong>
            </p>
            <p className="optional-services-email">Support@converro.io</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

  
};

export default AddOns;
