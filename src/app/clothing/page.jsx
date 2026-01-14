import styles from "./page.module.css";

export const metadata = {
  title: "Clothing",
  description: "Shop official The Weeknd merchandise and clothing.",
  keywords: ["The Weeknd", "merchandise", "clothing", "apparel", "shop", "store"],
};

export default function Clothing() {
  return (
    <>
      <main>
        <div className={styles.clothingContainer}>CLOTHING</div>
      </main>
    </>
  );
}
