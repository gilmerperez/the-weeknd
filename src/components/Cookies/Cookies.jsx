import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Cookies.module.css";
import {
  getCookiePreferences,
  getDefaultConsentState,
  saveCookiePreferences,
  applyCookiePreferences,
} from "../../utils/cookieManager";

function Cookies({ isOpen, onClose }) {
  // * Cookie preferences state - initialize with saved preferences or default
  const [cookiePreferences, setCookiePreferences] = useState(() => {
    const savedPreferences = getCookiePreferences();
    return savedPreferences || getDefaultConsentState();
  });

  // Handle checkbox change
  const handleCheckboxChange = (cookieType) => {
    // Prevent changing essential cookies
    if (cookieType === "essential") return;
    // Update cookie preferences
    setCookiePreferences((prev) => ({
      ...prev,
      [cookieType]: !prev[cookieType],
    }));
  };

  // Handle confirm button click
  const handleConfirm = () => {
    // Save preferences to localStorage
    saveCookiePreferences(cookiePreferences);
    // Apply preferences (enable/disable scripts)
    applyCookiePreferences(cookiePreferences);
    // Close the modal
    onClose();
  };

  // * If cookies are not open, return null
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className={styles.overlay} onClick={onClose}></div>

      {/* Cookies modal */}
      <div className={styles.cookiesContainer}>
        {/* UMG logo */}
        <div className={styles.logoContainer}>
          <img src="/images/umg-logo.png" alt="Universal Music Group Logo" className={styles.logo} />
        </div>

        {/* Information we collect about you */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Information We Collect About You</h2>
          <p className={styles.paragraph}>
            We want to be transparent about the data we and our partners collect and how we use it, so you can best
            exercise control over your personal data. For more information, please see our{" "}
            <Link to="/privacy" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        {/* Information our partners collect */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Information Our Partners Collect</h2>
          <p className={styles.paragraph}>
            We use cookies or other tracking technologies from the following partners. These are used to personalize
            your experience, connect with social networks, and tailor advertising to better match your interests. This
            may include tracking across our sites, sites operated by third parties, and multiple devices. For more
            information{" "}
            <a href="https://cookies.umusic.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              visit tracking technologies
            </a>
            .
          </p>
        </section>

        {/* Cookie type checkboxes */}
        <section className={styles.checkboxSection}>
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                disabled
                readOnly
                type="checkbox"
                className={styles.checkbox}
                checked={cookiePreferences.essential}
                aria-label="Essential cookies (required)"
              />
              <span className={styles.checkboxText}>Essential</span>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                className={styles.checkbox}
                aria-label="Function cookies"
                checked={cookiePreferences.function}
                onChange={() => handleCheckboxChange("function")}
              />
              <span className={styles.checkboxText}>Function</span>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                className={styles.checkbox}
                aria-label="Analytics cookies"
                checked={cookiePreferences.analytics}
                onChange={() => handleCheckboxChange("analytics")}
              />
              <span className={styles.checkboxText}>Analytics</span>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                className={styles.checkbox}
                aria-label="Advertising cookies"
                checked={cookiePreferences.advertising}
                onChange={() => handleCheckboxChange("advertising")}
              />
              <span className={styles.checkboxText}>Advertising</span>
            </label>
          </div>
        </section>

        {/* Confirm button */}
        <button onClick={handleConfirm} className={styles.confirmButton} aria-label="Confirm cookie preferences">
          Confirm
        </button>
      </div>
    </>
  );
}

export default Cookies;
