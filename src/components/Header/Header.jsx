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
  // * Get current location to determine if on home page
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // * Collections dropdown state
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const [isMobileCollectionsOpen, setIsMobileCollectionsOpen] = useState(false);

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

  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          {/* Navigation */}
          <nav className={styles.navLeft}>
            {/* Home */}
            {!isHomePage && (
              <Link to="/" className={styles.navLink}>
                HOME
              </Link>
            )}
            {/* Film */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
              href="https://www.lionsgate.com/movies/hurry-up-tomorrow"
            >
              FILM
            </a>
            {/* Tour */}
            <Link to="/tour" className={styles.navLink}>
              TOUR
            </Link>
            {/* Music */}
            <Link to="/music" className={styles.navLink}>
              MUSIC
            </Link>
            {/* Clothing */}
            <Link to="/clothing" className={styles.navLink}>
              CLOTHING
            </Link>
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
                    HOME
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
                  FILM
                </a>
                {/* Tour */}
                <Link to="/tour" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  TOUR
                </Link>
                {/* Music */}
                <Link to="/music" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  MUSIC
                </Link>
                {/* Clothing */}
                <Link to="/clothing" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  CLOTHING
                </Link>
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
                {/* Sidebar separator */}
                <hr className={styles.sidebarSeparator} />
                {/* Login */}
                <Link to="/account" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  LOGIN
                </Link>
                {/* Create account */}
                <Link to="/account" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  CREATE ACCOUNT
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
