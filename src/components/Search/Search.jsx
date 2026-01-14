"use client";

import styles from "./Search.module.css";
import { useRef, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";

function Search({ onClose }) {
  // * Reference to the search container for click outside detection
  const searchRef = useRef(null);

  // * Close search when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside search container
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        // Check if click is specifically on the search button (don't close in this case)
        // The search button's onClick handler will handle toggling
        const searchButton = event.target.closest('button[aria-label="Search"]');
        // Only close if click is not on the search button
        if (!searchButton) {
          onClose();
        }
      }
    };

    // * Use a small delay to avoid immediate closure when search opens
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 0);

    // * Cleanup event listener when component unmounts
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      <div ref={searchRef} className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          {/* Search input field */}
          <input type="search" className={styles.searchInput} placeholder="Search" aria-label="Search for products" />
          {/* Search icon */}
          <HiOutlineSearch className={styles.searchIcon} aria-hidden="true" />
        </div>
      </div>
    </>
  );
}

export default Search;
