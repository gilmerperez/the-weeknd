import { useEffect } from "react";
import styles from "./Tour.module.css";
import tourData from "../../data/tour.json";
import Concert from "./components/Concert/Concert";

function Tour() {
  // * Set page title
  useEffect(() => {
    document.title = "The Weeknd | Tour";
  }, []);

  // * Find latin america tour
  const latinAmericaTour = tourData.find((tour) => tour.region === "Latin America");

  // * If no tour data is available, show a message
  if (!latinAmericaTour) {
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
          {/* Tour banner */}
          <div className={styles.bannerContainer}>
            <img
              className={styles.bannerImage}
              src={latinAmericaTour.bannerImageWide}
              alt={`${latinAmericaTour.title} ${latinAmericaTour.region} ${latinAmericaTour.year}`}
            />
          </div>

          {/* Concerts list */}
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
      </main>
    </>
  );
}

export default Tour;
