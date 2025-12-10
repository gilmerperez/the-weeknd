import { useEffect } from "react";
import styles from "./Home.module.css";

function Home() {
  // * Set page title
  useEffect(() => {
    document.title = "React Template | Home";
  }, []);

  return (
    <>
      <main>
        <div className={styles.homeContainer}>Home</div>
      </main>
    </>
  );
}

export default Home;
