import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import FeatureSection from "./components/Features/FeatureSection";
// import Gallery from "./components/Gallary/Gallery";
// import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer/Footer";
// import AboutUs from "./components/AboutUs/aboutUs";
// import NewsLetter from "./components/Newsletter/Newsletter";
// import Info from "./components/Info/Info";
// import LatestNews from "./components/LatestNews/LatestNews";
import HomePage from "./components/HomePage/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Careers from "./components/Careers/Careers";

export const App = () => {
  const [sideMenuState, setSideMenuState] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar
          sideMenuState={sideMenuState}
          setSideMenuState={setSideMenuState}
        />
        <Routes>
          <Route path="/" element={<HomePage sideMenuState={sideMenuState} setSideMenuState={setSideMenuState}/>} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
