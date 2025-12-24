import styles from "./Search.module.css";
import { HiOutlineSearch } from "react-icons/hi";

function Search() {
  return (
    <>
      <div className={styles.searchContainer}>
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
