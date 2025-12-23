import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2 className="contact-title">Contact me</h2>
        <p className="contact-subtitle">Get In Touch</p>

        {/* The glass container remains for style, but inputs are gone */}
        <div className="contact-card">
          <div className="contact-info-item">
            <span className="info-label">Email Me :</span>
            <a href="mailto:kuradere21@gmail.com" className="info-value">
              kuradere21@gmail.com</a>
          </div>

          <div className="contact-info-item">
            <span className="info-label">Call Me :</span>
            <a href="tel:+251945297077" className="info-value">
              +251 945297077
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;