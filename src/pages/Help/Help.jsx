import { useEffect } from "react";
import styles from "./Help.module.css";
import { Link } from "react-router-dom";

function Help() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Help and Support";
  }, []);

  return (
    <>
      <main>
        <div className={styles.helpContainer}>
          {/* Title */}
          <h1 className={styles.title}>HELP AND SUPPORT</h1>

          {/* Help and support cards */}
          <div className={styles.cardsContainer}>
            {/* Orders */}
            <div className={styles.helpCard}>
              <h2 className={styles.cardTitle}>Orders</h2>
              <p className={styles.cardText}>Learn about placing and managing orders</p>
              <Link to="/help/orders" className={styles.viewAllButton}>
                VIEW ALL
              </Link>
            </div>

            {/* Returns */}
            <div className={styles.helpCard}>
              <h2 className={styles.cardTitle}>Returns</h2>
              <p className={styles.cardText}>Learn about returning and refunding orders</p>
              <Link to="/help/returns" className={styles.viewAllButton}>
                VIEW ALL
              </Link>
            </div>

            {/* Shipping */}
            <div className={styles.helpCard}>
              <h2 className={styles.cardTitle}>Shipping</h2>
              <p className={styles.cardText}>Learn about shipping and delivery of orders</p>
              <Link to="/help/shipping" className={styles.viewAllButton}>
                VIEW ALL
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Help;
