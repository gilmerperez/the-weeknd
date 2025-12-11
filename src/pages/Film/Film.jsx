import { useEffect } from "react";
import styles from "./Film.module.css";

function Film() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Film";
  }, []);

  return (
    <>
      <main>
        <div className={styles.filmContainer}>FILM</div>
      </main>
    </>
  );
}

export default Film;
