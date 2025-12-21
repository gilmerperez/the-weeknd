import styles from "./Reset.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Back from "../../../components/Back/Back";

function Reset() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Reset Password";
  }, []);

  // * Form state
  const [email, setEmail] = useState("");

  return (
    <>
      <main>
        <div className={styles.resetContainer}>
          {/* Reset password section */}
          <div className={styles.resetSection}>
            {/* Back button */}
            <Back to="/account" text="Back to login" />
            {/* Title */}
            <h1 className={styles.sectionTitle}>Reset your password</h1>
            {/* Email field */}
            <div className={styles.formGroup}>
              <label htmlFor="reset-email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                value={email}
                id="reset-email"
                placeholder="Email"
                className={styles.input}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Reset password button */}
            <button type="button" className="button">
              Reset Password
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Reset;
