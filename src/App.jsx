import React from 'react'
import Navbar from "./components/Navbar"
import HeroSection from './components/HeroSection'
import FeatureSection from "./components/FeatureSection";
import Gallery from "./components/Gallery"
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Gallery />
        <Testimonials />
        <Footer />

      </div>
      
    </>
  )
}

export default App