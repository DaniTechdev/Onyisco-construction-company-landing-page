// "use client";
// import { useState } from "react";
// // import Button from "../../components/ui/Button/Button";
// import Button from "../Button/Button";
// import styles from "./QuoteCalculator.module.css";

"use client";
import { useState, useEffect } from "react";
// import Button from "@/components/ui/Button/Button";
// import ContactForm from "@/components/ui/ContactForm/ContactForm";
import ContactForm from "../../../components/ul/ContactForm/ContactForm";
import styles from "./QuoteCalculator.module.css";

// import { useState } from "react";
// import Button from "../../components/ui/Button/Button";
import Button from "../Button/Button";
// import Button from "../Button/Button";
// import styles from "./QuoteCalculator.module.css";

const QuoteCalculator = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [quoteData, setQuoteData] = useState(null);

  const [formData, setFormData] = useState({
    propertyType: "",
    projectType: "",
    timeline: "",
    serviceType: "",
    roofSize: "",
    stories: "",
    materialQuality: "",
    budgetRange: "",
    specialRequirements: "",
  });

  const [estimatedPrice, setEstimatedPrice] = useState(null);

  // Reset when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setFormData({
        propertyType: "",
        projectType: "",
        timeline: "",
        serviceType: "",
        roofSize: "",
        stories: "",
        materialQuality: "",
        budgetRange: "",
        specialRequirements: "",
      });
      setEstimatedPrice(null);
      setQuoteData(null);
    }
  }, [isOpen]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const calculateEstimate = () => {
    let basePrice = 0;

    const propertyMultipliers = {
      residential: 1,
      commercial: 1.8,
      industrial: 2.5,
    };

    const serviceBasePrices = {
      "residential-roofing": 500000,
      "commercial-roofing": 800000,
      "roof-repair": 150000,
      "roof-replacement": 350000,
      maintenance: 75000,
      waterproofing: 250000,
      "new-construction": 1000000,
      renovation: 450000,
      inspection: 50000,
    };

    const materialMultipliers = {
      economy: 0.8,
      standard: 1,
      premium: 1.5,
      luxury: 2.2,
    };

    if (
      formData.serviceType &&
      formData.propertyType &&
      formData.materialQuality
    ) {
      basePrice = serviceBasePrices[formData.serviceType] || 300000;
      basePrice *= propertyMultipliers[formData.propertyType] || 1;
      basePrice *= materialMultipliers[formData.materialQuality] || 1;

      if (formData.roofSize === "small") basePrice *= 0.7;
      if (formData.roofSize === "large") basePrice *= 1.5;
      if (formData.roofSize === "x-large") basePrice *= 2.2;

      if (formData.stories === "2") basePrice *= 1.3;
      if (formData.stories === "3+") basePrice *= 1.8;
    }

    return Math.round(basePrice);
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);

      if (currentStep === 3) {
        const estimate = calculateEstimate();
        setEstimatedPrice(estimate);

        // Prepare quote data for the form
        setQuoteData({
          ...formData,
          estimatedPrice: estimate,
        });
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFormSuccess = () => {
    // Close modal after successful submission
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  // Step 4 shows the contact form with quote data
  if (currentStep === 4) {
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h2>Complete Your Quote Request</h2>
            <button className={styles.closeButton} onClick={onClose}>
              ×
            </button>
          </div>

          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: "100%" }}
            ></div>
          </div>

          <div className={styles.formContainer}>
            <ContactForm
              isQuote={true}
              quoteData={quoteData}
              onSuccess={handleFormSuccess}
              showTitle={false}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Get Your Free Quote</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${(currentStep / 4) * 100}%` }}
          ></div>
        </div>

        <div className={styles.calculatorContent}>
          {/* Step 1: Project Details */}
          {currentStep === 1 && (
            <div className={styles.step}>
              <h3>Project Details</h3>
              <div className={styles.formGroup}>
                <label>Property Type *</label>
                <div className={styles.optionGrid}>
                  {["residential", "commercial", "industrial"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`${styles.optionButton} ${
                        formData.propertyType === type ? styles.selected : ""
                      }`}
                      onClick={() => handleInputChange("propertyType", type)}
                    >
                      {type === "residential" && "🏠 Residential"}
                      {type === "commercial" && "🏢 Commercial"}
                      {type === "industrial" && "🏭 Industrial"}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Project Type *</label>
                <div className={styles.optionGrid}>
                  {[
                    "new-construction",
                    "renovation",
                    "repair",
                    "maintenance",
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`${styles.optionButton} ${
                        formData.projectType === type ? styles.selected : ""
                      }`}
                      onClick={() => handleInputChange("projectType", type)}
                    >
                      {type === "new-construction" && "🆕 New Construction"}
                      {type === "renovation" && "🔨 Renovation"}
                      {type === "repair" && "🔧 Repair"}
                      {type === "maintenance" && "🛠️ Maintenance"}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Timeline *</label>
                <div className={styles.optionGrid}>
                  {["urgent", "2-weeks", "1-month", "flexible"].map(
                    (timeline) => (
                      <button
                        key={timeline}
                        type="button"
                        className={`${styles.optionButton} ${
                          formData.timeline === timeline ? styles.selected : ""
                        }`}
                        onClick={() => handleInputChange("timeline", timeline)}
                      >
                        {timeline === "urgent" && "⚡ Urgent (Within week)"}
                        {timeline === "2-weeks" && "📅 2 Weeks"}
                        {timeline === "1-month" && "🗓️ 1 Month"}
                        {timeline === "flexible" && "🔄 Flexible"}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Service Details */}
          {currentStep === 2 && (
            <div className={styles.step}>
              <h3>Service Details</h3>
              <div className={styles.formGroup}>
                <label>Service Needed *</label>
                <div className={styles.optionGrid}>
                  {[
                    "residential-roofing",
                    "commercial-roofing",
                    "roof-repair",
                    "roof-replacement",
                    "maintenance",
                    "waterproofing",
                    "new-construction",
                    "renovation",
                    "inspection",
                  ].map((service) => (
                    <button
                      key={service}
                      type="button"
                      className={`${styles.optionButton} ${
                        formData.serviceType === service ? styles.selected : ""
                      }`}
                      onClick={() => handleInputChange("serviceType", service)}
                    >
                      {service === "residential-roofing" &&
                        "🏠 Residential Roofing"}
                      {service === "commercial-roofing" &&
                        "🏢 Commercial Roofing"}
                      {service === "roof-repair" && "🔧 Roof Repair"}
                      {service === "roof-replacement" && "🔄 Roof Replacement"}
                      {service === "maintenance" && "🛠️ Maintenance"}
                      {service === "waterproofing" && "🌧️ Waterproofing"}
                      {service === "new-construction" && "👷 New Construction"}
                      {service === "renovation" && "🔨 Renovation"}
                      {service === "inspection" && "📋 Roof Inspection"}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Approximate Roof Size *</label>
                <div className={styles.optionGrid}>
                  {["small", "medium", "large", "x-large"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`${styles.optionButton} ${
                        formData.roofSize === size ? styles.selected : ""
                      }`}
                      onClick={() => handleInputChange("roofSize", size)}
                    >
                      {size === "small" && "📐 Small (< 1000 sq ft)"}
                      {size === "medium" && "📏 Medium (1000-2000 sq ft)"}
                      {size === "large" && "📊 Large (2000-4000 sq ft)"}
                      {size === "x-large" && "🏰 X-Large (> 4000 sq ft)"}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Number of Stories *</label>
                <div className={styles.optionGrid}>
                  {["1", "2", "3+"].map((story) => (
                    <button
                      key={story}
                      type="button"
                      className={`${styles.optionButton} ${
                        formData.stories === story ? styles.selected : ""
                      }`}
                      onClick={() => handleInputChange("stories", story)}
                    >
                      {story === "1" && "1️⃣ Single Story"}
                      {story === "2" && "2️⃣ Two Stories"}
                      {story === "3+" && "🏢 Three+ Stories"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Materials & Budget */}
          {currentStep === 3 && (
            <div className={styles.step}>
              <h3>Materials & Budget</h3>
              <div className={styles.formGroup}>
                <label>Preferred Material Quality *</label>
                <div className={styles.optionGrid}>
                  {["economy", "standard", "premium", "luxury"].map(
                    (quality) => (
                      <button
                        key={quality}
                        type="button"
                        className={`${styles.optionButton} ${
                          formData.materialQuality === quality
                            ? styles.selected
                            : ""
                        }`}
                        onClick={() =>
                          handleInputChange("materialQuality", quality)
                        }
                      >
                        {quality === "economy" && "💰 Economy"}
                        {quality === "standard" && "⭐ Standard"}
                        {quality === "premium" && "💎 Premium"}
                        {quality === "luxury" && "👑 Luxury"}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Budget Range *</label>
                <div className={styles.optionGrid}>
                  {["100k-500k", "500k-1M", "1M-3M", "3M+", "not-sure"].map(
                    (range) => (
                      <button
                        key={range}
                        type="button"
                        className={`${styles.optionButton} ${
                          formData.budgetRange === range ? styles.selected : ""
                        }`}
                        onClick={() => handleInputChange("budgetRange", range)}
                      >
                        {range === "100k-500k" && "💵 ₦100K - ₦500K"}
                        {range === "500k-1M" && "💰 ₦500K - ₦1M"}
                        {range === "1M-3M" && "💳 ₦1M - ₦3M"}
                        {range === "3M+" && "🏦 ₦3M+"}
                        {range === "not-sure" && "❓ Not Sure"}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Special Requirements</label>
                <textarea
                  className={styles.textarea}
                  placeholder="Any specific materials, designs, or special requirements..."
                  value={formData.specialRequirements}
                  onChange={(e) =>
                    handleInputChange("specialRequirements", e.target.value)
                  }
                  rows="3"
                />
              </div>

              {estimatedPrice && (
                <div className={styles.previewEstimate}>
                  <h4>Estimated Price Preview</h4>
                  <div className={styles.previewPrice}>
                    {new Intl.NumberFormat("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    }).format(estimatedPrice)}
                  </div>
                  <p className={styles.previewNote}>
                    * Final price may vary after site inspection
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className={styles.navigation}>
            {currentStep > 1 && (
              <Button type="button" variant="secondary" onClick={prevStep}>
                ← Back
              </Button>
            )}

            {currentStep < 4 && (
              <Button
                type="button"
                variant="primary"
                onClick={nextStep}
                disabled={
                  (currentStep === 1 &&
                    (!formData.propertyType ||
                      !formData.projectType ||
                      !formData.timeline)) ||
                  (currentStep === 2 &&
                    (!formData.serviceType ||
                      !formData.roofSize ||
                      !formData.stories)) ||
                  (currentStep === 3 &&
                    (!formData.materialQuality || !formData.budgetRange))
                }
              >
                {currentStep === 3 ? "Get Quote →" : "Continue →"}
              </Button>
            )}
          </div>

          <div className={styles.stepIndicator}>Step {currentStep} of 3</div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCalculator;

// const QuoteCalculator = ({ isOpen, onClose }) => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     // Step 1: Project Details
//     propertyType: "",
//     projectType: "",
//     timeline: "",

//     // Step 2: Service Details
//     serviceType: "",
//     roofSize: "",
//     stories: "",

//     // Step 3: Materials & Budget
//     materialQuality: "",
//     budgetRange: "",
//     specialRequirements: "",

//     // Step 4: Contact Info
//     fullName: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   const [estimatedPrice, setEstimatedPrice] = useState(null);

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const calculateEstimate = () => {
//     // Base pricing logic (in Naira)
//     let basePrice = 0;

//     // Property type multipliers
//     const propertyMultipliers = {
//       residential: 1,
//       commercial: 1.8,
//       industrial: 2.5,
//     };

//     // Service type base prices
//     const serviceBasePrices = {
//       "new-installation": 500000,
//       "roof-repair": 150000,
//       "roof-replacement": 350000,
//       maintenance: 75000,
//       waterproofing: 250000,
//       construction: 1000000,
//     };

//     // Material quality multipliers
//     const materialMultipliers = {
//       economy: 0.8,
//       standard: 1,
//       premium: 1.5,
//       luxury: 2.2,
//     };

//     if (
//       formData.serviceType &&
//       formData.propertyType &&
//       formData.materialQuality
//     ) {
//       basePrice = serviceBasePrices[formData.serviceType] || 300000;
//       basePrice *= propertyMultipliers[formData.propertyType] || 1;
//       basePrice *= materialMultipliers[formData.materialQuality] || 1;

//       // Adjust for roof size
//       if (formData.roofSize === "small") basePrice *= 0.7;
//       if (formData.roofSize === "large") basePrice *= 1.5;
//       if (formData.roofSize === "x-large") basePrice *= 2.2;

//       // Adjust for stories
//       if (formData.stories === "2") basePrice *= 1.3;
//       if (formData.stories === "3+") basePrice *= 1.8;
//     }

//     return Math.round(basePrice);
//   };

//   const nextStep = () => {
//     if (currentStep < 4) {
//       setCurrentStep(currentStep + 1);

//       // Calculate estimate when moving to step 4
//       if (currentStep === 3) {
//         const estimate = calculateEstimate();
//         setEstimatedPrice(estimate);
//       }
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission - connect to your backend
//     console.log("Quote request:", formData);
//     alert(
//       "Thank you! Your quote request has been submitted. We will contact you within 24 hours."
//     );
//     onClose();
//   };

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat("en-NG", {
//       style: "currency",
//       currency: "NGN",
//     }).format(price);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className={styles.overlay}>
//       <div className={styles.modal}>
//         <div className={styles.modalHeader}>
//           <h2>Get Your Free Quote</h2>
//           <button className={styles.closeButton} onClick={onClose}>
//             ×
//           </button>
//         </div>

//         <div className={styles.progressBar}>
//           <div
//             className={styles.progressFill}
//             style={{ width: `${(currentStep / 4) * 100}%` }}
//           ></div>
//         </div>

//         <form onSubmit={handleSubmit} className={styles.form}>
//           {/* Step 1: Project Details */}
//           {currentStep === 1 && (
//             <div className={styles.step}>
//               <h3>Project Details</h3>
//               <div className={styles.formGroup}>
//                 <label>Property Type *</label>
//                 <div className={styles.optionGrid}>
//                   {["residential", "commercial", "industrial"].map((type) => (
//                     <button
//                       key={type}
//                       type="button"
//                       className={`${styles.optionButton} ${
//                         formData.propertyType === type ? styles.selected : ""
//                       }`}
//                       onClick={() => handleInputChange("propertyType", type)}
//                     >
//                       {type === "residential" && "🏠 Residential"}
//                       {type === "commercial" && "🏢 Commercial"}
//                       {type === "industrial" && "🏭 Industrial"}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className={styles.formGroup}>
//                 <label>Project Type *</label>
//                 <div className={styles.optionGrid}>
//                   {[
//                     "new-construction",
//                     "renovation",
//                     "repair",
//                     "maintenance",
//                   ].map((type) => (
//                     <button
//                       key={type}
//                       type="button"
//                       className={`${styles.optionButton} ${
//                         formData.projectType === type ? styles.selected : ""
//                       }`}
//                       onClick={() => handleInputChange("projectType", type)}
//                     >
//                       {type === "new-construction" && "🆕 New Construction"}
//                       {type === "renovation" && "🔨 Renovation"}
//                       {type === "repair" && "🔧 Repair"}
//                       {type === "maintenance" && "🛠️ Maintenance"}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className={styles.formGroup}>
//                 <label>Timeline *</label>
//                 <div className={styles.optionGrid}>
//                   {["urgent", "2-weeks", "1-month", "flexible"].map(
//                     (timeline) => (
//                       <button
//                         key={timeline}
//                         type="button"
//                         className={`${styles.optionButton} ${
//                           formData.timeline === timeline ? styles.selected : ""
//                         }`}
//                         onClick={() => handleInputChange("timeline", timeline)}
//                       >
//                         {timeline === "urgent" && "⚡ Urgent (Within week)"}
//                         {timeline === "2-weeks" && "📅 2 Weeks"}
//                         {timeline === "1-month" && "🗓️ 1 Month"}
//                         {timeline === "flexible" && "🔄 Flexible"}
//                       </button>
//                     )
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Step 2: Service Details */}
//           {currentStep === 2 && (
//             <div className={styles.step}>
//               <h3>Service Details</h3>
//               <div className={styles.formGroup}>
//                 <label>Service Needed *</label>
//                 <div className={styles.optionGrid}>
//                   {[
//                     "new-installation",
//                     "roof-repair",
//                     "roof-replacement",
//                     "maintenance",
//                     "waterproofing",
//                     "construction",
//                   ].map((service) => (
//                     <button
//                       key={service}
//                       type="button"
//                       className={`${styles.optionButton} ${
//                         formData.serviceType === service ? styles.selected : ""
//                       }`}
//                       onClick={() => handleInputChange("serviceType", service)}
//                     >
//                       {service === "new-installation" && "🏗️ New Installation"}
//                       {service === "roof-repair" && "🔧 Roof Repair"}
//                       {service === "roof-replacement" && "🔄 Roof Replacement"}
//                       {service === "maintenance" && "🛠️ Maintenance"}
//                       {service === "waterproofing" && "🌧️ Waterproofing"}
//                       {service === "construction" && "👷 Construction"}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className={styles.formGroup}>
//                 <label>Approximate Roof Size *</label>
//                 <div className={styles.optionGrid}>
//                   {["small", "medium", "large", "x-large"].map((size) => (
//                     <button
//                       key={size}
//                       type="button"
//                       className={`${styles.optionButton} ${
//                         formData.roofSize === size ? styles.selected : ""
//                       }`}
//                       onClick={() => handleInputChange("roofSize", size)}
//                     >
//                       {size === "small" && "📐 Small (< 1000 sq ft)"}
//                       {size === "medium" && "📏 Medium (1000-2000 sq ft)"}
//                       {size === "large" && "📊 Large (2000-4000 sq ft)"}
//                       {size === "x-large" && "🏰 X-Large (> 4000 sq ft)"}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className={styles.formGroup}>
//                 <label>Number of Stories *</label>
//                 <div className={styles.optionGrid}>
//                   {["1", "2", "3+"].map((story) => (
//                     <button
//                       key={story}
//                       type="button"
//                       className={`${styles.optionButton} ${
//                         formData.stories === story ? styles.selected : ""
//                       }`}
//                       onClick={() => handleInputChange("stories", story)}
//                     >
//                       {story === "1" && "1️⃣ Single Story"}
//                       {story === "2" && "2️⃣ Two Stories"}
//                       {story === "3+" && "🏢 Three+ Stories"}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Step 3: Materials & Budget */}
//           {currentStep === 3 && (
//             <div className={styles.step}>
//               <h3>Materials & Budget</h3>
//               <div className={styles.formGroup}>
//                 <label>Preferred Material Quality *</label>
//                 <div className={styles.optionGrid}>
//                   {["economy", "standard", "premium", "luxury"].map(
//                     (quality) => (
//                       <button
//                         key={quality}
//                         type="button"
//                         className={`${styles.optionButton} ${
//                           formData.materialQuality === quality
//                             ? styles.selected
//                             : ""
//                         }`}
//                         onClick={() =>
//                           handleInputChange("materialQuality", quality)
//                         }
//                       >
//                         {quality === "economy" && "💰 Economy"}
//                         {quality === "standard" && "⭐ Standard"}
//                         {quality === "premium" && "💎 Premium"}
//                         {quality === "luxury" && "👑 Luxury"}
//                       </button>
//                     )
//                   )}
//                 </div>
//               </div>

//               <div className={styles.formGroup}>
//                 <label>Budget Range *</label>
//                 <div className={styles.optionGrid}>
//                   {["100k-500k", "500k-1M", "1M-3M", "3M+", "not-sure"].map(
//                     (range) => (
//                       <button
//                         key={range}
//                         type="button"
//                         className={`${styles.optionButton} ${
//                           formData.budgetRange === range ? styles.selected : ""
//                         }`}
//                         onClick={() => handleInputChange("budgetRange", range)}
//                       >
//                         {range === "100k-500k" && "💵 ₦100K - ₦500K"}
//                         {range === "500k-1M" && "💰 ₦500K - ₦1M"}
//                         {range === "1M-3M" && "💳 ₦1M - ₦3M"}
//                         {range === "3M+" && "🏦 ₦3M+"}
//                         {range === "not-sure" && "❓ Not Sure"}
//                       </button>
//                     )
//                   )}
//                 </div>
//               </div>

//               <div className={styles.formGroup}>
//                 <label>Special Requirements</label>
//                 <textarea
//                   className={styles.textarea}
//                   placeholder="Any specific materials, designs, or special requirements..."
//                   value={formData.specialRequirements}
//                   onChange={(e) =>
//                     handleInputChange("specialRequirements", e.target.value)
//                   }
//                   rows="3"
//                 />
//               </div>
//             </div>
//           )}

//           {/* Step 4: Contact & Estimate */}
//           {currentStep === 4 && (
//             <div className={styles.step}>
//               <h3>Contact Information</h3>

//               {estimatedPrice && (
//                 <div className={styles.estimateBox}>
//                   <h4>Estimated Price Range</h4>
//                   <div className={styles.price}>
//                     {formatPrice(estimatedPrice)}
//                   </div>
//                   <p className={styles.estimateNote}>
//                     * This is an automated estimate. Final price may vary based
//                     on site inspection.
//                   </p>
//                 </div>
//               )}

//               <div className={styles.formRow}>
//                 <div className={styles.formGroup}>
//                   <label>Full Name *</label>
//                   <input
//                     type="text"
//                     className={styles.input}
//                     value={formData.fullName}
//                     onChange={(e) =>
//                       handleInputChange("fullName", e.target.value)
//                     }
//                     required
//                   />
//                 </div>
//                 <div className={styles.formGroup}>
//                   <label>Email *</label>
//                   <input
//                     type="email"
//                     className={styles.input}
//                     value={formData.email}
//                     onChange={(e) => handleInputChange("email", e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className={styles.formRow}>
//                 <div className={styles.formGroup}>
//                   <label>Phone Number *</label>
//                   <input
//                     type="tel"
//                     className={styles.input}
//                     value={formData.phone}
//                     onChange={(e) => handleInputChange("phone", e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className={styles.formGroup}>
//                   <label>Project Address</label>
//                   <input
//                     type="text"
//                     className={styles.input}
//                     value={formData.address}
//                     onChange={(e) =>
//                       handleInputChange("address", e.target.value)
//                     }
//                     placeholder="Where is the project located?"
//                   />
//                 </div>
//               </div>

//               <div className={styles.consent}>
//                 <input type="checkbox" required />
//                 <label>
//                   I agree to be contacted by RoofMaster regarding this quote
//                   request
//                 </label>
//               </div>
//             </div>
//           )}

//           <div className={styles.navigation}>
//             {currentStep > 1 && (
//               <Button type="button" variant="secondary" onClick={prevStep}>
//                 ← Back
//               </Button>
//             )}

//             {currentStep < 4 ? (
//               <Button
//                 type="button"
//                 variant="primary"
//                 onClick={nextStep}
//                 disabled={
//                   (currentStep === 1 &&
//                     (!formData.propertyType ||
//                       !formData.projectType ||
//                       !formData.timeline)) ||
//                   (currentStep === 2 &&
//                     (!formData.serviceType ||
//                       !formData.roofSize ||
//                       !formData.stories)) ||
//                   (currentStep === 3 &&
//                     (!formData.materialQuality || !formData.budgetRange))
//                 }
//               >
//                 Continue →
//               </Button>
//             ) : (
//               <Button type="submit" variant="accent">
//                 📧 Get My Free Quote
//               </Button>
//             )}
//           </div>
//         </form>

//         <div className={styles.footerNote}>
//           <p>
//             🔒 Your information is secure and will only be used to provide your
//             quote
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuoteCalculator;
