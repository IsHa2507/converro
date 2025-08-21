import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import TermsAndCondition from "./components/TermsAndCondition";
// import PrivacyPolicy from "./PrivacyPolicy"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import PrivacyPolicy from "./components/PrivacyAndPolicy";
function App() {
  return (
     <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/termsandconditions" element={<TermsAndCondition />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;