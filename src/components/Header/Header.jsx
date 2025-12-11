import styles from "./Header.module.css";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  HiOutlineMail,
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineSun,
  HiOutlineMoon,
} from "react-icons/hi";

function Header() {
  // * Get current location
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // * Collections dropdown state
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const [isMobileCollectionsOpen, setIsMobileCollectionsOpen] = useState(false);

  // * Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // * Close mobile menu when clicking outside
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
      <header>
        <div className={styles.headerContainer}>
          {/* Left side - navigation */}
          <nav className={styles.navLeft}>
            {/* Home - only show when not on home page */}
            {!isHomePage && (
              <Link to="/" className={styles.navLink}>
                HOME
              </Link>
            )}
            {/* Collections */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => setIsCollectionsOpen(true)}
              onMouseLeave={() => setIsCollectionsOpen(false)}
            >
              <button className={styles.navLink}>COLLECTIONS</button>
              {isCollectionsOpen && (
                <ul className={styles.dropdownMenu}>
                  <li>ALL COLLECTIONS</li>
                  <li>HOUSE OF BALLOONS</li>
                  <li>THURSDAY</li>
                  <li>ECHOES OF SILENCE</li>
                  <li>KISSLAND</li>
                  <li>BEAUTY BEHIND THE MADNESS</li>
                  <li>STARBOY</li>
                  <li>MY DEAR MELANCHOLY,</li>
                  <li>AFTER HOURS</li>
                  <li>DAWN FM</li>
                  <li>HURRY UP TOMORROW</li>
                  <li>THE HIGHLIGHTS</li>
                </ul>
              )}
            </div>
            {/* Clothing */}
            <Link to="/clothing" className={styles.navLink}>
              CLOTHING
            </Link>
            {/* Music */}
            <Link to="/music" className={styles.navLink}>
              MUSIC
            </Link>
            {/* Tour */}
            <Link to="/tour" className={styles.navLink}>
              TOUR
            </Link>
            {/* Film */}
            <Link to="/film" className={styles.navLink}>
              FILM
            </Link>
          </nav>
          {/* Mobile hamburger menu button */}
          <button
            aria-expanded={menuOpen}
            className={styles.hamburger}
            aria-label="Open Navigation Menu"
            onClick={() => setMenuOpen(true)}
          >
            <HiOutlineMenu />
          </button>
          {/* Right side - icons */}
          <div className={styles.navRight}>
            <button className={styles.iconButton} aria-label="Newsletter">
              <HiOutlineMail />
            </button>
            <button className={styles.iconButton} aria-label="Search">
              <HiOutlineSearch />
            </button>
            <button className={styles.iconButton} aria-label="Account">
              <HiOutlineUser />
            </button>
            <button className={styles.iconButton} aria-label="Shopping Cart">
              <HiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu sidebar */}
      {menuOpen &&
        createPortal(
          // Sidebar overlay
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
                {/* Home - only show when not on home page */}
                {!isHomePage && (
                  <Link to="/" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                    HOME
                  </Link>
                )}
                {/* Collections */}
                <div className={styles.sidebarDropdown}>
                  <button
                    className={styles.sidebarNavLink}
                    onClick={() => setIsMobileCollectionsOpen(!isMobileCollectionsOpen)}
                  >
                    COLLECTIONS
                  </button>
                  {isMobileCollectionsOpen && (
                    <ul className={styles.sidebarDropdownMenu}>
                      <li>ALL COLLECTIONS</li>
                      <li>HOUSE OF BALLOONS</li>
                      <li>THURSDAY</li>
                      <li>ECHOES OF SILENCE</li>
                      <li>KISSLAND</li>
                      <li>BEAUTY BEHIND THE MADNESS</li>
                      <li>STARBOY</li>
                      <li>MY DEAR MELANCHOLY,</li>
                      <li>AFTER HOURS</li>
                      <li>DAWN FM</li>
                      <li>HURRY UP TOMORROW</li>
                      <li>THE HIGHLIGHTS</li>
                    </ul>
                  )}
                </div>
                {/* Clothing */}
                <Link to="/clothing" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  CLOTHING
                </Link>
                {/* Music */}
                <Link to="/music" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  MUSIC
                </Link>
                {/* Tour */}
                <Link to="/tour" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  TOUR
                </Link>
                {/* Film */}
                <Link to="/film" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  FILM
                </Link>
                {/* Separator */}
                <hr className={styles.sidebarSeparator} />
                {/* Login */}
                <Link to="/login" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  LOGIN
                </Link>
                {/* Sign up */}
                <Link to="/signup" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  SIGN UP
                </Link>
                {/* Newsletter */}
                <Link to="/newsletter" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  GET UPDATES
                </Link>
              </nav>
              {/* Sidebar footer - theme toggle */}
              <div className={styles.sidebarFooter}>
                <button
                  onClick={toggleTheme}
                  className={styles.themeToggle}
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                  {theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Header;
