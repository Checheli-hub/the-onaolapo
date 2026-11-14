import React from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaYoutube,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { FaFacebookF, FaTiktok, FaXTwitter } from "react-icons/fa6";
import "./Contact.css";

function Contact() {
  const whatsappNumber = "2348039387891";
  const email = "noahjmh@yahoo.com";
  const phone = "+234 803 938 7891";

  const whatsappMessage = encodeURIComponent(
    "Hello The Onaolapo Show, I would like to make an enquiry.",
  );

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="contact-eyebrow">WE'D LOVE TO HEAR FROM YOU</p>
        <h1>Let's start a conversation.</h1>
        <p>
          Have a question, an idea, or want to work with us? We'd love to hear
          from you. Reach out and let's make something meaningful happen.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-intro">
          <p className="contact-label">GET IN TOUCH</p>
          <h2>We're just a message away.</h2>
          <p>
            Whether you're interested in our work, want to collaborate, or
            simply have something to share, we're always happy to connect.
          </p>
        </div>

        <div className="contact-whatsapp">
          <div className="whatsapp-icon">
            <FaWhatsapp />
          </div>

          <div className="whatsapp-content">
            <h3>Talk to us on WhatsApp</h3>
            <p>
              Have a quick question? Send us a message. Our team would love to
              hear from you.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              Chat with us <FaExternalLinkAlt />
            </a>
          </div>
        </div>

        <div className="contact-details">
          <div className="contact-card">
            <FaEnvelope className="contact-card-icon" />
            <h3>Email us</h3>
            <p>For enquiries and collaborations.</p>
            <a href={`mailto:${email}`}>{email}</a>
          </div>

          <div className="contact-card">
            <FaPhoneAlt className="contact-card-icon" />
            <h3>Call us</h3>
            <p>Prefer speaking with someone?</p>
            <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
          </div>
        </div>

        <div className="contact-social">
          <h3>Connect with us</h3>
          <p>Follow our journey and stay connected.</p>

          <div className="contact-social-links">
            <a
              href="https://www.facebook.com/share/1A9uuPgTew/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/theonaolaposhow?igsh=N2p5N2I4cWYyaGNo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/@theonaolaposhow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              title="YouTube"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.tiktok.com/@theonaolapo?_t=ZN-8vM8HNOJ4qc&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              title="TikTok"
            >
              <FaTiktok />
            </a>

            <a
              href="https://x.com/theonaolapo?s=09"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              title="X"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
