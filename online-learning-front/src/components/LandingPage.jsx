import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-container">
      {/* Header */}
      <header className="landing-header">
        <div className="logo">LearnHub</div>
        <nav className="landing-nav">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="/login" className="login-btn">Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Empower Your Learning Journey</h1>
          <p>
            Join our online hub for quality resources, engaging courses, and
            skilled instructors.
          </p>
          <a href="/signup" className="cta-btn">Get Started</a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features-section">
        <h2>Why Choose LearnHub?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Expert Teachers</h3>
            <p>Learn from industry experts with real-world experience.</p>
          </div>
          <div className="feature-card">
            <h3>Interactive Learning</h3>
            <p>Engage in discussions, quizzes, and live sessions.</p>
          </div>
          <div className="feature-card">
            <h3>Resources Library</h3>
            <p>Access curated study materials anytime, anywhere.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>© {new Date().getFullYear()} LearnHub. All rights reserved.</p>
      </footer>
    </div>
  );
}
