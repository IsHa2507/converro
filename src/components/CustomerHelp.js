import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai"; // Inquiry
import { MdSchool } from "react-icons/md"; // Training
import { MdCancel } from "react-icons/md"; // Cancel
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./CustomerHelp.css";

const PrinciplesSection = () => {
  const principles = [
    {
      icon: <AiOutlineQuestionCircle className="principle-icon blue" />,
      title: "General Inquiry",
      description:
        "Get in touch with our support team for any general enquiry regarding product.",
      email: "mailto:info@converro.io",
      whatsapp: "https://wa.me/9211616225",
    },
    {
      icon:  <MdSchool className="principle-icon green circle-icon" />,
      title: "Lead with Training",
      description:
        "Learn about the product and it's features by connecting with our experts.",
      email: "mailto:onboard@converro.io",
      whatsapp: "https://wa.me/9211616225",
    },
    {
      icon: <MdCancel className="principle-icon red" />,
      title: "Cancel the Noise",
      description:
        "We stand by you even if wish to cancel your suscription at any point.",
      email: "mailto:support@converro.io",
      whatsapp: "https://wa.me/9211616225",
    },
  ];

  return (
    <section className="principles-section">
      <div className="principles-container">
        <h2 className="principles-heading">
          For Existing Customer
        </h2>
        <p className="principles-subheading">
         lets connect and understand how we can enable your business to grow faster.
        </p>

        <div className="principles-grid">
          {principles.map((item, index) => (
            <div key={index} className="principle-card">
              <div className="principle-icon-wrapper">{item.icon}</div>
              <h3 className="principle-title">{item.title}</h3>
              <p className="principle-description">{item.description}</p>

              {/* Action Buttons */}
              <div className="principle-actions">
                <a
                  href={item.email}
                  className="action-btn email"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope className="btn-icon" /> {item.email.replace("mailto:", "")}
                </a>
                <a
                  href={item.whatsapp}
                  className="action-btn whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="btn-icon" /> WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;


