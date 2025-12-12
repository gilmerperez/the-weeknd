import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Clothing from "./pages/Clothing/Clothing";
import Music from "./pages/Music/Music";
import Tour from "./pages/Tour/Tour";
import Account from "./pages/Account/Account";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import Help from "./pages/Help/Help";
import LegalNotice from "./pages/LegalNotice/LegalNotice";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/music" element={<Music />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/account" element={<Account />} />
          <Route path="/terms-of-sale" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/help" element={<Help />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
