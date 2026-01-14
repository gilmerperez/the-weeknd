import styles from "./Back.module.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

function Back({ to, text, pageName = "LAST PAGE" }) {
  // * If no custom text is provided, use the default page name
  const displayText = text || `BACK TO ${pageName}`;

  return (
    <>
      <Link to={to} className={styles.backContainer}>
        <span className={styles.backIcon}>
          <HiOutlineArrowLeft />
        </span>
        <span className={styles.backText}>{displayText}</span>
      </Link>
    </>
  );
}

export default Back;
