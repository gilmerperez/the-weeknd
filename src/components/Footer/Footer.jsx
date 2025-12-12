import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { useState, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { SiApple, SiSpotify, SiSoundcloud } from "react-icons/si";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
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
            <a
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
              className={styles.socialLink}
              href="https://www.facebook.com/theweeknd"
            >
              <FaFacebook />
            </a>
            <a
              target="_blank"
              aria-label="X (Twitter)"
              rel="noopener noreferrer"
              className={styles.socialLink}
              href="https://twitter.com/TheWeeknd"
            >
              <FaXTwitter />
            </a>
            <a
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
              className={styles.socialLink}
              href="https://www.instagram.com/theweeknd/"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              aria-label="YouTube"
              rel="noopener noreferrer"
              className={styles.socialLink}
              href="https://www.youtube.com/user/TheWeekndVEVO"
            >
              <FaYoutube />
            </a>
            <a
              target="_blank"
              aria-label="Apple Music"
              rel="noopener noreferrer"
              className={styles.socialLink}
              href="https://music.apple.com/us/artist/the-weeknd/479756766"
            >
              <SiApple />
            </a>
            <a
              target="_blank"
              aria-label="Spotify"
              rel="noopener noreferrer"
              className={styles.socialLink}
              href="https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
            >
              <SiSpotify />
            </a>
            <a
              target="_blank"
              aria-label="SoundCloud"
              rel="noopener noreferrer"
              className={styles.socialLink}
              href="https://soundcloud.com/theweeknd"
            >
              <SiSoundcloud />
            </a>
            <button
              onClick={toggleTheme}
              className={styles.themeToggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
            </button>
          </section>

          {/* Navigation links */}
          <nav className={styles.navLinks}>
            {/* Terms */}
            <Link to="/terms-of-sale" className={styles.navLink}>
              TERMS
            </Link>
            {/* Privacy */}
            <Link to="/privacy-policy" className={styles.navLink}>
              PRIVACY
            </Link>
            {/* Cookie choices */}
            <button className={styles.navLink}>COOKIE CHOICES</button>
            {/* Help and support */}
            <Link to="/help" className={styles.navLink}>
              HELP AND SUPPORT
            </Link>
            {/* Do not sell my information */}
            <Link to="/legal-notice" className={styles.navLink}>
              DO NOT SELL MY INFORMATION
            </Link>
          </nav>

          {/* Accessibility statement */}
          <section className={styles.accessibilityStatement}>
            <p>
              IF YOU ARE USING A SCREEN READER AND ARE HAVING PROBLEMS USING THIS WEBSITE, PLEASE CALL{" "}
              <a href="tel:8666824413" className={styles.phoneLink}>
                866-682-4413
              </a>{" "}
              FOR ASSISTANCE.
            </p>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;
