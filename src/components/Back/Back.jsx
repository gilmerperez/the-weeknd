import styles from "./Back.module.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

function Back({ to, pageName = "LAST PAGE" }) {
  return (
    <>
      <Link to={to} className={styles.backContainer}>
        <span className={styles.backIcon}>
          <HiOutlineArrowLeft />
        </span>
        <span className={styles.backText}>BACK TO {pageName.toUpperCase()}</span>
      </Link>
    </>
  );
}

export default Back;
