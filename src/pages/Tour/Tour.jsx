import { useEffect } from "react";
import styles from "./Tour.module.css";

function Tour() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Tour";
  }, []);

  return (
    <>
      <main>
        <div className={styles.tourContainer}>TOUR</div>
      </main>
    </>
  );
}

export default Tour;
