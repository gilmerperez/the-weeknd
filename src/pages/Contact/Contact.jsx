import { useEffect } from "react";
import styles from "./Contact.module.css";

function Contact() {
  // * Set page title
  useEffect(() => {
    document.title = "React Template | Contact";
  }, []);

  return (
    <>
      <main>
        <div className={styles.contactContainer}>Contact</div>
      </main>
    </>
  );
}

export default Contact;
