"use client";
import { useState } from "react";
import Link from "next/link";
// import Button from "@/components/ui/Button/Button";
import Button from "../../../components/ul/Button/Button";
// import ThemeToggle from "../../../components/ui/ThemeToggle/ThemeToggle";
import ThemeToggle from "../../../components/ul/ThemeToggle/ThemeToggle";
// import QuoteCalculator from '@/components/ui/QuoteCalculator/QuoteCalculator';
import QuoteCalculator from "../../../components/ul/QuoteCalculator/QuoteCalculator";

import styles from "./Header.module.css";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className={styles.header}>
//       <div className="container">
//         <nav className={styles.nav}>
//           <div className={styles.logo}>
//             <Link href="/">
//               <span className={styles.logoText}>RoofMaster Onyisco </span>
//               <span></span>
//             </Link>
//           </div>

//           <div
//             className={`${styles.navLinks} ${
//               isMenuOpen ? styles.navLinksOpen : ""
//             }`}
//           >
//             <Link href="#about" className={styles.navLink}>
//               About
//             </Link>
//             <Link href="#services" className={styles.navLink}>
//               Services
//             </Link>
//             <Link href="#portfolio" className={styles.navLink}>
//               Portfolio
//             </Link>
//             <Link href="#team" className={styles.navLink}>
//               Team
//             </Link>
//             <Link href="#contact" className={styles.navLink}>
//               Contact
//             </Link>
//             <button onClick={toggleMenu} className={styles.navLinkClose}>
//               x
//             </button>
//           </div>

//           <div className={styles.navActions}>
//             <ThemeToggle />
//             <Button variant="primary" size="medium">
//               Get Quote
//             </Button>
//           </div>
//           <div className={styles.toggleMobile}>
//             <ThemeToggle />
//           </div>

//           <button
//             className={styles.menuToggle}
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <Link href="/">
                <span className={styles.logoText}>RoofMaster</span>
              </Link>
            </div>

            <div
              className={`${styles.navLinks} ${
                isMenuOpen ? styles.navLinksOpen : ""
              }`}
            >
              <Link href="#about" className={styles.navLink}>
                About
              </Link>
              <Link href="#services" className={styles.navLink}>
                Services
              </Link>
              <Link href="#portfolio" className={styles.navLink}>
                Portfolio
              </Link>
              <Link href="#team" className={styles.navLink}>
                Team
              </Link>
              <Link href="#contact" className={styles.navLink}>
                Contact
              </Link>
              <button onClick={toggleMenu} className={styles.navLinkClose}>
                x{" "}
              </button>
            </div>

            <div className={styles.navActions}>
              <ThemeToggle />
              <Button
                variant="primary"
                size="medium"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get Quote
              </Button>
            </div>
            <div className={styles.toggleMobile}>
              <ThemeToggle />{" "}
            </div>

            <button
              className={styles.menuToggle}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </header>

      <QuoteCalculator
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
};

export default Header;
