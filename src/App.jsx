import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Clothing from "./pages/Clothing/Clothing";
import Music from "./pages/Music/Music";
import Tour from "./pages/Tour/Tour";
import Film from "./pages/Film/Film";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
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
          <Route path="/home" element={<Home />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/music" element={<Music />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/film" element={<Film />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
