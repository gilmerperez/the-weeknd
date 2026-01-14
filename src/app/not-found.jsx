import styles from "./not-found.module.css";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <>
      <main>
        <div className={styles.pageNotFoundContainer}>PAGE NOT FOUND</div>
      </main>
    </>
  );
}
