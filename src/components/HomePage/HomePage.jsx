import React from 'react'
import HeroSection from '../HeroSection'
import FeatureSection from '../Features/FeatureSection'
import Gallery from '../Gallary/Gallery'
import Info from '../Info/Info'
import LatestNews from '../LatestNews/LatestNews'

function HomePage() {
  return (
    <div>
      <HeroSection/>
        <FeatureSection />
        <Gallery/>
        <Info/>
        <LatestNews/>
    </div>
  )
}

export default HomePage
