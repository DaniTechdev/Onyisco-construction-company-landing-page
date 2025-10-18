"use client";
import { useState } from "react";
// import Button from "@/components/ui/Button/Button";
import Button from "../../../components/ul/Button/Button";

import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const contactMethods = [
    {
      icon: "📞",
      title: "Call Us",
      details: "+234 801 234 5678",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: "📧",
      title: "Email Us",
      details: "info@roofmaster.com",
      description: "We reply within 24 hours",
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: "123 Construction Ave, Lagos",
      description: "Office hours: 8am-5pm",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: "+234 801 234 5678",
      description: "Quick responses available",
    },
  ];

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.contactHeader}>
          <h2 className="section-title">Get In Touch With Us</h2>
          <p className="section-subtitle">
            Ready to start your project? Contact us for a free consultation and
            quote. Our team is here to answer your questions and provide expert
            guidance.
          </p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>
              Let's Build Something Amazing Together
            </h3>
            <p className={styles.infoDescription}>
              Whether you need a new roof, repairs, or a complete construction
              project, we're here to help. Reach out to us through any of the
              following methods.
            </p>

            <div className={styles.contactMethods}>
              {contactMethods.map((method, index) => (
                <div key={index} className={styles.contactMethod}>
                  <div className={styles.methodIcon}>{method.icon}</div>
                  <div className={styles.methodContent}>
                    <h4 className={styles.methodTitle}>{method.title}</h4>
                    <p className={styles.methodDetails}>{method.details}</p>
                    <p className={styles.methodDescription}>
                      {method.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.businessHours}>
              <h4 className={styles.hoursTitle}>Business Hours</h4>
              <div className={styles.hoursList}>
                <div className={styles.hourItem}>
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className={styles.hourItem}>
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className={styles.hourItem}>
                  <span>Sunday</span>
                  <span>Emergency Services Only</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.formInput}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.formInput}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.formInput}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="service" className={styles.formLabel}>
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={styles.formSelect}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Roofing</option>
                    <option value="commercial">Commercial Roofing</option>
                    <option value="repair">Roof Repair</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="construction">Construction</option>
                    <option value="inspection">Roof Inspection</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={styles.formTextarea}
                  placeholder="Please describe your project, including any specific requirements or challenges..."
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="large"
                className={styles.submitButton}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
