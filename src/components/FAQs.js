import React, { useState } from "react";
import { FiPlus } from "react-icons/fi"; // plus icon
import "./FAQs.css";

const faqsData = [
  {
    question: " What does marketing automation in Converro CRM do?",
    answer: " It automates tasks like capturing leads, sending autoresponders for incoming queries, triggering personalized communication, tracking funnels, and nurturing leads—all seamlessly integrated into your CRM."
  },
  {
    question: "How is Converro CRM different from traditional marketing automation?",
    answer: "Converro CRM is built for sales professionals to manage one-to-one buyer relationships, while marketing automation tools support broader marketing campaigns and nurture large audiences. With growing synergy between sales and marketing, Converro includes automation features to bridge the gap."
  },
  {
    question: "What does CRM-focused marketing include?",
    answer: "It encompasses campaigns for brand awareness, engagement (like training or product updates), and retention (such as collecting feedback or organizing meet-ups)—all managed through Converro CRM."
  },
  {
    question: "Why is Converro considered a leading CRM for sales and marketing automation?",
    answer: " Converro stands out thanks to its strong automation, direct lead capture, campaign‑management features, and ease of use that helps businesses scale quickly."
  },
  {
    question: "Can I import data from spreadsheets or another CRM?",
    answer: "Yes, you can import your existing data seamlessly from spreadsheets or other CRMs."
  },
  {
    question: "What does lead capture automation include?",
    answer: "It consolidates lead sources—forms, emails, phone calls, voicemails, list imports, and more—into one unified CRM platform to eliminate manual data handling."
  },
  {
    question: "What are the different lead capture methods?",
    answer: " Common methods include: Web or ad forms, Phone calls and voicemails, Email inquiries, Spreadsheet imports. Plus, Converro can enrich lead data automatically."
  },
  {
    question: " Does Converro offer a free version or trial?",
    answer: " Converro does not offer a free version, but does provide a free trial, and typically does not require credit card details to start."
  }
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs">
      <h2 className="faqs-title">Frequently Asked Questions</h2>
      <p className="faqs-subtitle">
        Find quick answers to common questions about Custo.
      </p>
      <div className="faqs-container">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <FiPlus className="faq-icon" />
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;

