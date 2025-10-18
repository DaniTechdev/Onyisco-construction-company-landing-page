// import Button from "@/components/ui/Button/Button";
import Button from "../../../components/ul/Button/Button";

import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2 className="section-title">Building Excellence Since 2009</h2>
            <p className={styles.aboutDescription}>
              RoofMaster has been at the forefront of roofing and construction
              excellence in Nigeria for over 15 years. Our commitment to
              quality, safety, and customer satisfaction has made us the trusted
              choice for both residential and commercial projects.
            </p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🏆</div>
                <div className={styles.featureContent}>
                  <h3>Quality Craftsmanship</h3>
                  <p>
                    Every project meets the highest standards of workmanship and
                    materials
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>🛡️</div>
                <div className={styles.featureContent}>
                  <h3>Fully Insured</h3>
                  <p>Comprehensive insurance coverage for your peace of mind</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>⏱️</div>
                <div className={styles.featureContent}>
                  <h3>On-Time Delivery</h3>
                  <p>
                    We respect your time and complete projects within agreed
                    timelines
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.aboutActions}>
              <Button variant="primary" size="large">
                Learn More About Us
              </Button>
            </div>
          </div>

          <div className={styles.aboutVisual}>
            <div className={styles.imageGrid}>
              <div className={styles.imageCard}>
                <div className={styles.imagePlaceholder}>
                  🏠 Residential Excellence
                </div>
              </div>
              <div className={styles.imageCard}>
                <div className={styles.imagePlaceholder}>
                  🏢 Commercial Projects
                </div>
              </div>
              <div className={styles.imageCard}>
                <div className={styles.imagePlaceholder}>
                  🔧 Quality Materials
                </div>
              </div>
              <div className={styles.imageCard}>
                <div className={styles.imagePlaceholder}>
                  👷 Professional Team
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.statsSection}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>15+</span>
            <span className={styles.statTitle}>Years Experience</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statTitle}>Projects Completed</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statTitle}>Expert Staff</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statTitle}>Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
