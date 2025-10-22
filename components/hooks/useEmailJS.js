"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
// import { EMAILJS_CONFIG } from "@/lib/emailjs-config";
import { EMAILJS_CONFIG } from "../lib/emailjs-config";

// export const useEmailJS = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [error, setError] = useState(null);

//   const sendEmail = async (templateId, templateParams) => {
//     setIsLoading(true);
//     setError(null);
//     setIsSuccess(false);

//     try {
//       const result = await emailjs.send(
//         EMAILJS_CONFIG.SERVICE_ID,
//         templateId,
//         templateParams,
//         EMAILJS_CONFIG.PUBLIC_KEY
//       );

//       setIsSuccess(true);
//       return { success: true, result };
//     } catch (err) {
//       const errorMessage =
//         err.text || "Failed to send message. Please try again.";
//       setError(errorMessage);
//       return { success: false, error: errorMessage };
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const reset = () => {
//     setIsLoading(false);
//     setIsSuccess(false);
//     setError(null);
//   };

//   return {
//     sendEmail,
//     isLoading,
//     isSuccess,
//     error,
//     reset,
//   };
// };

export const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = async (templateId, templateParams) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      console.log("🚀 EmailJS Send Attempt:");
      console.log("Service ID:", EMAILJS_CONFIG.SERVICE_ID);
      console.log("Template ID:", templateId);
      console.log(
        "Public Key:",
        EMAILJS_CONFIG.PUBLIC_KEY ? "✓ Present" : "✗ Missing"
      );
      console.log("Template Params:", JSON.stringify(templateParams, null, 2));

      // Check if emailjs is properly initialized
      if (!emailjs) {
        throw new Error("EmailJS not loaded properly");
      }

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        templateId,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("✅ EmailJS Success:", result);
      setIsSuccess(true);
      return { success: true, result };
    } catch (err) {
      console.error("❌ EmailJS Error:", err);

      let errorMessage = "Failed to send message";

      if (err.text) {
        errorMessage = `EmailJS: ${err.text}`;
      } else if (err.message) {
        errorMessage = `Error: ${err.message}`;
      }

      // More specific error handling
      if (err.status === 400) {
        errorMessage = "Bad request - check your template parameters";
      } else if (err.status === 401) {
        errorMessage = "Unauthorized - check your Public Key";
      } else if (err.status === 404) {
        errorMessage = "Service or Template not found - check your IDs";
      }

      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setIsLoading(false);
    setIsSuccess(false);
    setError(null);
  };

  return {
    sendEmail,
    isLoading,
    isSuccess,
    error,
    reset,
  };
};
