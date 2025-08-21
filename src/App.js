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
function App() {
  return (
     <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Homepage" element={<Homepage/>}/>
        <Route path="/termsandconditions" element={<TermsAndCondition />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/refundpolicy" element={<RefundPolicy/>}/>
      </Routes>
    </Router>
  );
}

export default App;