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
          {/* Orders */}
          <Link to="help/orders">
            <h2>Orders</h2>
            <p>Learn about placing and managing orders</p>
          </Link>
          {/* Returns */}
          <Link to="help/returns">
            <h2>Returns</h2>
            <p>Learn about returning and refunding orders</p>
          </Link>
          {/* Shipping */}
          <Link to="help/shipping">
            <h2>Shipping</h2>
            <p>Learn about shipping and delivery of orders</p>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Help;
