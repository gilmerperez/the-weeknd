"use client";

import { useState } from "react";
import Cookies from "../components/Cookies/Cookies";
import Footer from "../components/Footer/Footer";

export default function ClientWrapper() {
  // * Cookies state
  const [isCookiesOpen, setIsCookiesOpen] = useState(false);

  // Open cookies
  const openCookies = () => {
    setIsCookiesOpen(true);
  };

  // Close cookies
  const closeCookies = () => {
    setIsCookiesOpen(false);
  };

  return (
    <>
      <Footer onCookieChoicesClick={openCookies} />
      <Cookies isOpen={isCookiesOpen} onClose={closeCookies} />
    </>
  );
}
