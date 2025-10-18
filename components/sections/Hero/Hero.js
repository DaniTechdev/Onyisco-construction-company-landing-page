import Button from "../../../components/ul/Button/Button";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Building Your Dreams with
              <span className={styles.highlight}> Quality & Precision</span>
            </h1>
            <p className={styles.heroDescription}>
              Professional roofing and construction services that stand the test
              of time. From residential to commercial projects, we deliver
              excellence in every detail.
            </p>
            <div className={styles.heroActions}>
              <Button variant="primary" size="large">
                Get Free Quote
              </Button>
              <Button variant="secondary" size="large">
                View Our Work
              </Button>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImage}>
              {/* Placeholder for hero image */}
              <div className={styles.imagePlaceholder}>
                🏗️ Construction Excellence
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
