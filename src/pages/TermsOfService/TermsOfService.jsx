import { useEffect } from "react";
import styles from "./TermsOfService.module.css";

function TermsOfService() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Terms of Service";
  }, []);

  return (
    <>
      <main>
        <div className={styles.termsOfServiceContainer}>TERMS OF SERVICE</div>
      </main>
    </>
  );
}

export default TermsOfService;
