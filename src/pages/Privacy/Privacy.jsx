import { useEffect } from "react";
import styles from "./Privacy.module.css";

function Privacy() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Privacy Policy";
  }, []);

  return (
    <>
      <main>
        <div className={styles.privacyContainer}>PRIVACY POLICY</div>
      </main>
    </>
  );
}

export default Privacy;
