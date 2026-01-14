import styles from "./page.module.css";

export const metadata = {
  title: "Home",
  description: "Welcome to the official website of The Weeknd. Discover music, tour dates, merchandise, and more.",
  keywords: ["The Weeknd", "home", "official website", "music", "tour", "Abel Tesfaye", "merchandise"],
};

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.homeContainer}>HOME</div>
      </main>
    </>
  );
}
