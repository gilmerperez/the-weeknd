import { useEffect } from "react";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Page Not Found";
  }, []);

  return (
    <>
      <main>
        <div className={styles.pageNotFoundContainer}>PAGE NOT FOUND</div>
      </main>
    </>
  );
}

export default PageNotFound;
