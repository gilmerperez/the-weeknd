import styles from "./Privacy.module.css";
import { useEffect, useMemo } from "react";

// * Import markdown file as raw text
import privacyContent from "../../data/privacy.md?raw";

function Privacy() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Privacy Policy";
  }, []);

  // * Function to get current date
  const getCurrentDateString = () => {
    // Get the current date
    const now = new Date();
    // Months array
    const months = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ];
    // Get the current month, day, and year
    const month = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    // Return the current date in correct format
    return `(LAST UPDATED ON ${month} ${day}, ${year})`;
  };

  // * Function to convert email addresses to mailto links
  const processEmailLinks = (text, lineIndex) => {
    // Email regex pattern (case-insensitive)
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
    const parts = [];
    let lastIndex = 0;
    let match;
    // Loop through the text and find email addresses
    while ((match = emailRegex.exec(text)) !== null) {
      // Add text before the email
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      // Add the email as a link
      const email = match[0];
      parts.push(
        <a
          className={styles.emailLink}
          href={`mailto:${email.toLowerCase()}`}
          key={`email-${lineIndex}-${match.index}`}
        >
          {email}
        </a>
      );
      // Update the last index to the end of the current email
      lastIndex = match.index + match[0].length;
    }
    // Add remaining text after the last email
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    // If no emails were found, return the original text
    return parts.length > 0 ? parts : text;
  };

  // * Process markdown content
  const processedContent = useMemo(() => {
    const lines = privacyContent.split("\n");
    const elements = [];
    let isFirstParagraph = true;
    const currentDateString = getCurrentDateString();
    // Loop through the lines and process the content
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      // Skip empty lines but preserve spacing with a blank paragraph
      if (line === "") {
        elements.push(<p key={`spacing-${i}`} className={styles.spacing}></p>);
        continue;
      }
      // First non-empty line is the title (h1)
      if (isFirstParagraph) {
        elements.push(
          <h1 key={`title-${i}`} className={styles.title}>
            {line.toUpperCase()}
          </h1>
        );
        isFirstParagraph = false;
      } else {
        // Check if this line matches the "Last updated on" pattern and replace with current date
        const upperLine = line.toUpperCase();
        const isLastUpdatedLine =
          upperLine.includes("LAST UPDATED ON") ||
          upperLine.includes("(LAST UPDATED ON") ||
          (upperLine.startsWith("(") && upperLine.includes("UPDATED")) ||
          upperLine.includes("EFFECTIVE DATE:");
        // Get the final text (either current date or uppercase line)
        const finalText = isLastUpdatedLine ? currentDateString : upperLine;
        // Process email addresses and convert to links
        const processedText = processEmailLinks(finalText, i);
        // All other content is paragraphs
        elements.push(
          <p key={`para-${i}`} className={styles.paragraph}>
            {processedText}
          </p>
        );
      }
    }
    // Return the elements
    return elements;
  }, []);

  return (
    <>
      <main>
        <div className={styles.privacyContainer}>{processedContent}</div>
      </main>
    </>
  );
}

export default Privacy;
