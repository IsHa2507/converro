import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBuilding,
  FaBook,
  FaCar,
  FaPhone,
} from "react-icons/fa";

import { FiArrowRight } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import "./CRMSection.css";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import CRMIndusFeatures from "./CRMfeatures";
import imgcrm1 from "../images/CRMIMG1.png";
import imgcrm2 from "../images/CRMIMG2.png";
import imgcrm3 from "../images/CRMIMG3.png";
import imgcrm4 from "../images/CRM Img 4.png";
import imgcrm5 from "../images/CRM Img 5.png";

const categories = [
  { id: 1, name: "Real Estate", slug: "real-estate", icon: <FaBuilding /> },
  { id: 2, name: "Education", slug: "education", icon: <FaBook /> },
  { id: 3, name: "Tours & Travels", slug: "tours-travels", icon: <MdTravelExplore /> },
  { id: 4, name: "Financial Services", slug: "financial-services", icon: <BsGraphUp /> },
  { id: 5, name: "Automobile", slug: "automobile", icon: <FaCar /> },
  { id: 6, name: "Callcenters", slug: "callcenters", icon: <FaPhone /> },
  { id: 7, name: "B2B CRM", slug: "b2b-crm", icon: <BsGraphUp /> },
  { id: 8, name: "Healthcare", slug: "healthcare", icon: <FaBuilding /> },
  { id: 9, name: "Hospitality", slug: "hospitality", icon: <FaBuilding /> },
];

