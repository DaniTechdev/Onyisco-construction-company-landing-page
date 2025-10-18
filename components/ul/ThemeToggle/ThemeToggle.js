"use client";
import { useState, useEffect } from "react";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className={styles.toggleTrack}>
        <div
          className={`${styles.toggleThumb} ${
            isDark ? styles.dark : styles.light
          }`}
        >
          {isDark ? "🌙" : "☀️"}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
