import { useEffect } from "react";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  // * Set page title
  useEffect(() => {
    document.title = "React Template | Page Not Found";
  }, []);

  return (
    <>
      <main>
        <div className={styles.pageNotFoundContainer}>Page Not Found</div>
      </main>
    </>
  );
}

export default PageNotFound;
