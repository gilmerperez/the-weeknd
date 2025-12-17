import styles from "./Back.module.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

function Back() {
  return (
    <>
      <Link to="/help" className={styles.backContainer}>
        <span className={styles.backIcon}>
          <HiOutlineArrowLeft />
        </span>
        <span className={styles.backText}>BACK TO LAST PAGE</span>
      </Link>
    </>
  );
}

export default Back;
