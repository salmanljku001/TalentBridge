import React from 'react';
import '../assets/css/Contact.css';

const Contact = () => (
  <div className="contact-form">
    <h2>Contact Us</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea rows="5" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
);

export default Contact;
