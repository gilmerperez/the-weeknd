import { useEffect } from "react";
import styles from "./Tour.module.css";
import tourData from "../../data/tour.json";
import Concert from "./components/Concert/Concert";

function Tour() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Tour";
  }, []);

  // * Find Latin America tour
  const latinAmericaTour = tourData.find((tour) => tour.region === "Latin America");

  // * Find Europe tour
  const europeTour = tourData.find((tour) => tour.region === "Europe");

  // * If no tour data is available, show a message
  if (!latinAmericaTour || !europeTour) {
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
          {/* Latin America tour section */}
          <div className={styles.latinAmericaSection}>
            {/* Latin America tour banner */}
            <div className={styles.bannerContainer}>
              <picture>
                <source media="(max-width: 480px)" srcSet={latinAmericaTour.bannerImageTall} />
                <img
                  className={styles.bannerImage}
                  src={latinAmericaTour.bannerImageWide}
                  alt={`${latinAmericaTour.title} ${latinAmericaTour.region} ${latinAmericaTour.year}`}
                />
              </picture>
            </div>

            {/* Latin America concerts list */}
            <div className={styles.concertsContainer}>
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
          </div>

          {/* Europe tour section */}
          <div className={styles.europeSection}>
            {/* Europe tour banner */}
            <div className={styles.bannerContainer}>
              <picture>
                <source media="(max-width: 480px)" srcSet={europeTour.bannerImageTall} />
                <img
                  className={styles.bannerImage}
                  src={europeTour.bannerImageWide}
                  alt={`${europeTour.title} ${europeTour.region} ${europeTour.year}`}
                />
              </picture>
            </div>

            {/* Europe concerts list */}
            <div className={styles.concertsContainer}>
              {europeTour.concerts.map((concert, index) => (
                <Concert
                  key={`europe-${index}`}
                  date={concert.date}
                  stadium={concert.stadium}
                  location={concert.location}
                  ticketsLink={concert.ticketsLink}
                  vipTicketsLink={concert.vipTicketsLink}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Tour;
