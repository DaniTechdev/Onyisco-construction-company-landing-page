"use client";
import { useState } from "react";
// import Button from "@/components/ui/Button/Button";
import Button from "../../../components/ul/Button/Button";
import styles from "./Portfolio.module.css";
// import QuoteCalculator from '@/components/ui/QuoteCalculator/QuoteCalculator';
import QuoteCalculator from "../../../components/ul/QuoteCalculator/QuoteCalculator";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Modern Residential Villa",
      category: "residential",
      type: "New Installation",
      location: "Lekki, Lagos",
      duration: "6 weeks",
      image: "🏡",
      description:
        "Complete roofing installation for a contemporary luxury villa featuring advanced waterproofing and insulation.",
    },
    {
      id: 2,
      title: "Commercial Plaza Roofing",
      category: "commercial",
      type: "Flat Roofing",
      location: "Victoria Island, Lagos",
      duration: "8 weeks",
      image: "🏢",
      description:
        "Large-scale commercial roofing project with durable membrane system and excellent drainage solutions.",
    },
    {
      id: 3,
      title: "Heritage Home Restoration",
      category: "residential",
      type: "Roof Repair",
      location: "Ikoyi, Lagos",
      duration: "3 weeks",
      image: "🏛️",
      description:
        "Expert restoration of traditional roofing while preserving architectural heritage and character.",
    },
    {
      id: 4,
      title: "Industrial Warehouse",
      category: "commercial",
      type: "Metal Roofing",
      location: "Ikeja, Lagos",
      duration: "10 weeks",
      image: "🏭",
      description:
        "Robust metal roofing system for industrial facility designed for maximum durability and weather resistance.",
    },
    {
      id: 5,
      title: "Apartment Complex",
      category: "residential",
      type: "Waterproofing",
      location: "Abuja",
      duration: "4 weeks",
      image: "🏘️",
      description:
        "Comprehensive waterproofing solution for multi-story residential complex with terrace areas.",
    },
    {
      id: 6,
      title: "Shopping Mall Roof",
      category: "commercial",
      type: "New Installation",
      location: "Port Harcourt",
      duration: "12 weeks",
      image: "🛍️",
      description:
        "State-of-the-art roofing system for large shopping mall with integrated ventilation and lighting.",
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "residential", label: "Residential" },
    { key: "commercial", label: "Commercial" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <section id="portfolio" className={`section ${styles.portfolio}`}>
        <div className="container">
          <div className={styles.portfolioHeader}>
            <h2 className="section-title">Our Portfolio of Excellence</h2>
            <p className="section-subtitle">
              Explore our completed projects that showcase our commitment to
              quality, innovation, and customer satisfaction in every
              undertaking.
            </p>
          </div>

          <div className={styles.filterButtons}>
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`${styles.filterButton} ${
                  activeFilter === filter.key ? styles.active : ""
                }`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <div className={styles.imagePlaceholder}>{project.image}</div>
                  <div className={styles.projectOverlay}>
                    <Button variant="primary" size="small">
                      View Details
                    </Button>
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <div className={styles.projectCategory}>{project.type}</div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <div className={styles.projectMeta}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Location:</span>
                      <span className={styles.metaValue}>
                        {project.location}
                      </span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Duration:</span>
                      <span className={styles.metaValue}>
                        {project.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.portfolioCta}>
            <h3 className={styles.ctaTitle}>Have a Project in Mind?</h3>
            <p className={styles.ctaDescription}>
              Let's discuss how we can bring your vision to life with our
              expertise and quality craftsmanship.
            </p>
            <Button
              variant="primary"
              size="large"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Start Your Project
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

export default Portfolio;
