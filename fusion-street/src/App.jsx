import "./app.css";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Locations from "./pages/Locations.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop.jsx";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/safari" element={<Locations />} />
          <Route path="/understanding" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
