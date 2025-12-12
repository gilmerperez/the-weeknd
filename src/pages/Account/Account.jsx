import { useEffect } from "react";
import styles from "./Account.module.css";

function Account() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Account";
  }, []);

  return (
    <>
      <main>
        <div className={styles.accountContainer}>ACCOUNT</div>
      </main>
    </>
  );
}

export default Account;