export const crmFeatures = {
  "real-estate": [
    {
      id: 1,
      tag: "Integration Capabilities",
      title: "Capture leads from all property portals",
      description:
        "Stop juggling between multiple platforms. Converro connects with real estate portals, websites, and ad campaigns, bringing every inquiry into one centralized hub. Leads can be auto-assigned to the right agents and instantly engaged via WhatsApp or SMS.",
      img: imgcrm1,
    },
    {
      id: 2,
      tag: "Telesales Management",
      title: "Boost property deal conversions",
      description:
        "Close more deals with less effort. With the auto-dialer and one-click calling, your agents spend time building relationships with buyers instead of manually dialing numbers. Every call gets logged automatically for transparency.",
      img: imgcrm2,
    },
    {
      id: 3,
      tag: "Lead Management",
      title: "Complete client & property interaction history",
      description:
        "Never lose track of a buyer’s journey. Converro stores all calls, emails, chats, and property documents—agreements, invoices, KYC—securely in one place. This helps agents personalize every interaction and build trust.",
      img: imgcrm3,
    },
    {
      id: 4,
      tag: "Follow-up Call Reminders",
      title: "Never miss a client touchpoint",
      description:
        "Missed follow-ups mean missed deals. Converro sends timely WhatsApp and app reminders for property viewings, callbacks, or payment discussions, ensuring your pipeline stays hot and deals keep moving.",
      img: imgcrm4,
    },
    {
      id: 5,
      tag: "Team Management",
      title: "Track your property agents",
      description:
        "Keep full visibility on field teams. With check-in tracking, you can monitor property visits, client meetings, and location activity, ensuring accountability and better performance from your agents.",
      img: imgcrm5,
    },
  ],

  "education": [
    {
      id: 1,
      tag: "Integration Capabilities",
      title: "Capture leads from travel portals",
      description:
        "Connect with OTAs, travel websites, and ad campaigns to funnel all leads into one CRM. Eliminate manual imports and manage bookings seamlessly.",
      img: imgcrm1,
    },
    {
      id: 2,
      tag: "Telesales Management",
      title: "Boost bookings with smart calls",
      description:
        "Use auto-dialer to instantly reach travelers asking about packages. Agents spend more time convincing customers and less time handling numbers.",
      img: imgcrm2,
    },
    {
      id: 3,
      tag: "Lead Management",
      title: "Track every student interaction",
      description:
        "Every interaction—calls, emails, counseling notes, and admission documents—are stored in one profile. Counselors can instantly pick up where they left off, ensuring a smoother admission journey.",
      img: imgcrm3,
    },
    {
      id: 4,
      tag: "Follow-up Call Reminders",
      title: "Never lose a student lead",
      description:
        "From entrance exam dates to admission deadlines, Converro ensures timely reminders for follow-ups with parents and students, so no opportunity for enrollment is missed.",
      img: imgcrm4,
    },
    {
      id: 5,
      tag: "Team Management",
      title: "Monitor admission counselors",
      description:
        "Track counselor productivity with real-time performance metrics and check-ins. Ensure that every student inquiry gets equal attention and the admissions funnel stays healthy.",
      img: imgcrm5,
    },
  ],
  "tours-travels":[
     {
      id: 1,
      tag: "Integration Capabilities",
      title: "Capture leads from travel portals",
      description:
        "Connect with OTAs, travel websites, and ad campaigns to funnel all leads into one CRM. Eliminate manual imports and manage bookings seamlessly.",
      img: imgcrm1,
    },
    {
      id: 2,
      tag: "Telesales Management",
      title: "Boost bookings with smart calls",
      description:
        "Use auto-dialer to instantly reach travelers asking about packages. Agents spend more time convincing customers and less time handling numbers.",
      img: imgcrm2,
    },
    {
      id: 3,
      tag: "Lead Management",
      title: "Organize itineraries & customer history",
      description:
        "Converro keeps all communications, itineraries, invoices, and documents (like visas, tickets, and vouchers) in one secure place, making customer service effortless.",
      img: imgcrm3,
    },
    {
      id: 4,
      tag: "Follow-up Call Reminders",
      title: "Stay on top of trip inquiries",
      description:
        "Never miss callbacks for package inquiries, follow-up questions, or payment confirmations. Automated reminders keep your pipeline warm and your clients engaged.",
      img: imgcrm4,
    },
    {
      id: 5,
      tag: "Team Management",
      title: "Track field agents & guides",
      description:
        "Whether it’s travel agents, ground staff, or local guides, Converro provides visibility through check-ins and performance monitoring to ensure smooth operations.",
      img: imgcrm5,
    },
  ],
  "financial-services": [
    {
      id: 1,
      tag: "Integration Capabilities",
      title: "Capture client leads from all channels",
      description:
        "Seamlessly gather inquiries from websites, ad forms, and referral networks into one CRM. No lead is lost, and every potential client is accounted for.",
      img: imgcrm1,
    },
    {
      id: 2,
      tag: "Telesales Management",
      title: "Close deals faster",
      description:
        "Financial advisors can save time with one-click calls and auto-dialing, focusing more on consultations and less on dialing numbers.",
      img: imgcrm2,
    },
    {
      id: 3,
      tag: "Lead Management",
      title: "One place for all client records",
      description:
        "Converro keeps a 360° client view with call logs, portfolio details, KYC records, and payment history—accessible anytime.",
      img: imgcrm3,
    },
    {
      id: 4,
      tag: "Follow-up Call Reminders",
      title: "Never miss client renewal dates",
      description:
        "Get automated reminders for EMI collections, investment reviews, insurance renewals, or policy updates, ensuring consistent revenue flow.",
      img: imgcrm4,
    },
    {
      id: 5,
      tag: "Team Management",
      title: "Monitor advisors’ performance",
      description:
        "Track the productivity of your financial advisors—calls made, meetings held, deals closed—to ensure high performance across teams.",
      img: imgcrm5,
    },
  ],

  "b2b-crm": [
    {
      id: 1,
      tag: "Integration Capabilities",
      title: "Collect leads from multiple sources",
      description:
        "Unify inquiries from trade shows, email campaigns, LinkedIn, and partner referrals in one CRM. No more scattered leads.",
      img: imgcrm1,
    },
    {
      id: 2,
      tag: "Telesales Management",
      title: "Shorten B2B sales cycles",
      description:
        "Converro’s auto-dialer and smart logging tools help sales teams move faster through outreach, demos, and negotiations.",
      img: imgcrm2,
    },
    {
      id: 3,
      tag: "Lead Management",
      title: "Track every touchpoint",
      description:
        "Every proposal, contract, and communication history is stored in one lead record, helping reps deliver personalized pitches and close bigger deals.",
      img: imgcrm3,
    },
    {
      id: 4,
      tag: "Follow-up Call Reminders",
      title: "Stay consistent with prospects",
      description:
        "Never miss follow-ups for demos, client reviews, or negotiations. Automated reminders keep deals on track.",
      img: imgcrm4,
    },
    {
      id: 5,
      tag: "Team Management",
      title: "Sales team accountability",
      description:
        "Get a clear view of pipelines, team performance, and individual rep productivity in real time.",
      img: imgcrm5,
    },
  ],

  "callcenters": [
    {
      id: 1,
      tag: "Integration Capabilities",
      title: "Centralized lead capture",
      description:
        "Converro integrates with campaigns, portals, and lead forms, allowing call centers to handle all leads from a single screen.",
      img: imgcrm1,
    },
    {
      id: 2,
      tag: "Telesales Management",
      title: "Maximize call volume & quality",
      description:
        "The auto-dialer increases call throughput while logging every outcome automatically. Agents can focus on conversations, not admin work.",
      img: imgcrm2,
    },
    {
      id: 3,
      tag: "Lead Management",
      title: "Unified client history",
      description:
        "Every inbound/outbound call, chat, or email is tracked in one customer record, enabling better resolutions.",
      img: imgcrm3,
    },
    {
      id: 4,
      tag: "Follow-up Call Reminders",
      title: "On-time client callbacks",
      description:
        "Missed calls are no longer missed opportunities—Converro schedules and reminds agents for timely callbacks.",
      img: imgcrm4,
    },
    {
      id: 5,
      tag: "Team Management",
      title: "Agent performance tracking",
      description:
        "Monitor average handling time, call feedback, and team efficiency to optimize call center operations.",
      img: imgcrm5,
    },
  ],

  "automobile": [
    {
      id: 1,
      tag: "Integration Capabilities",
      title: "Capture inquiries from auto portals",
      description:
        "Bring in leads from auto portals, websites, and showroom inquiries into one CRM. Test drive requests and dealer leads are tracked automatically.",
      img: imgcrm1,
    },
    {
      id: 2,
      tag: "Telesales Management",
      title: "Close more sales calls",
      description:
        "Use auto-dialer for faster outreach on promotions, test drives, or financing offers—helping dealers close sales faster.",
      img: imgcrm2,
    },
    {
      id: 3,
      tag: "Lead Management",
      title: "Vehicle buyer history in one place",
      description:
        "Every interaction—calls, messages, invoices, RC copies, or service records—is stored for easy follow-up.",
      img: imgcrm3,
    },
    {
      id: 4,
      tag: "Follow-up Call Reminders",
      title: "Timely reminders for buyers",
      description:
        "Get alerts for pending callbacks on test drives, financing approvals, or service renewals.",
      img: imgcrm4,
    },
    {
      id: 5,
      tag: "Team Management",
      title: "Track showroom & field executives",
      description:
        "Monitor dealer sales reps’ activity and client visits with real-time tracking to ensure accountability.",
      img: imgcrm5,
    },
  ],
  "healthcare": [
    {
      id: 1,
      tag: "Integration Capabilities",
      title: "Centralize patient records",
      description:
        "All patient details, prescriptions, and reports are stored in one secure hub for easy access.",
      img: imgcrm1,
    },
    {
      id: 2,
      tag: "Telesales Management",
      title: "Simplify patient communication",
      description:
        "With auto-dial and one-click calling, staff can connect quickly for appointment confirmations and updates.",
      img: imgcrm2,
    },
    {
      id: 3,
      tag: "Lead Management",
      title: "Track patient interactions",
      description:
        "Every consultation, treatment plan, and medical history is organized under one patient profile.",
      img: imgcrm3,
    },
    {
      id: 4,
      tag: "Follow-up Call Reminders",
      title: "Ensure better care",
      description:
        "Automated reminders for follow-ups, test results, and medication schedules keep patients on track.",
      img: imgcrm4,
    },
    {
      id: 5,
      tag: "Team Management",
      title: "Coordinate doctors & staff",
      description:
        "Monitor doctor visits, nurse check-ins, and overall staff activities for smooth hospital operations.",
      img: imgcrm5,
    },
  ],
  "hospitality": [
    {
      id: 1,
      tag: "Integration Capabilities",
      title: "Capture bookings everywhere",
      description:
        "From websites, OTAs, and travel partners, all reservations and guest inquiries flow into one hub.",
      img: imgcrm1,
    },
    {
      id: 2,
      tag: "Telesales Management",
      title: "Improve guest calling efficiency",
      description:
        "Front-desk teams save time with one-click calling for confirmations, upgrades, and guest requests.",
      img: imgcrm2,
    },
    {
      id: 3,
      tag: "Lead Management",
      title: "Organize guest profiles",
      description:
        "Track guest history, preferences, bookings, and communication in a single unified profile.",
      img: imgcrm3,
    },
    {
      id: 4,
      tag: "Follow-up Call Reminders",
      title: "Engage guests at the right time",
      description:
        "Send timely check-in messages, feedback requests, and post-stay offers to build loyalty.",
      img: imgcrm4,
    },
    {
      id: 5,
      tag: "Team Management",
      title: "Enhance service delivery",
      description:
        "Assign and track housekeeping, concierge, and reception tasks for a seamless guest experience.",
      img: imgcrm5,
    },
  ],
};

