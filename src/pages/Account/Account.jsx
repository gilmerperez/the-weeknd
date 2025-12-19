import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiX, HiCheck } from "react-icons/hi";
import styles from "./Account.module.css";

function Account() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Account";
  }, []);

  // * Form state (for future logic)
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");

  // * Password requirements state (for future logic - currently static)
  const [hasNumber, setHasNumber] = useState(false);
  const [hasMinLength, setHasMinLength] = useState(false);
  const [hasUpperLower, setHasUpperLower] = useState(false);

  return (
    <>
      <main>
        <div className={styles.accountContainer}>
          {/* Login Section */}
          <div className={styles.loginSection}>
            <h1 className={styles.sectionTitle}>Login to your existing account</h1>

            <div className={styles.formGroup}>
              <label htmlFor="login-email" className={styles.label}>
                EMAIL
              </label>
              <input
                type="email"
                id="login-email"
                className={styles.input}
                placeholder="EMAIL"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="login-password" className={styles.label}>
                PASSWORD
              </label>
              <input
                type="password"
                id="login-password"
                className={styles.input}
                placeholder="PASSWORD"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>

            <Link to="/account/reset" className={styles.forgotPasswordLink}>
              Forgot your password?
            </Link>

            <button type="button" className={styles.button}>
              Log In
            </button>
          </div>

          {/* Divider */}
          <div className={styles.divider}></div>

          {/* Create Account Section */}
          <div className={styles.createSection}>
            <h1 className={styles.sectionTitle}>Create a new account</h1>

            <div className={styles.formGroup}>
              <label htmlFor="first-name" className={styles.label}>
                FIRST NAME
              </label>
              <input
                type="text"
                id="first-name"
                className={styles.input}
                placeholder="FIRST NAME"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="last-name" className={styles.label}>
                LAST NAME
              </label>
              <input
                type="text"
                id="last-name"
                className={styles.input}
                placeholder="LAST NAME"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="create-email" className={styles.label}>
                EMAIL
              </label>
              <input
                type="email"
                id="create-email"
                className={styles.input}
                placeholder="EMAIL"
                value={createEmail}
                onChange={(e) => setCreateEmail(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="create-password" className={styles.label}>
                PASSWORD
              </label>
              <input
                type="password"
                id="create-password"
                className={styles.input}
                placeholder="PASSWORD"
                value={createPassword}
                onChange={(e) => setCreatePassword(e.target.value)}
              />
            </div>

            {/* Password Requirements */}
            <ul className={styles.passwordRequirements}>
              <li className={styles.requirement}>
                {hasNumber ? <HiCheck className={styles.checkIcon} /> : <HiX className={styles.xIcon} />}
                <span>Password must contain a number</span>
              </li>
              <li className={styles.requirement}>
                {hasMinLength ? <HiCheck className={styles.checkIcon} /> : <HiX className={styles.xIcon} />}
                <span>Password must be at least 8 characters</span>
              </li>
              <li className={styles.requirement}>
                {hasUpperLower ? <HiCheck className={styles.checkIcon} /> : <HiX className={styles.xIcon} />}
                <span>Password must contain both upper & lowercase characters</span>
              </li>
            </ul>

            <button type="button" className={styles.button}>
              Create Account
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Account;
