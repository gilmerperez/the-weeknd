import { useEffect } from "react";
import styles from "./Tour.module.css";
import tourData from "../../data/tour.json";
import Concert from "./components/Concert/Concert";

function Tour() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Tour";
  }, []);

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
                <img
                  src={latinAmericaTour.bannerImageWide}
                  className={`${styles.bannerImage} ${styles.bannerImageWide}`}
                  alt={`${latinAmericaTour.title} ${latinAmericaTour.region} ${latinAmericaTour.year}`}
                />
                <img
                  src={latinAmericaTour.bannerImageTall}
                  className={`${styles.bannerImage} ${styles.bannerImageTall}`}
                  alt={`${latinAmericaTour.title} ${latinAmericaTour.region} ${latinAmericaTour.year}`}
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
                <img
                  src={europeTour.bannerImageWide}
                  className={`${styles.bannerImage} ${styles.bannerImageWide}`}
                  alt={`${europeTour.title} ${europeTour.region} ${europeTour.year}`}
                />
                <img
                  src={europeTour.bannerImageTall}
                  className={`${styles.bannerImage} ${styles.bannerImageTall}`}
                  alt={`${europeTour.title} ${europeTour.region} ${europeTour.year}`}
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

export default Tour;
