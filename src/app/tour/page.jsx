import Image from "next/image";
import styles from "./page.module.css";
import tourData from "../../data/tour.json";
import Concert from "./components/Concert/Concert";

export const metadata = {
  title: "Tour",
  description: "Upcoming tour dates and ticket information for The Weeknd&apos;s After Hours Til Dawn tour.",
  keywords: ["The Weeknd", "tour", "concerts", "tickets", "live shows", "After Hours Til Dawn", "tour dates", "2026"],
};

export default function Tour() {
  // * Find tours
  const latinAmericaTour = tourData.find((tour) => tour.region === "Latin America");
  const europeTour = tourData.find((tour) => tour.region === "Europe");

  // * If no tour data is available, show a message
  if (!latinAmericaTour && !europeTour) {
    return (
      <>
        <main>
          <div className={styles.tourContainer}>No tour data available</div>
        </main>
      </>
    );
  }

  return (
    <>
      <main>
        <div className={styles.tourContainer}>
          {/* Latin america tour */}
          {latinAmericaTour && (
            <>
              {/* Tour banner */}
              <div className={styles.bannerContainer}>
                <Image
                  src={latinAmericaTour.bannerImageWide}
                  className={`${styles.bannerImage} ${styles.bannerImageWide}`}
                  alt={`${latinAmericaTour.title} ${latinAmericaTour.region} ${latinAmericaTour.year}`}
                  width={1200}
                  height={600}
                  sizes="100vw"
                  priority
                />
                <Image
                  src={latinAmericaTour.bannerImageTall}
                  className={`${styles.bannerImage} ${styles.bannerImageTall}`}
                  alt={`${latinAmericaTour.title} ${latinAmericaTour.region} ${latinAmericaTour.year}`}
                  width={600}
                  height={800}
                  sizes="100vw"
                  priority
                />
              </div>
              {/* Concerts list */}
              <div className={`${styles.concertsContainer} ${styles.latinAmericaTour}`}>
                {latinAmericaTour.concerts.map((concert, index) => (
                  <Concert
                    key={index}
                    date={concert.date}
                    stadium={concert.stadium}
                    location={concert.location}
                    ticketsLink={concert.ticketsLink}
                    vipTicketsLink={concert.vipTicketsLink}
                  />
                ))}
              </div>
            </>
          )}

          {/* Europe tour */}
          {europeTour && (
            <>
              {/* Tour banner */}
              <div className={styles.bannerContainer}>
                <Image
                  src={europeTour.bannerImageWide}
                  className={`${styles.bannerImage} ${styles.bannerImageWide}`}
                  alt={`${europeTour.title} ${europeTour.region} ${europeTour.year}`}
                  width={1200}
                  height={600}
                  sizes="100vw"
                  priority
                />
                <Image
                  src={europeTour.bannerImageTall}
                  className={`${styles.bannerImage} ${styles.bannerImageTall}`}
                  alt={`${europeTour.title} ${europeTour.region} ${europeTour.year}`}
                  width={600}
                  height={800}
                  sizes="100vw"
                  priority
                />
              </div>
              {/* Concerts list */}
              <div className={`${styles.concertsContainer} ${styles.europeTour}`}>
                {europeTour.concerts.map((concert, index) => (
                  <Concert
                    key={index}
                    date={concert.date}
                    stadium={concert.stadium}
                    location={concert.location}
                    ticketsLink={concert.ticketsLink}
                    vipTicketsLink={concert.vipTicketsLink}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
