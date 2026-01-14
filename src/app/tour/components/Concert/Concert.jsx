import styles from "./Concert.module.css";

function Concert({ date, stadium, location, ticketsLink, vipTicketsLink }) {
  return (
    <>
      <div className={styles.concertContainer}>
        {/* Concert information */}
        <p className={styles.date}>{date}</p>
        <p className={styles.stadium}>{stadium}</p>
        <p className={styles.location}>{location}</p>
        {/* Concert tickets */}
        <div className={styles.concertLinks}>
          <a
            target="_blank"
            href={ticketsLink}
            rel="noopener noreferrer"
            className={styles.ticketsLink}
            aria-label={`Buy tickets for ${stadium} on ${date}`}
          >
            Tickets
          </a>
          <span className={styles.separator}>|</span>
          <a
            target="_blank"
            href={vipTicketsLink}
            rel="noopener noreferrer"
            className={styles.vipTicketsLink}
            aria-label={`Buy VIP tickets for ${stadium} on ${date}`}
          >
            VIP Tickets
          </a>
        </div>
      </div>
    </>
  );
}

export default Concert;
