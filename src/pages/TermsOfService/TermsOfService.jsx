import { useEffect } from "react";
import styles from "./TermsOfService.module.css";

function TermsOfService() {
  // * Set page title
  useEffect(() => {
    document.title = "React Template | Terms of Service";
  }, []);

  return (
    <>
      <main>
        <div className={styles.termsOfServiceContainer}>Terms of Service</div>
      </main>
    </>
  );
}

export default TermsOfService;
