import React from "react";
import { useState } from "react";
import "./Newsletter.css";

function Newsletter() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    //clear form
    setFormData({
      email: "",
    });
    // success message
    setSuccessMessage("Thanks for subscribing!");
  };

  return (
    <section className="news-letter">
      <div>
        <p>STAY CONNECTED. BE THEIR VOICE.</p>
        <h2>Good stories. Meaningful change.</h2>
        <p>
          New conversations, campaign updates, and ways to make a difference.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            id="email"
            value={formData.email}
            name="email"
            type="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
            autoComplete="email"
          />
          <button type="submit">Subscribe for updates ↗</button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </section>
  );
}

export default Newsletter;
