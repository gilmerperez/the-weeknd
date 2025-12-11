import { useEffect } from "react";
import styles from "./Music.module.css";

function Music() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Music";
  }, []);

  return (
    <>
      <main>
        <div className={styles.musicContainer}>MUSIC</div>
      </main>
    </>
  );
}

export default Music;
