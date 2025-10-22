"use client";
import { useState } from "react";
// import Button from "@/components/ui/Button/Button";
import Button from "../../../components/ul/Button/Button";
// import { useEmailJS } from "@/hooks/useEmailJS";
import { useEmailJS } from "../../hooks/useEmailJS";
// import { EMAILJS_CONFIG } from "@/lib/emailjs-config";
import { EMAILJS_CONFIG } from "../../lib/emailjs-config";
import styles from "./ContactForm.module.css";

const ContactForm = ({
  isQuote = false,
  quoteData = null,
  onSuccess = null,
  showTitle = true,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    address: "",
  });

  const { sendEmail, isLoading, isSuccess, error, reset } = useEmailJS();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare template parameters for both quote and contact forms
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      address: formData.address,
      submission_type: isQuote ? "quote_request" : "contact_form",
      submission_date: new Date().toLocaleDateString("en-NG"),
      submission_time: new Date().toLocaleTimeString("en-NG"),

      // Quote-specific data (will be empty for regular contact forms)
      ...(isQuote && quoteData
        ? {
            property_type: quoteData.propertyType || "",
            project_type: quoteData.projectType || "",
            timeline: quoteData.timeline || "",
            service_type: quoteData.serviceType || "",
            roof_size: quoteData.roofSize || "",
            stories: quoteData.stories || "",
            material_quality: quoteData.materialQuality || "",
            budget_range: quoteData.budgetRange || "",
            special_requirements: quoteData.specialRequirements || "",
            estimated_price: quoteData.estimatedPrice || "",
          }
        : {}),
    };

    const result = await sendEmail(EMAILJS_CONFIG.TEMPLATE_ID, templateParams);

    if (result.success && onSuccess) {
      onSuccess();
    }

    if (result.success && !isQuote) {
      // Reset form for regular contact forms
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        address: "",
      });
    }
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     // Create a clean templateParams object with NO nested objects
  //     const templateParams = {
  //       // Basic contact info (always send these)
  //       from_name: formData.name || "Not provided",
  //       from_email: formData.email || "Not provided",
  //       phone: formData.phone || "Not provided",
  //       service: formData.service || "Not specified",
  //       message: formData.message || "No message provided",
  //       address: formData.address || "Not provided",
  //       submission_date: new Date().toLocaleDateString("en-NG"),
  //       submission_time: new Date().toLocaleTimeString("en-NG"),
  //     };

  //     // For quote requests, add quote data as flat properties
  //     if (isQuote && quoteData) {
  //       // Add quote data as individual properties, not nested
  //       templateParams.submission_type = "quote_request";
  //       templateParams.property_type = quoteData.propertyType || "Not specified";
  //       templateParams.project_type = quoteData.projectType || "Not specified";
  //       templateParams.timeline = quoteData.timeline || "Not specified";
  //       templateParams.service_type = quoteData.serviceType || "Not specified";
  //       templateParams.roof_size = quoteData.roofSize || "Not specified";
  //       templateParams.stories = quoteData.stories || "Not specified";
  //       templateParams.material_quality =
  //         quoteData.materialQuality || "Not specified";
  //       templateParams.budget_range = quoteData.budgetRange || "Not specified";
  //       templateParams.special_requirements =
  //         quoteData.specialRequirements || "None";

  //       if (quoteData.estimatedPrice) {
  //         templateParams.estimated_price = new Intl.NumberFormat("en-NG", {
  //           style: "currency",
  //           currency: "NGN",
  //         }).format(quoteData.estimatedPrice);
  //       } else {
  //         templateParams.estimated_price = "Not calculated";
  //       }
  //     } else {
  //       templateParams.submission_type = "contact_form";
  //     }

  //     console.log("📧 SENDING EMAILJS DATA:", templateParams);

  //     const result = await sendEmail(EMAILJS_CONFIG.TEMPLATE_ID, templateParams);

  //     if (result.success && onSuccess) {
  //       onSuccess();
  //     }

  //     if (result.success && !isQuote) {
  //       setFormData({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         service: "",
  //         message: "",
  //         address: "",
  //       });
  //     }
  //   };

  if (isSuccess && isQuote) {
    return (
      <div className={styles.successState}>
        <div className={styles.successIcon}>✅</div>
        <h2>Request Sent Successfully!</h2>
        <p className={styles.successMessage}>
          Thank you <strong>{formData.name}</strong>! Your{" "}
          {isQuote ? "quote request" : "message"} has been submitted.
        </p>

        {isQuote && quoteData?.estimatedPrice && (
          <div className={styles.estimateSummary}>
            <h3>Your Estimated Price</h3>
            <div className={styles.finalPrice}>
              {new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
              }).format(quoteData.estimatedPrice)}
            </div>
            <p className={styles.estimateNote}>
              * This is an automated estimate. Our team will contact you within
              24 hours.
            </p>
          </div>
        )}

        <div className={styles.nextSteps}>
          <h4>What Happens Next?</h4>
          <ul>
            <li>📞 We'll contact you within 24 hours</li>
            <li>🏠 Schedule a free site inspection if needed</li>
            <li>📋 Receive detailed project consultation</li>
            <li>🗓️ Plan your project timeline</li>
          </ul>
        </div>

        <Button
          variant="primary"
          size="large"
          onClick={onSuccess}
          className={styles.successButton}
        >
          Close
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.contactForm}>
      {showTitle && (
        <h3 className={styles.formTitle}>
          {isQuote ? "Get Your Free Quote" : "Send Us a Message"}
        </h3>
      )}

      {isSuccess && !isQuote && (
        <div className={styles.successMessage}>
          <div className={styles.successIcon}>✅</div>
          <h4>Message Sent Successfully!</h4>
          <p>
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
          <Button variant="secondary" size="small" onClick={reset}>
            Send Another Message
          </Button>
        </div>
      )}

      {!isSuccess && (
        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <div className={styles.errorMessage}>⚠️ {error}</div>}

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
                disabled={isLoading}
                placeholder="Your full name"
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
                disabled={isLoading}
                placeholder="your.email@example.com"
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
                disabled={isLoading}
                placeholder="+234 801 234 5678"
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
                disabled={isLoading}
              >
                <option value="">Select a service</option>
                <option value="residential-roofing">Residential Roofing</option>
                <option value="commercial-roofing">Commercial Roofing</option>
                <option value="roof-repair">Roof Repair</option>
                <option value="roof-replacement">Roof Replacement</option>
                <option value="maintenance">Maintenance</option>
                <option value="waterproofing">Waterproofing</option>
                <option value="new-construction">New Construction</option>
                <option value="renovation">Renovation</option>
                <option value="inspection">Roof Inspection</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {!isQuote && (
            <div className={styles.formGroup}>
              <label htmlFor="address" className={styles.formLabel}>
                Project Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={styles.formInput}
                disabled={isLoading}
                placeholder="Where is your project located?"
              />
            </div>
          )}

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>
              {isQuote ? "Additional Requirements" : "Project Details"} *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={styles.formTextarea}
              placeholder={
                isQuote
                  ? "Any specific requirements, materials, or additional details about your project..."
                  : "Please describe your project, including any specific requirements or challenges..."
              }
              required
              disabled={isLoading}
            ></textarea>
          </div>

          <div className={styles.consent}>
            <input type="checkbox" required disabled={isLoading} id="consent" />
            <label htmlFor="consent">
              I agree to be contacted by RoofMaster regarding my{" "}
              {isQuote ? "quote request" : "inquiry"}
            </label>
          </div>

          <Button
            type="submit"
            variant={isQuote ? "accent" : "primary"}
            size="large"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className={styles.spinner}></div>
                {isQuote ? "Submitting Quote..." : "Sending..."}
              </>
            ) : isQuote ? (
              "📧 Get My Free Quote"
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
