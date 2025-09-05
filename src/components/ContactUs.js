import React, { useState } from "react";
import Navbar from "../components/Navbar";
// import CTA from "../components/CTA";
import Footer from "../components/Footer";
import "./ContactUs.css";
// import Testimonials from "./Testimonial";
import CustomerHelp from "./CustomerHelp";
import { ToastContainer, toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone validation (10 digits minimum)
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    const response = await fetch(
      "https://converro-backend.onrender.com/api/contact/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.firstName || "",
          last_name: formData.lastName || "",
          email: formData.email || "",
          phone: formData.phone || "",
          subjects: formData.subject || "general", // backend expects 'subjects'
          message: formData.message || "",
        }),
      }
    ).catch(() => null); // prevents crash if server unreachable

    if (response && response.ok) {
      toast.success("Message sent successfully ✅", {
        position: "bottom-right",
        style: { background: "#d4edda", color: "#155724" },
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "general",
        message: "",
      });
    } else {
      toast.error("Unable to send message. Please try again later!", {
        position: "bottom-right",
      });
    }
  } catch (error) {
    console.error("Contact form error:", error);
    toast.error("Server not responding. Please try again later!", {
      position: "bottom-right",
    });
  }

  setIsSubmitting(false);
};

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-wrapper">
          {/* Header Section */}
          <div className="header-section">
            <h1 className="main-title">Get in Touch</h1>
            <p className="subtitle">
              Whether you have a question, need support, or just want
              <br />
              to say hello, we're here and ready to help.
            </p>
            <br />
            <p>
              <b>Expected Response Time:</b> Less than 24 hours
            </p>
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
                  Email address <span className="required">*</span>
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
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </div>

              {/* Phone Number Field */}
              <div className="input-group">
                <label htmlFor="phone" className="input-label">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="+91 98765 43210"
                />
                {errors.phone && (
                  <p className="error-message">{errors.phone}</p>
                )}
              </div>

              {/* Subject Dropdown */}
              <div className="input-group">
                <label htmlFor="subject" className="input-label">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="general">General Inquiry</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Customer Support</option>
                </select>
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
                className={`submit-button ${
                  isSubmitting ? "submitting" : ""
                }`}
              >
                {isSubmitting ? (
                  <div className="loading-content">
                    <div className="spinner"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <CustomerHelp />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default ContactUs;

