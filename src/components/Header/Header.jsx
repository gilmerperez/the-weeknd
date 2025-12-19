import styles from "./Header.module.css";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  HiOutlineMenu,
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineShoppingCart,
  HiOutlineX,
} from "react-icons/hi";

function Header() {
  // * Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // * Get current location to determine if on home page
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // * Collections dropdown state
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const [isMobileCollectionsOpen, setIsMobileCollectionsOpen] = useState(false);

  // * Sticky header state
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;

    // Update header state on scroll
    const updateHeader = () => {
      const scrollThreshold = 10; // Minimum scroll distance to trigger show/hide
      const currentScrollY = window.scrollY;
      // Determine if header should be sticky (scrolled past initial position)
      setIsSticky(currentScrollY > 0);
      // Show/hide header based on scroll direction
      if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down - hide header
          setIsVisible(false);
        } else {
          // Scrolling up - show header
          setIsVisible(true);
        }
        lastScrollY = currentScrollY;
      }
      ticking = false;
    };

    // Update header state on scroll
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", onScroll, { passive: true });

    // Remove scroll event listener on unmount
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header className={`${isSticky ? styles.sticky : ""} ${!isVisible ? styles.hidden : ""}`}>
        <div className={styles.headerContainer}>
          {/* Navigation */}
          <nav className={styles.navLeft}>
            {/* Home */}
            {!isHomePage && (
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
            )}
            {/* Film */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
              href="https://www.lionsgate.com/movies/hurry-up-tomorrow"
            >
              Film
            </a>
            {/* Tour */}
            <Link to="/tour" className={styles.navLink}>
              Tour
            </Link>
            {/* Music */}
            <Link to="/music" className={styles.navLink}>
              Music
            </Link>
            {/* Clothing */}
            <Link to="/clothing" className={styles.navLink}>
              Clothing
            </Link>
            {/* Collections */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => setIsCollectionsOpen(true)}
              onMouseLeave={() => setIsCollectionsOpen(false)}
            >
              <button className={styles.navLink}>Collections</button>
              {isCollectionsOpen && (
                <ul className={styles.dropdownMenu}>
                  <li>All Collections</li>
                  <li>House of Balloons</li>
                  <li>Thursday</li>
                  <li>Echoes of Silence</li>
                  <li>Kissland</li>
                  <li>Beauty Behind the Madness</li>
                  <li>Starboy</li>
                  <li>My Dear Melancholy,</li>
                  <li>After Hours</li>
                  <li>Dawn FM</li>
                  <li>Hurry Up Tomorrow</li>
                  <li>The Highlights</li>
                </ul>
              )}
            </div>
          </nav>

          {/* Hamburger menu */}
          <button
            aria-expanded={menuOpen}
            className={styles.hamburger}
            aria-label="Open Navigation Menu"
            onClick={() => setMenuOpen(true)}
          >
            <HiOutlineMenu />
          </button>

          {/* Icons */}
          <div className={styles.navRight}>
            {/* Search */}
            <button className={styles.iconButton} aria-label="Search">
              <HiOutlineSearch />
            </button>
            {/* Account */}
            <Link to="/account" className={styles.iconButton} aria-label="Account">
              <HiOutlineUser />
            </Link>
            {/* Newsletter */}
            <button className={styles.iconButton} aria-label="Newsletter">
              <HiOutlineMail />
            </button>
            {/* Shopping cart */}
            <button className={styles.iconButton} aria-label="Shopping Cart">
              <HiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </header>

      {/* Menu sidebar */}
      {menuOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            className={styles.sidebarOverlay}
            onClick={() => setMenuOpen(false)}
          >
            <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
              {/* Sidebar close button */}
              <button
                className={styles.sidebarClose}
                aria-label="Close Navigation Menu"
                onClick={() => setMenuOpen(false)}
              >
                <HiOutlineX />
              </button>
              {/* Sidebar navigation */}
              <nav className={styles.sidebarNav}>
                {/* Home */}
                {!isHomePage && (
                  <Link to="/" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                )}
                {/* Film */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sidebarNavLink}
                  onClick={() => setMenuOpen(false)}
                  href="https://www.lionsgate.com/movies/hurry-up-tomorrow"
                >
                  Film
                </a>
                {/* Tour */}
                <Link to="/tour" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  Tour
                </Link>
                {/* Music */}
                <Link to="/music" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  Music
                </Link>
                {/* Clothing */}
                <Link to="/clothing" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  Clothing
                </Link>
                {/* Collections */}
                <div className={styles.sidebarDropdown}>
                  <button
                    className={styles.sidebarNavLink}
                    onClick={() => setIsMobileCollectionsOpen(!isMobileCollectionsOpen)}
                  >
                    Collections
                  </button>
                  {isMobileCollectionsOpen && (
                    <ul className={styles.sidebarDropdownMenu}>
                      <li>All Collections</li>
                      <li>House of Balloons</li>
                      <li>Thursday</li>
                      <li>Echoes of Silence</li>
                      <li>Kissland</li>
                      <li>Beauty Behind the Madness</li>
                      <li>Starboy</li>
                      <li>My Dear Melancholy,</li>
                      <li>After Hours</li>
                      <li>Dawn FM</li>
                      <li>Hurry Up Tomorrow</li>
                      <li>The Highlights</li>
                    </ul>
                  )}
                </div>
                {/* Sidebar separator */}
                <hr className={styles.sidebarSeparator} />
                {/* Login */}
                <Link to="/account" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
                {/* Create account */}
                <Link to="/account" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  Create Account
                </Link>
              </nav>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Header;
