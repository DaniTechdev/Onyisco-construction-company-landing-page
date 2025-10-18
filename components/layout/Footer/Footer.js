import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerLogo}>RoofMaster</h3>
            <p className={styles.footerDescription}>
              Building dreams, one roof at a time. Professional roofing and
              construction services with excellence and integrity.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Quick Links</h4>
            <div className={styles.footerLinks}>
              <Link href="#about" className={styles.footerLink}>
                About Us
              </Link>
              <Link href="#services" className={styles.footerLink}>
                Services
              </Link>
              <Link href="#portfolio" className={styles.footerLink}>
                Portfolio
              </Link>
              <Link href="#contact" className={styles.footerLink}>
                Contact
              </Link>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Services</h4>
            <div className={styles.footerLinks}>
              <Link href="#" className={styles.footerLink}>
                Roof Installation
              </Link>
              <Link href="#" className={styles.footerLink}>
                Roof Repair
              </Link>
              <Link href="#" className={styles.footerLink}>
                Construction
              </Link>
              <Link href="#" className={styles.footerLink}>
                Maintenance
              </Link>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Contact Info</h4>
            <div className={styles.contactInfo}>
              <p>📞 +234 801 234 5678</p>
              <p>📧 info@roofmaster.com</p>
              <p>📍 123 Construction Ave, Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2024 RoofMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
