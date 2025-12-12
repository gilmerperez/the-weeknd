import { useEffect } from "react";
import styles from "./LegalNotice.module.css";

function LegalNotice() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Do Not Sell My Information";
  }, []);

  return (
    <>
      <main>
        <div className={styles.legalNoticeContainer}>DO NOT SELL MY INFORMATION</div>
      </main>
    </>
  );
}

export default LegalNotice;
