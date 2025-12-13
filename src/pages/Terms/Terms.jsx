import styles from "./Terms.module.css";
import { useEffect, useMemo } from "react";

// * Import markdown file as raw text
import termsContent from "../../data/terms.md?raw";

function Terms() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Terms and Conditions of Sale";
  }, []);

  // * Process markdown content
  const processedContent = useMemo(() => {
    const lines = termsContent.split("\n");
    const elements = [];
    let isFirstParagraph = true;

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
        // All other content is paragraphs (p)
        elements.push(
          <p key={`para-${i}`} className={styles.paragraph}>
            {line.toUpperCase()}
          </p>
        );
      }
    }

    return elements;
  }, []);

  return (
    <>
      <main>
        <div className={styles.termsContainer}>{processedContent}</div>
      </main>
    </>
  );
}

export default Terms;
