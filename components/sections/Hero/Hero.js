// import Button from "../../../components/ul/Button/Button";

// import styles from "./Hero.module.css";

// const Hero = () => {
//   return (
//     <section className={styles.hero}>
//       <div className="container">
//         <div className={styles.heroContent}>
//           <div className={styles.heroText}>
//             <h1 className={styles.heroTitle}>
//               Building Your Dreams with
//               <span className={styles.highlight}> Quality & Precision</span>
//             </h1>
//             <p className={styles.heroDescription}>
//               Professional roofing and construction services that stand the test
//               of time. From residential to commercial projects, we deliver
//               excellence in every detail.
//             </p>
//             <div className={styles.heroActions}>
//               <Button variant="primary" size="large">
//                 Get Free Quote
//               </Button>
//               <Button variant="secondary" size="large">
//                 View Our Work
//               </Button>
//             </div>
//             <div className={styles.heroStats}>
//               <div className={styles.stat}>
//                 <span className={styles.statNumber}>500+</span>
//                 <span className={styles.statLabel}>Projects Completed</span>
//               </div>
//               <div className={styles.stat}>
//                 <span className={styles.statNumber}>15+</span>
//                 <span className={styles.statLabel}>Years Experience</span>
//               </div>
//               <div className={styles.stat}>
//                 <span className={styles.statNumber}>98%</span>
//                 <span className={styles.statLabel}>Client Satisfaction</span>
//               </div>
//             </div>
//           </div>
//           <div className={styles.heroVisual}>
//             <div className={styles.heroImage}>
//               {/* Placeholder for hero image */}
//               <div className={styles.imagePlaceholder}>
//                 🏗️ Construction Excellence
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// "use client";
// import { useState } from "react";
// // import Button from "@/components/ui/Button/Button";
// import Button from "../../../components/ul/Button/Button";
// // import QuoteCalculator from "@/components/ui/QuoteCalculator/QuoteCalculator";
// import QuoteCalculator from "../../../components/ul/QuoteCalculator/QuoteCalculator";
// import styles from "./Hero.module.css";
// import Image from "next/image";

// const Hero = () => {
//   const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

//   return (
//     <>
//       <section className={styles.hero}>
//         <div className="container">
//           <div className={styles.heroContent}>
//             <div className={styles.heroText}>
//               <h1 className={styles.heroTitle}>
//                 Building Your Dreams with
//                 <span className={styles.highlight}> Quality & Precision</span>
//               </h1>
//               <p className={styles.heroDescription}>
//                 Professional roofing and construction services that stand the
//                 test of time. From residential to commercial projects, we
//                 deliver excellence in every detail.
//               </p>
//               <div className={styles.heroActions}>
//                 <Button
//                   variant="primary"
//                   size="large"
//                   onClick={() => setIsQuoteModalOpen(true)}
//                 >
//                   Get Free Quote
//                 </Button>
//                 <Button variant="secondary" size="large">
//                   View Our Work
//                 </Button>
//               </div>
//               <div className={styles.heroStats}>
//                 <div className={styles.stat}>
//                   <span className={styles.statNumber}>500+</span>
//                   <span className={styles.statLabel}>Projects Completed</span>
//                 </div>
//                 <div className={styles.stat}>
//                   <span className={styles.statNumber}>15+</span>
//                   <span className={styles.statLabel}>Years Experience</span>
//                 </div>
//                 <div className={styles.stat}>
//                   <span className={styles.statNumber}>98%</span>
//                   <span className={styles.statLabel}>Client Satisfaction</span>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.heroVisual}>
//               <div className={styles.heroImage}>
//                 <img src="/construction.webp" />{" "}
//                 <div className={styles.imagePlaceholder}>
//                   🏗️ Construction Excellence
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <QuoteCalculator
//         isOpen={isQuoteModalOpen}
//         onClose={() => setIsQuoteModalOpen(false)}
//       />
//     </>
//   );
// };

// export default Hero;

"use client";
import { useState, useEffect } from "react";
import Button from "../../../components/ul/Button/Button";
import QuoteCalculator from "../../../components/ul/QuoteCalculator/QuoteCalculator";
import styles from "./Hero.module.css";

const Hero = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div
            className={`${styles.heroContent} ${
              isVisible ? styles.visible : ""
            }`}
          >
            <div className={styles.heroText}>
              <div className={styles.textContent}>
                <h1 className={styles.heroTitle}>
                  Building Your Dreams with
                  <span className={styles.highlight}> Quality & Precision</span>
                </h1>
                <p className={styles.heroDescription}>
                  Professional roofing and construction services that stand the
                  test of time. From residential to commercial projects, we
                  deliver excellence in every detail.
                </p>
                <div className={styles.heroActions}>
                  <Button
                    variant="primary"
                    size="large"
                    onClick={() => setIsQuoteModalOpen(true)}
                    className={styles.ctaButton}
                  >
                    Get Free Quote
                  </Button>
                  <Button
                    variant="secondary"
                    size="large"
                    className={styles.secondaryButton}
                  >
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
                    <span className={styles.statLabel}>
                      Client Satisfaction
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                  <img
                    src="/construction.webp"
                    alt="Professional Roofing and Construction Services"
                    className={styles.heroImage}
                  />
                  <div className={styles.imageOverlay}></div>

                  {/* Floating elements for visual interest */}
                  <div className={styles.floatingBadge}>
                    <div className={styles.badgeContent}>
                      <span className={styles.badgeIcon}>🏆</span>
                      <span className={styles.badgeText}>Award Winning</span>
                    </div>
                  </div>

                  <div className={styles.floatingCard}>
                    <div className={styles.cardContent}>
                      <span className={styles.cardIcon}>⏱️</span>
                      <div>
                        <div className={styles.cardTitle}>Fast Delivery</div>
                        <div className={styles.cardSubtitle}>
                          On-time Completion
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background decorative elements */}
                <div className={styles.backgroundShape1}></div>
                <div className={styles.backgroundShape2}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollArrow}></div>
        </div>
      </section>

      <QuoteCalculator
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
};

export default Hero;
