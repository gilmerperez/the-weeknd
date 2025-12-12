import { useEffect } from "react";
import styles from "./Help.module.css";

function Help() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Help and Support";
  }, []);

  return (
    <>
      <main>
        <div className={styles.helpContainer}>HELP AND SUPPORT</div>
      </main>
    </>
  );
}

export default Help;
