import styles from "./page.module.css";

export const metadata = {
  title: "Music",
  description: "Discover The Weeknd&apos;s music, albums, and latest releases.",
  keywords: ["The Weeknd", "music", "albums", "songs", "releases", "streaming"],
};

export default function Music() {
  return (
    <>
      <main>
        <div className={styles.musicContainer}>MUSIC</div>
      </main>
    </>
  );
}
