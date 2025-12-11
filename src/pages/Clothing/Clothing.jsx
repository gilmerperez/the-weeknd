import { useEffect } from "react";
import styles from "./Clothing.module.css";

function Clothing() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Clothing";
  }, []);

  return (
    <>
      <main>
        <div className={styles.clothingContainer}>CLOTHING</div>
      </main>
    </>
  );
}

export default Clothing;
