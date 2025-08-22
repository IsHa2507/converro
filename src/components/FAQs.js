import React, { useState } from "react";
import "./FAQs.css";

const faqsData = [
  {
    question: "How do I get started with Custo?",
    answer: "Simply sign up, choose a plan, and start organizing your CRM in minutes, no setup required."
  },
  {
    question: "Is there a free trial available before subscribing?",
    answer: "Yes, Custo offers a free trial so you can explore the features before committing."
  },
  {
    question: "Can I manage multiple pipelines at once?",
    answer: "Yes, Custo allows you to manage multiple pipelines simultaneously with ease."
  },
  {
    question: "What types of businesses can use Custo?",
    answer: "Custo is designed for businesses of all sizes and industries that need streamlined CRM management."
  },
  {
    question: "Can I import data from spreadsheets or another CRM?",
    answer: "Yes, you can import your existing data seamlessly from spreadsheets or other CRMs."
  },
  {
    question: "How does Custo handle data backups?",
    answer: "Custo performs automated daily backups to keep your data secure and retrievable."
  },
  {
    question: "Will I lose data if I downgrade my plan?",
    answer: "No, your data remains safe, though some advanced features may no longer be available."
  },
  {
    question: "How often is Custo updated with new features?",
    answer: "Custo is updated regularly with new features and improvements based on user feedback."
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
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{activeIndex === index ? "✕" : "+"}</span>
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
