import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { useState, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { SiApple, SiSpotify, SiSoundcloud } from "react-icons/si";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer({ onCookieChoicesClick }) {
  // * Theme state
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(() => {
    const initialTheme = getInitialTheme();
    document.documentElement.setAttribute("data-theme", initialTheme);
    return initialTheme;
  });

  // Save theme to localStorage and update DOM
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Toggle theme handler
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <footer>
        <div className={styles.footerContainer}>
          {/* Social media icons */}
          <section className={styles.socialIcons}>
            {/* Facebook */}
            <a
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
              className={styles.socialLink}
              href="https://www.facebook.com/theweeknd"
            >
              <FaFacebook />
            </a>
            {/* X (Twitter) */}
            <a
              target="_blank"
              aria-label="X (Twitter)"
              rel="noopener noreferrer"
              className={styles.socialLink}
              href="https://twitter.com/TheWeeknd"
            >
              <FaXTwitter />
            </a>
            {/* Instagram */}
            <a
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
              className={styles.socialLink}
              href="https://www.instagram.com/theweeknd/"
            >
              <FaInstagram />
            </a>
            {/* YouTube */}
            <a
              target="_blank"
              aria-label="YouTube"
              rel="noopener noreferrer"
              className={styles.socialLink}
              href="https://www.youtube.com/user/TheWeekndVEVO"
            >
              <FaYoutube />
            </a>
            {/* Apple Music */}
            <a
              target="_blank"
              aria-label="Apple Music"
              rel="noopener noreferrer"
              className={styles.socialLink}
              href="https://music.apple.com/us/artist/the-weeknd/479756766"
            >
              <SiApple />
            </a>
            {/* Spotify */}
            <a
              target="_blank"
              aria-label="Spotify"
              rel="noopener noreferrer"
              className={styles.socialLink}
              href="https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
            >
              <SiSpotify />
            </a>
            {/* SoundCloud */}
            <a
              target="_blank"
              aria-label="SoundCloud"
              rel="noopener noreferrer"
              className={styles.socialLink}
              href="https://soundcloud.com/theweeknd"
            >
              <SiSoundcloud />
            </a>
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className={styles.themeToggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <HiOutlineMoon /> : <HiOutlineSun />}
            </button>
          </section>

          {/* Navigation links */}
          <nav className={styles.navLinks}>
            {/* Terms */}
            <Link to="/terms" className={styles.navLink}>
              Terms
            </Link>
            {/* Privacy */}
            <Link to="/privacy" className={styles.navLink}>
              Privacy
            </Link>
            {/* Cookie choices */}
            <button onClick={onCookieChoicesClick} className={styles.navLink}>
              Cookie Choices
            </button>
            {/* Help and support */}
            <Link to="/help" className={styles.navLink}>
              Help and Support
            </Link>
            {/* Do not sell my information */}
            <Link to="/legal" className={styles.navLink}>
              Do Not Sell My Information
            </Link>
          </nav>

          {/* Accessibility statement */}
          <section className={styles.accessibilityStatement}>
            <p>
              If you are using a screen reader and are having problems using this website, please call{" "}
              <a href="tel:8666824413" className={styles.phoneLink}>
                866-682-4413
              </a>{" "}
              for assistance.
            </p>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;
