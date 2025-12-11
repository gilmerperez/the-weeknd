import { useEffect } from "react";
import styles from "./PrivacyPolicy.module.css";

function PrivacyPolicy() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Privacy Policy";
  }, []);

  return (
    <>
      <main>
        <div className={styles.privacyPolicyContainer}>PRIVACY POLICY</div>
      </main>
    </>
  );
}

export default PrivacyPolicy;
