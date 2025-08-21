import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";
import "./Testimonial.css";

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Leah Mendoza",
      position: "Operations Manager, Orbitcloud",
      content:
        "From day one, Custo has simplified how we work. The real-time updates, shared notes, and smart deal tracking have saved us countless hours. It's the kind of CRM that just works—and makes you wonder how you managed before using it.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      hasVideo: true,
    },
    {
      id: 2,
      name: "Marcus Johnson",
      position: "Sales Director, TechFlow",
      content:
        "The automation features in Custo have transformed our sales process. We've seen a 40% increase in lead conversion since implementing their system. The interface is intuitive and our team adopted it immediately.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      hasVideo: false,
    },
    {
      id: 3,
      name: "Sarah Chen",
      position: "VP of Sales, DataSync",
      content:
        "Custo's pipeline management is unmatched. The visibility we now have into our sales funnel has helped us identify bottlenecks and optimize our approach. Our close rate has improved by 35% this quarter.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      hasVideo: true,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h2>Real Stories from Real Users</h2>
        <p>
          Hear how Custo has helped businesses close more deals, collaborate
          better, and stay organized.
        </p>
      </div>

      {/* Carousel */}
      <div className="testimonial-carousel">
        {/* Prev Button */}
        <button onClick={prevSlide} className="nav-btn left">
          <ChevronLeft />
        </button>

        {/* Card */}
        <div className="testimonial-card">
          <div className="testimonial-image">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
            />
            {currentTestimonial.hasVideo && (
              <div className="video-overlay">
                <button className="play-btn">
                  <Play />
                </button>
              </div>
            )}
          </div>

          <div className="testimonial-content">
            <div className="stars">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} fill="currentColor" />
              ))}
            </div>
            <blockquote>“{currentTestimonial.content}”</blockquote>
            <h4>{currentTestimonial.name}</h4>
            <p className="position">{currentTestimonial.position}</p>
          </div>
        </div>

        {/* Next Button */}
        <button onClick={nextSlide} className="nav-btn right">
          <ChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
