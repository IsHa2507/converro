import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import "./ContactUs.css";
import Testimonials from "./Testimonial";
import CustomerHelp from "./CustomerHelp";



const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Message sent successfully!');
    setIsSubmitting(false);
  };

  return (
    <>
     <Navbar/>
    <div className="contact-container">
        
        <div className="contact-wrapper">
  
        {/* Header Section */}
        <div className="header-section">
          <h1 className="main-title">Get in Touch</h1>
          <p className="subtitle">
            Whether you have a question, need support, or just want<br />
            to say hello, we're here and ready to help.
          </p><br/>
          <p><b>Expected Response Time:</b> Less than 24 hours</p>
        </div>

        {/* Form Container */}
        <div className="form-container">
          <div className="form-content">
            {/* Name Fields Row */}
            <div className="name-row">
              <div className="input-group">
                <label htmlFor="firstName" className="input-label">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="John"
                />
              </div>

              <div className="input-group">
                <label htmlFor="lastName" className="input-label">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="input-group">
              <label htmlFor="email" className="input-label">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="johndoe@gmail.com"
              />
            </div>

            {/* Subject Field */}
            <div className="input-group">
              <label htmlFor="subject" className="input-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Custom Plan"
              />
            </div>

            {/* Message Field */}
            <div className="input-group">
              <label htmlFor="message" className="input-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="form-input form-textarea"
                placeholder="Enter your message..."
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            >
              {isSubmitting ? (
                <div className="loading-content">
                  <div className="spinner"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
    
      
       <CustomerHelp/>
       
      

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactUs;