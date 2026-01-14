"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import Back from "../../../components/Back/Back";

export default function Reset() {
  // * Form state
  const [email, setEmail] = useState("");

  return (
    <>
      <main>
        <div className={styles.resetContainer}>
          {/* Reset password section */}
          <div className={styles.resetSection}>
            {/* Back button */}
            <Back to="/account" text="Back to account page" />
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
