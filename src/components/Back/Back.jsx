import styles from "./Back.module.css";
import { useNavigate, useLocation } from "react-router-dom";

function Back() {
  // * Get current location to determine if on home page
  const navigate = useNavigate();
  const location = useLocation();

  // * Get previous page name from location state or determine from current path
  const getPreviousPageName = () => {
    // If previous page name is passed via location state, use it
    if (location.state?.from) {
      return location.state.from;
    }

    // For help and support sub-pages, default to "Help"
    if (location.pathname.startsWith("/help/")) {
      return "Help";
    }

    // Default fallback
    return "Previous Page";
  };

  // * Handle back navigation
  const handleBack = () => {
    // If there's a specific back path in state, use it
    if (location.state?.backPath) {
      navigate(location.state.backPath);
    } else {
      // Otherwise, go back in history
      navigate(-1);
    }
  };

  const previousPageName = getPreviousPageName();

  return (
    <>
      <div className={styles.backContainer}>
        <button onClick={handleBack} className={styles.backButton} aria-label={`Back to ${previousPageName}`}>
          <span>{"<"}</span>
          <span>BACK TO {previousPageName.toUpperCase()}</span>
        </button>
      </div>
    </>
  );
}

export default Back;
