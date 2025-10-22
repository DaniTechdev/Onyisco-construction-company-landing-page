// import Button from "@/components/ui/Button/Button";
// import Button from "../../../components/ul/Button/Button";

// import styles from "./Services.module.css";

"use client";
import { useState } from "react";
// import Button from "@/components/ui/Button/Button";
import Button from "../../../components/ul/Button/Button";

// import QuoteCalculator from "@/components/ui/QuoteCalculator/QuoteCalculator";
import QuoteCalculator from "../../../components/ul/QuoteCalculator/QuoteCalculator";
import styles from "./Services.module.css";

const Services = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const services = [
    {
      icon: "🏠",
      title: "Residential Roofing",
      description:
        "Complete roofing solutions for homes, from installation to repair and maintenance using quality materials.",
      features: [
        "New Installation",
        "Roof Repair",
        "Maintenance",
        "Re-roofing",
      ],
    },
    {
      icon: "🏢",
      title: "Commercial Roofing",
      description:
        "Durable and efficient roofing systems for commercial buildings designed for longevity and performance.",
      features: [
        "Flat Roofing",
        "Metal Roofing",
        "Waterproofing",
        "Industrial Roofing",
      ],
    },
    {
      icon: "🔧",
      title: "Roof Repair & Maintenance",
      description:
        "Professional repair services and maintenance plans to extend the lifespan of your roof.",
      features: [
        "Leak Repair",
        "Structural Repair",
        "Preventive Maintenance",
        "Emergency Services",
      ],
    },
    {
      icon: "🏗️",
      title: "Construction Services",
      description:
        "Full construction services including building renovation, extension, and new construction projects.",
      features: [
        "New Construction",
        "Renovation",
        "Extension",
        "Structural Work",
      ],
    },
    {
      icon: "🌧️",
      title: "Waterproofing",
      description:
        "Comprehensive waterproofing solutions to protect your property from water damage and leaks.",
      features: [
        "Basement Waterproofing",
        "Terrace Waterproofing",
        "Bathroom Waterproofing",
        "External Waterproofing",
      ],
    },
    {
      icon: "📋",
      title: "Roof Inspection",
      description:
        "Professional roof assessment and consultation to identify issues and provide solutions.",
      features: [
        "Free Inspection",
        "Detailed Report",
        "Cost Estimation",
        "Maintenance Planning",
      ],
    },
  ];

  return (
    <>
      <section id="services" className={`section ${styles.services}`}>
        <div className="container">
          {/* ... services header and grid remain the same */}
          <div className={styles.servicesHeader}>
            <h2 className="section-title">Our Professional Services</h2>
            <p className="section-subtitle">
              Comprehensive roofing and construction solutions tailored to meet
              your specific needs with unmatched quality and professionalism.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles.serviceFeature}>
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="secondary"
                  size="small"
                  className={styles.serviceButton}
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>

          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>Ready to Start Your Project?</h3>
              <p className={styles.ctaDescription}>
                Get a free consultation and quote for your roofing or
                construction needs.
              </p>
            </div>
            <Button
              variant="accent"
              size="large"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      <QuoteCalculator
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
};

export default Services;
