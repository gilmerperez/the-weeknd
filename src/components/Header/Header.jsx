import { useState } from "react";
import styles from "./Header.module.css";
import { HiOutlineMail, HiOutlineSearch, HiOutlineUser, HiOutlineShoppingCart } from "react-icons/hi";

function Header() {
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);

  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          {/* Left side - navigation */}
          <nav className={styles.navLeft}>
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
                  <li>MY DEAR MELANCHOLY</li>
                  <li>AFTER HOURS</li>
                  <li>DAWN FM</li>
                  <li>HURRY UP TOMORROW</li>
                  <li>THE HIGHLIGHTS</li>
                </ul>
              )}
            </div>
            {/* Clothing */}
            <a href="#" className={styles.navLink}>
              CLOTHING
            </a>
            {/* Music */}
            <a href="#" className={styles.navLink}>
              MUSIC
            </a>
            {/* Tour */}
            <a href="#" className={styles.navLink}>
              TOUR
            </a>
            {/* Film */}
            <a href="#" className={styles.navLink}>
              FILM
            </a>
          </nav>

          {/* Right side - icons */}
          <div className={styles.navRight}>
            <button className={styles.iconButton} aria-label="Email">
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
    </>
  );
}

export default Header;
