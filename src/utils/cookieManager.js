// * === Cookie manager utility: Handles cookie consent state, persistence, and script management

// * LocalStorage keys
const STORAGE_KEYS = {
  PREFERENCES: "cookiePreferences",
  CONSENT_DATE: "cookieConsentDate",
};

// * Default consent state
const DEFAULT_CONSENT_STATE = {
  essential: true,
  function: false,
  analytics: false,
  advertising: false,
};

// * Get default consent state
/**
@returns {Object} Default cookie consent preferences
*/
export const getDefaultConsentState = () => {
  return { ...DEFAULT_CONSENT_STATE };
};

// *Get cookie preferences from localStorage
/**
@returns {Object|null} Cookie preferences object or null if not found
 */
export const getCookiePreferences = () => {
  try {
    // Try to get the saved preferences from localStorage
    const savedPreferences = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
    if (savedPreferences) {
      const parsed = JSON.parse(savedPreferences);
      // Ensure essential is always true
      return {
        essential: true,
        function: parsed.function || false,
        analytics: parsed.analytics || false,
        advertising: parsed.advertising || false,
      };
    }
    // If there is no saved preferences, return null
    return null;
  } catch (error) {
    // If there is an error, log it and return null
    console.error("Error reading cookie preferences from localStorage:", error);
  }
  return null;
};

// * Save cookie preferences to localStorage
/**
@param {Object} preferences - Cookie preferences object
*/
export const saveCookiePreferences = (preferences) => {
  try {
    // Ensure essential is always true
    const preferencesToSave = {
      ...preferences,
      essential: true,
    };
    // Save the preferences to localStorage
    localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(preferencesToSave));
    // Save the consent date to localStorage
    localStorage.setItem(STORAGE_KEYS.CONSENT_DATE, new Date().toISOString());
  } catch (error) {
    console.error("Error saving cookie preferences to localStorage:", error);
  }
};

// * Check if user has given consent
/**
@returns {boolean} True if consent has been given
*/
export const hasConsent = () => {
  return getCookiePreferences() !== null;
};

// * Get consent date
/**
@returns {string|null} ISO date string or null if not found
*/
export const getConsentDate = () => {
  try {
    // Try to get the consent date from localStorage
    return localStorage.getItem(STORAGE_KEYS.CONSENT_DATE);
  } catch (error) {
    // If there is an error, log it and return null
    console.error("Error reading consent date from localStorage:", error);
    return null;
  }
};

// * Initialize cookie preferences on startup - reads from localStorage and applies preferences
/**
@returns {Object} Current cookie preferences
*/
export const initializeCookiePreferences = () => {
  const savedPreferences = getCookiePreferences();
  const preferences = savedPreferences || getDefaultConsentState();
  // Apply preferences (enable/disable scripts based on consent)
  applyCookiePreferences(preferences);
  // Return preferences
  return preferences;
};

// * Apply cookie preferences - enable/disable scripts based on user choices
/**
@param {Object} preferences - Cookie preferences object
*/
export const applyCookiePreferences = (preferences) => {
  // Essential cookies are always enabled
  if (preferences.essential) {
    enableEssentialCookies();
  }

  // Function cookies
  if (preferences.function) {
    enableFunctionCookies();
  } else {
    disableFunctionCookies();
  }

  // Analytics cookies
  if (preferences.analytics) {
    enableAnalyticsCookies();
  } else {
    disableAnalyticsCookies();
  }

  // Advertising cookies
  if (preferences.advertising) {
    enableAdvertisingCookies();
  } else {
    disableAdvertisingCookies();
  }
};

// * Enable essential cookies - essential cookies are required for the site to function
const enableEssentialCookies = () => {
  // These are typically session cookies, authentication, etc.
  console.log("Essential cookies enabled");
};

// * Disable essential cookies - should not be called, but included for completeness
// const disableEssentialCookies = () => {
//   // Essential cookies should not be disabled
//   console.warn("Attempted to disable essential cookies - this should not happen");
// };

// * Enable function cookies - function cookies enhance functionality and personalization
const enableFunctionCookies = () => {
  // TODO: Add your function cookie scripts here
  // Example: Load scripts for enhanced features, personalization, etc.
  console.log("Function cookies enabled");
};

// * Disable function cookies
const disableFunctionCookies = () => {
  // TODO: Add logic to remove function cookie scripts here
  // Example: Remove scripts, clear function-related cookies
  console.log("Function cookies disabled");
};

// * Enable analytics cookies - analytics cookies help understand how visitors interact with the site
const enableAnalyticsCookies = () => {
  // TODO: Add your analytics scripts here
  // Example: Google Analytics, Adobe Analytics, etc.
  console.log("Analytics cookies enabled");
};

// * Disable analytics cookies
const disableAnalyticsCookies = () => {
  // TODO: Add logic to disable analytics tracking here
  // Example: Disable tracking, clear analytics cookies
  console.log("Analytics cookies disabled");
};

// * Enable advertising cookies - advertising cookies are used to deliver personalized ads
const enableAdvertisingCookies = () => {
  // TODO: Add your advertising scripts here
  // Example: Google Ads, Facebook Pixel, etc.
  console.log("Advertising cookies enabled");
};

// * Disable advertising cookies
const disableAdvertisingCookies = () => {
  // TODO: Add logic to disable advertising tracking here
  // Example: Disable ad tracking, clear advertising cookies
  console.log("Advertising cookies disabled");
};

// * Helper function to load a script dynamically (for future use)
/**
@param {string} src - Script source URL
@param {string} id - Optional script ID
*/
export const loadScript = (src, id = null) => {
  if (document.querySelector(`script[src="${src}"]`)) {
    return; // Script already loaded
  }
  // Create a new script element
  const script = document.createElement("script");
  // Set the source URL of the script
  script.src = src;
  script.async = true;
  if (id) {
    script.id = id;
  }
  // Append the script to the head of the document
  document.head.appendChild(script);
};

// * Helper function to remove a script dynamically (for future use)
/**
@param {string} src - Script source URL or script ID
*/
export const removeScript = (src) => {
  // Select the script element with the given source URL or script ID
  const script = document.querySelector(`script[src="${src}"], script#${src}`);
  // If the script element is found, remove it
  if (script) {
    script.remove();
  }
};
