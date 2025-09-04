import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import Homepage from "./components/Home";
import TermsAndCondition from "./components/TermsAndCondition";
import PrivacyPolicy from "./components/PrivacyAndPolicy";
import RefundPolicy from "./components/Refund";
import ContactUs from "./components/ContactUs";
import AboutUS from "./components/AboutUs";
import Pricing from "./components/Pricing";
import IntegrationPage from "./components/IntegrationPage";
import SMS_Marketing from "./internalPages/SMS_Marketing";

// Global components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ModalForm from "./components/ModalForm";

function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/termsandconditions" element={<TermsAndCondition />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/integrationpage" element={<IntegrationPage />} />
        <Route path="/sms-marketing" element={<SMS_Marketing />} />
      </Routes>

      <Footer />

      
    </Router>
  );
}

export default App;
