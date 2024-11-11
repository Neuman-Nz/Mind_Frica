import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react'
import Navbar from "./components/Navbar"
import HeroSection from './components/HeroSection'
import FeatureSection from "./components/Features/FeatureSection";
import Gallery from "./components/Gallary/Gallery"
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AboutUs from './components/AboutUs/aboutUs';
import NewsLetter from './components/Newsletter/Newsletter';

export const App = () => {
  return (
    <div className='App'>
      {/* <Navbar /> */}
        <HeroSection />
        <FeatureSection />
        <AboutUs/>
        <Gallery />
        {/* <Testimonials /> */}
        <NewsLetter/>
        <Footer />
      
    </div>
  )
}

export default App