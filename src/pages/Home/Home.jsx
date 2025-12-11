import { useEffect } from "react";
import styles from "./Home.module.css";

function Home() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Home";
  }, []);

  return (
    <>
      <main>
        <div className={styles.homeContainer}>HOME</div>
      </main>
    </>
  );
}

export default Home;