export default function CRMSection() {
  const location = useLocation();
  const [active, setActive] = useState(1);
  const buttonRefs = useRef({});

  // On load, check query param to set correct category
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const catSlug = params.get("cat");
    if (catSlug) {
      const found = categories.find((c) => c.slug === catSlug);
      if (found) setActive(found.id);
    }
  }, [location.search]);

  // Auto-scroll active button into view
  useEffect(() => {
    if (buttonRefs.current[active]) {
      buttonRefs.current[active].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [active]);

  // Arrow button navigation
  const handleArrow = (direction) => {
    setActive((prev) => {
      if (direction === "left") {
        return prev > 1 ? prev - 1 : prev;
      } else {
        return prev < categories.length ? prev + 1 : prev;
      }
    });
  };

  // Get active category and its features
  const activeCat = categories.find((c) => c.id === active);
  const activeFeatures = crmFeatures[activeCat?.slug] || [];

  return (
    <>
      <Navbar />
      <div className="crm-section">
        {/* Toggle Bar */}
        <div className="toggle-wrapper">
          <div className="toggle-container">
            <button className="scroll-btn inside left" onClick={() => handleArrow("left")}>
              <FaArrowLeft />
            </button>

            <div className="toggle-bar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  ref={(el) => (buttonRefs.current[cat.id] = el)}
                  onClick={() => setActive(cat.id)}
                  className={`toggle-item ${active === cat.id ? "active" : ""}`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>

            <button className="scroll-btn inside right" onClick={() => handleArrow("right")}>
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="content">
          <h1>
            Best <span>{activeCat?.name}</span> CRM
          </h1>
          <p>
            Converro helps you manage inquiries, track leads, and close{" "}
            <b>{activeCat?.name}</b> deals faster. From buyer follow-ups to
            custom workflows, everything is built to maximize sales efficiency
            and client satisfaction.
          </p>
          <button className="cta-indus"onClick={() => window.location.href = "https://app.converro.online/register"} >
            Start Free Trial
            <FiArrowRight className="Indus-arrow" />
          </button>
          <p className="trust">
            Trusted by <b>3K+ companies</b> around the world
          </p>
        </div>
      </div>

      <CRMIndusFeatures />
{/* Section Heading */}
<div className="feature-heading">
  <h2>
    Key Features in a{" "}
    <span>{categories.find((c) => c.id === active)?.name}</span> CRM Software
  </h2>
  <p>
    A {categories.find((c) => c.id === active)?.name} CRM like Converro has a
    unique set of features tailored to meet the unique requirements of all{" "}
    {categories.find((c) => c.id === active)?.name.toLowerCase()} businesses.
  </p>
</div>
      {/* 5-Box Alternating Feature Layout */}
<div className="feature-section">
  {activeFeatures.map((f, index) => (
    <div key={f.id} className={`feature-box ${index % 2 === 0 ? "normal" : "reverse"}`}>
      {/* Image */}
      <div className="feature-img">
        <img src={f.img} alt={f.title} />
      </div>

      {/* Text Content */}
      <div className="feature-text">
        <span className="feature-tag">#{f.tag || "Feature"}</span>
        <h3>{f.title}</h3>
        <p>{f.description}</p>
        <button className="start-btn-crm" onClick={() => window.location.href = "https://app.converro.online/register"}>Start For Free</button>
      </div>
    </div>
  ))}
</div>


      <CTA />
      <Footer />
    </>
  );
}
