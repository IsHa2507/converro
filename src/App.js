import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import Homepage from "./components/Home";
import TermsAndCondition from "./components/TermsAndCondition";
// import PrivacyPolicy from "./PrivacyPolicy"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import PrivacyPolicy from "./components/PrivacyAndPolicy";
import RefundPolicy from "./components/Refund";
import ContactUs from "./components/ContactUs";
import Testimonials from "./components/Testimonial";
import CustomerHelp from "./components/CustomerHelp";
import StatsSection from "./components/StatsSection";
import ParallaxSections from "./components/ParallaxSections";
import FAQs from "./components/FAQs";
import Integration from "./components/Integrations";
import BrandSlider from "./components/BrandSlider";
import HeroSection from "./components/Herosection";
import FinanceSection from "./components/FinanceSection";
function App() {
  return (
     <Router>
      
       <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/termsandconditions" element={<TermsAndCondition />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;