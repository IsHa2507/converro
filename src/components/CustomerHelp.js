import React from "react";
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
    <div className="addons-container">
      <h2 className="addons-heading">Add-ons & Services</h2>
      <div className="addons-list">
        {addons.map((item, index) => (
          <div key={index} className="addon-card">
            <div className="addon-content">
              <h3 className="addon-title">{item.title}</h3>
              <p className="addon-description">{item.description}</p>
            </div>

            {/* WhatsApp button */}
            <a
              href={item.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="addon-btn"
            >
              {item.price}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddOns;



