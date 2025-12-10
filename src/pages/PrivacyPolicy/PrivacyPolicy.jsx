import { useEffect } from "react";
import styles from "./PrivacyPolicy.module.css";

function PrivacyPolicy() {
  // * Set page title
  useEffect(() => {
    document.title = "React Template | Privacy Policy";
  }, []);

  return (
    <>
      <main>
        <div className={styles.privacyPolicyContainer}>Privacy Policy</div>
      </main>
    </>
  );
}

export default PrivacyPolicy;
