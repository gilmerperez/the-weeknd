import { useEffect } from "react";
import styles from "./Reset.module.css";

function Reset() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Reset Password";
  }, []);

  return (
    <>
      <main>
        <div className={styles.resetContainer}>RESET</div>
      </main>
    </>
  );
}

export default Reset;
