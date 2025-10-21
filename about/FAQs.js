import React, { useState } from "react";
import { FiPlus } from "react-icons/fi"; // plus icon
import "./FAQs.css";

const faqsData = [
  {
    question: "What does marketing automation in Converro CRM do?",
    answer: "It automates tasks like capturing leads, sending autoresponders, triggering personalized communication, tracking funnels, and nurturing leads—all seamlessly integrated into your CRM."
  },
  {
    question: "How is Converro CRM different from traditional marketing automation?",
    answer: "Converro CRM is built for sales professionals to manage one-to-one buyer relationships, while marketing automation tools support broader marketing campaigns and nurture large audiences."
  },
  {
    question: "What does CRM-focused marketing include?",
    answer: "It encompasses campaigns for brand awareness, engagement, and retention—all managed through Converro CRM."
  },
  {
    question: "Why is Converro considered a leading CRM for sales and marketing automation?",
    answer: "Converro stands out thanks to its strong automation, direct lead capture, campaign-management features, and ease of use that helps businesses scale quickly."
  },
  {
    question: "Can I import data from spreadsheets or another CRM?",
    answer: "Yes, you can import your existing data seamlessly from spreadsheets or other CRMs."
  },
  {
    question: "What does lead capture automation include?",
    answer: "It consolidates lead sources—forms, emails, phone calls, voicemails, list imports—into one unified CRM platform."
  },
  {
    question: "What are the different lead capture methods?",
    answer: "Common methods include: Web or ad forms, Phone calls and voicemails, Email inquiries, Spreadsheet imports. Converro can also enrich lead data automatically."
  },
  {
    question: "Does Converro offer a free version or trial?",
    answer: "Converro does not offer a free version, but does provide a free trial and typically does not require credit card details to start."
  }
];

const FAQs = () => {
  // Split data into 2 columns
  const mid = Math.ceil(faqsData.length / 2);
  const leftColumn = faqsData.slice(0, mid);
  const rightColumn = faqsData.slice(mid);

  // Separate state for each column
  const [activeLeft, setActiveLeft] = useState(null);
  const [activeRight, setActiveRight] = useState(null);

  const toggleLeft = (index) => {
    setActiveLeft(activeLeft === index ? null : index);
  };

  const toggleRight = (index) => {
    setActiveRight(activeRight === index ? null : index);
  };

  return (
    <section className="faqs">
      <h2 className="faqs-title">Frequently Asked Questions</h2>
      <p className="faqs-subtitle">
        Find quick answers to common questions about Custo.
      </p>

      <div className="faqs-container">
        {/* Left Column */}
        <div className="faq-column">
          {leftColumn.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeLeft === index ? "active" : ""}`}
              onClick={() => toggleLeft(index)}
            >
              <div className="faq-question">
                {faq.question}
                <FiPlus className="faq-icon" />
              </div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="faq-column">
          {rightColumn.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeRight === index ? "active" : ""}`}
              onClick={() => toggleRight(index)}
            >
              <div className="faq-question">
                {faq.question}
                <FiPlus className="faq-icon" />
              </div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;


