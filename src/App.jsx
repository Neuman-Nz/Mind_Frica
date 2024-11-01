import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect, useRef } from 'react';
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import FeatureSection from "./components/FeatureSection";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export const App = () => {
  const [scrollLocked, setScrollLocked] = useState(true);
  const heroSectionRef = useRef(null);
  const [heroLockedOnReEntry, setHeroLockedOnReEntry] = useState(false);

  // Disable page scroll while scrollLocked is true
  useEffect(() => {
    document.body.style.overflow = scrollLocked ? 'hidden' : 'auto';
  }, [scrollLocked]);

  // Function to unlock the scroll once slides are completed
  const unlockScroll = () => {
    setScrollLocked(false);
  };

  // Check visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroSectionRef.current) {
        const rect = heroSectionRef.current.getBoundingClientRect();
        const isVisible = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

        if (isVisible) {
          setScrollLocked(true); // Lock scroll when HeroSection is fully visible
          // setHeroLockedOnReEntry(true);
        } else {
          setHeroLockedOnReEntry(false); // Unlock when not fully in view
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on component mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Log when heroLockedOnReEntry changes
  useEffect(() => {
    console.log("heroLockedOnReEntry changed to:", heroLockedOnReEntry);
  }, [heroLockedOnReEntry]);

  return (
    <div style={{ height: "100vh", width: "100%", backgroundColor: "black" }}>
      <Navbar />
      <div>
        <HeroSection unlockScroll={unlockScroll} heroLockedOnReEntry={heroLockedOnReEntry} />
      </div>
      
      <div className="max-w-5xl mx-auto pt-20 px-6">
        <FeatureSection />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
};

export default App;
