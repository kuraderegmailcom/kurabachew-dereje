import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

function Contact() {
  const form = useRef();

  // Initialize EmailJS with your Public Key
  useEffect(() => {
    emailjs.init("GWChJSdVJ8cTE0EPY");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zyr1kzc",     // Fixed spelling: added 'r' to service
        "template_foeow8p",    // Your Template ID
        form.current,
        "GWChJSdVJ8cTE0EPY"     // Your Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully! ✅");
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-row">
            <input
              type="text"
              name="firstName" /* Matches {{firstName}} in dashboard */
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName" /* Matches {{lastName}} in dashboard */
              placeholder="Last Name"
              required
            />
          </div>

          <textarea
            name="message" /* Matches {{message}} in dashboard */
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;