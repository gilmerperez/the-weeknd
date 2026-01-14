"use client";

import { useState } from "react";
import { HiX } from "react-icons/hi";
import styles from "./Newsletter.module.css";

// * List of countries for the dropdown
const countries = [
  "PLEASE SELECT",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

function Newsletter({ isOpen, onClose }) {
  // * Form state
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("Please Select");
  const [theWeeknd, setTheWeeknd] = useState(false);
  const [republicRecords, setRepublicRecords] = useState(false);
  const [universalMusicGroup, setUniversalMusicGroup] = useState(false);

  // * If newsletter is not open, return null
  if (!isOpen) return null;

  // * Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { email, country, theWeeknd, republicRecords, universalMusicGroup });
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose} aria-hidden="true"></div>
      <div className={styles.newsletterContainer} onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className={styles.closeButton} onClick={onClose} aria-label="Close Newsletter" type="button">
          <HiX />
        </button>

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Heading */}
          <h2 className={styles.heading}>Get Updates</h2>

          {/* Email field */}
          <div className={styles.formGroup}>
            <label htmlFor="newsletter-email" className={styles.label}>
              Email
            </label>
            <input
              required
              type="email"
              value={email}
              placeholder="Email"
              id="newsletter-email"
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Country dropdown */}
          <div className={styles.formGroup}>
            <label htmlFor="newsletter-country" className={styles.label}>
              Country
            </label>
            <select
              required
              value={country}
              id="newsletter-country"
              className={styles.select}
              onChange={(e) => setCountry(e.target.value)}
            >
              {countries.map((countryName) => (
                <option key={countryName} value={countryName === "Please Select" ? "" : countryName}>
                  {countryName}
                </option>
              ))}
            </select>
          </div>

          {/* Subscription options */}
          <div className={styles.subscriptionSection}>
            <p className={styles.subscriptionTitle}>Subscribe to email updates from:</p>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={theWeeknd}
                  className={styles.checkbox}
                  aria-label="Subscribe to The Weeknd"
                  onChange={(e) => setTheWeeknd(e.target.checked)}
                />
                <span className={styles.checkboxText}>The Weeknd</span>
              </label>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={republicRecords}
                  className={styles.checkbox}
                  aria-label="Subscribe to Republic Records"
                  onChange={(e) => setRepublicRecords(e.target.checked)}
                />
                <span className={styles.checkboxText}>Republic Records</span>
              </label>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={universalMusicGroup}
                  aria-label="Subscribe to Universal Music Group"
                  onChange={(e) => setUniversalMusicGroup(e.target.checked)}
                />
                <span className={styles.checkboxText}>Universal Music Group</span>
              </label>
            </div>
          </div>

          {/* Submit button */}
          <button type="submit" className="buttonReverse">
            Submit
          </button>

          {/* Legal text */}
          <p className={styles.legalText}>
            Emails will be sent by or on behalf of Universal Music Group 2220 Colorado Avenue, Santa Monica, CA 90404
            (310) 865-4000. You may withdraw your consent at any time. Privacy Policy / Do Not Sell My Personal
            Information
          </p>
        </form>
      </div>
    </>
  );
}

export default Newsletter;
