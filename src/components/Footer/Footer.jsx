import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { SiApple, SiSpotify, SiSoundcloud } from "react-icons/si";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
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
          </section>

          {/* Navigation links */}
          <nav className={styles.navLinks}>
            <span>|</span>
            <Link to="/terms-of-service" className={styles.navLink}>
              TERMS
            </Link>
            <span>|</span>
            <Link to="/privacy-policy" className={styles.navLink}>
              PRIVACY
            </Link>
            <span>|</span>
            <button className={styles.navLink}>COOKIE CHOICES</button>
            <span>|</span>
            <Link to="/help-and-support" className={styles.navLink}>
              HELP & SUPPORT
            </Link>
            <span>|</span>
            <Link to="/personal-information" className={styles.navLink}>
              DO NOT SELL MY PERSONAL INFORMATION
            </Link>
            <span>|</span>
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
