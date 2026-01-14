import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Help and Support",
  description: "Get help with orders, returns, shipping, and more.",
  keywords: ["The Weeknd", "help", "support", "customer service", "orders", "returns", "shipping"],
};

export default function Help() {
  return (
    <>
      <main>
        <div className={styles.helpContainer}>
          {/* Title */}
          <h1 className={styles.title}>Help and Support</h1>

          {/* Help and support cards */}
          <div className={styles.cardsContainer}>
            {/* Orders */}
            <div className={styles.helpCard}>
              <h2 className={styles.cardTitle}>Orders</h2>
              <p className={styles.cardText}>Learn about placing and managing orders</p>
              <Link href="/help/orders" className="button">
                View All
              </Link>
            </div>

            {/* Returns */}
            <div className={styles.helpCard}>
              <h2 className={styles.cardTitle}>Returns</h2>
              <p className={styles.cardText}>Learn about returning and refunding orders</p>
              <Link href="/help/returns" className="button">
                View All
              </Link>
            </div>

            {/* Shipping */}
            <div className={styles.helpCard}>
              <h2 className={styles.cardTitle}>Shipping</h2>
              <p className={styles.cardText}>Learn about shipping and delivery of orders</p>
              <Link href="/help/shipping" className="button">
                View All
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
