import { useEffect } from "react";
import styles from "./About.module.css";

function About() {
  // * Set page title
  useEffect(() => {
    document.title = "React Template | About";
  }, []);

  return (
    <>
      <main>
        <div className={styles.aboutContainer}>About</div>
      </main>
    </>
  );
}

export default About;
