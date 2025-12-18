import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Tour from "./pages/Tour/Tour";
import Music from "./pages/Music/Music";
import Clothing from "./pages/Clothing/Clothing";
import Account from "./pages/Account/Account";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import Help from "./pages/Help/Help";
import Orders from "./pages/Help/Orders/Orders";
import Shipping from "./pages/Help/Shipping/Shipping";
import Returns from "./pages/Help/Returns/Returns";
import Legal from "./pages/Legal/Legal";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/music" element={<Music />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/account" element={<Account />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/help" element={<Help />} />
          <Route path="/help/orders" element={<Orders />} />
          <Route path="/help/returns" element={<Returns />} />
          <Route path="/help/shipping" element={<Shipping />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer onCookieChoicesClick={openCookies} />
        <Cookies isOpen={isCookiesOpen} onClose={closeCookies} />
      </Router>
    </>
  );
}

export default App;
