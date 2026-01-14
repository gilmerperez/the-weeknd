"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { HiExclamationCircle, HiOutlineInformationCircle, HiX, HiCheck } from "react-icons/hi";

export default function Account() {
  // * Form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");

  // * Password requirements state
  const [hasNumber, setHasNumber] = useState(false);
  const [hasMinLength, setHasMinLength] = useState(false);
  const [hasUpperLower, setHasUpperLower] = useState(false);

  // * Email validation
  const isLoginEmailValid = loginEmail === "" || loginEmail.includes("@");
  const isCreateEmailValid = createEmail === "" || createEmail.includes("@");

  return (
    <>
      <main>
        <div className={styles.accountContainer}>
          {/* Login section */}
          <div className={styles.loginSection}>
            {/* Title */}
            <h1 className={styles.sectionTitle}>Login to your existing account</h1>
            {/* Email field */}
            <div className={styles.formGroup}>
              <label htmlFor="login-email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="login-email"
                value={loginEmail}
                placeholder="Email"
                onChange={(e) => setLoginEmail(e.target.value)}
                className={`${styles.input} ${!isLoginEmailValid ? styles.inputError : ""}`}
              />
              {!isLoginEmailValid && (
                <div className={styles.errorMessage}>
                  <HiExclamationCircle className={styles.errorIcon} />
                  <span>Please enter a valid email address</span>
                </div>
              )}
            </div>
            {/* Password field */}
            <div className={styles.formGroup}>
              <label htmlFor="login-password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="login-password"
                value={loginPassword}
                placeholder="Password"
                className={styles.input}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              {/* Forgot password link */}
              <Link href="/account/reset" className={styles.forgotPasswordLink}>
                Forgot your password?
              </Link>
            </div>
            {/* Log in button */}
            <button type="button" className="button">
              Login
            </button>
          </div>

          {/* Divider */}
          <div className={styles.divider}></div>

          {/* Create account section */}
          <div className={styles.createSection}>
            {/* Create account title wrapper */}
            <div className={styles.titleWrapper}>
              {/* Create account title */}
              <h1 className={styles.sectionTitle}>Create a new account</h1>
              {/* Info icon */}
              <div className={styles.infoIconWrapper}>
                <HiOutlineInformationCircle className={styles.infoIcon} />
                {/* Tooltip */}
                <div className={styles.tooltip}>
                  By creating an account, you&apos;ll be able to move through the checkout process faster, store multiple
                  shipping addresses, view and track your orders and more.
                </div>
              </div>
            </div>
            {/* First name field */}
            <div className={styles.formGroup}>
              <label htmlFor="first-name" className={styles.label}>
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                value={firstName}
                placeholder="First Name"
                className={styles.input}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            {/* Last name field */}
            <div className={styles.formGroup}>
              <label htmlFor="last-name" className={styles.label}>
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                value={lastName}
                placeholder="Last Name"
                className={styles.input}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            {/* Email field */}
            <div className={styles.formGroup}>
              <label htmlFor="create-email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="create-email"
                value={createEmail}
                placeholder="Email"
                onChange={(e) => setCreateEmail(e.target.value)}
                className={`${styles.input} ${!isCreateEmailValid ? styles.inputError : ""}`}
              />
              {!isCreateEmailValid && (
                <div className={styles.errorMessage}>
                  <HiExclamationCircle className={styles.errorIcon} />
                  <span>Please enter a valid email address</span>
                </div>
              )}
            </div>
            {/* Password field */}
            <div className={styles.formGroup}>
              <label htmlFor="create-password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="create-password"
                value={createPassword}
                placeholder="Password"
                className={styles.input}
                onChange={(e) => setCreatePassword(e.target.value)}
              />
              {/* Password requirements */}
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
                  <span>Password must contain both upper &amp; lowercase characters</span>
                </li>
              </ul>
            </div>
            {/* Create account button */}
            <button type="button" className="button">
              Create Account
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
