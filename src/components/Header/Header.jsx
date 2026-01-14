"use client";

import Search from "../Search/Search";
import styles from "./Header.module.css";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import Newsletter from "../Newsletter/Newsletter";
import { usePathname } from "next/navigation";
import Link from "next/link";
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
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // * Collections dropdown state
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const [isMobileCollectionsOpen, setIsMobileCollectionsOpen] = useState(false);

  // * Search logic
  const [searchOpen, setSearchOpen] = useState(false);

  // Close search when navigating to a new page
  useEffect(() => {
    setTimeout(() => {
      setSearchOpen(false);
    }, 0);
  }, [pathname]);

  // * Newsletter logic
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  // Prevent body scroll when newsletter is open
  useEffect(() => {
    if (newsletterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [newsletterOpen]);

  // * Mobile menu logic
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
              <Link href="/" className={styles.navLink}>
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
            <Link href="/tour" className={styles.navLink}>
              Tour
            </Link>
            {/* Music */}
            <Link href="/music" className={styles.navLink}>
              Music
            </Link>
            {/* Clothing */}
            <Link href="/clothing" className={styles.navLink}>
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
            <button
              aria-label="Search"
              aria-expanded={searchOpen}
              className={styles.iconButton}
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <HiOutlineSearch />
            </button>
            {/* Account */}
            <Link href="/account" className={styles.iconButton} aria-label="Account">
              <HiOutlineUser />
            </Link>
            {/* Newsletter */}
            <button
              aria-label="Newsletter"
              className={styles.iconButton}
              aria-expanded={newsletterOpen}
              onClick={() => setNewsletterOpen(true)}
            >
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
                  <Link href="/" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
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
                <Link href="/tour" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  Tour
                </Link>
                {/* Music */}
                <Link href="/music" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  Music
                </Link>
                {/* Clothing */}
                <Link href="/clothing" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
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
                <Link href="/account" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
                {/* Create account */}
                <Link href="/account" className={styles.sidebarNavLink} onClick={() => setMenuOpen(false)}>
                  Create Account
                </Link>
              </nav>
            </div>
          </div>,
          document.body
        )}

      {/* Search bar */}
      {searchOpen && <Search onClose={() => setSearchOpen(false)} />}
      {/* Newsletter modal */}
      <Newsletter isOpen={newsletterOpen} onClose={() => setNewsletterOpen(false)} />
    </>
  );
}

export default Header;
