import styles from "./Concert.module.css";

function Concert({ date, stadium, location, ticketsLink, vipTicketsLink }) {
  return (
    <>
      <div className={styles.concertContainer}>
        <div className={styles.concertInfo}>
          {/* Concert date */}
          <p className={styles.date}>{date}</p>
          {/* Concert stadium */}
          <p className={styles.stadium}>{stadium}</p>
          {/* Concert location */}
          <p className={styles.location}>{location}</p>
        </div>
        <div className={styles.concertLinks}>
          {/* Tickets link */}
          <a
            target="_blank"
            href={ticketsLink}
            rel="noopener noreferrer"
            className={styles.ticketsLink}
            aria-label={`Buy tickets for ${stadium} on ${date}`}
          >
            TICKETS
          </a>
          {/* VIP tickets link */}
          <a
            target="_blank"
            href={vipTicketsLink}
            rel="noopener noreferrer"
            className={styles.vipTicketsLink}
            aria-label={`Buy VIP tickets for ${stadium} on ${date}`}
          >
            VIP TICKETS
          </a>
        </div>
      </div>
    </>
  );
}

export default Concert;
