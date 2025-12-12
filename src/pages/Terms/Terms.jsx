import { useEffect } from "react";
import styles from "./Terms.module.css";

function Terms() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Terms and Conditions of Sale";
  }, []);

  return (
    <>
      <main>
        <div className={styles.termsContainer}>TERMS AND CONDITIONS OF SALE</div>
      </main>
    </>
  );
}

export default Terms;
