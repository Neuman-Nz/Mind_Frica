import React from 'react'
import HeroSection from '../HeroSection'
import FeatureSection from '../Features/FeatureSection'
import Gallery from '../Gallary/Gallery'
import Info from "../Info/info"
import LatestNews from '../LatestNews/LatestNews'

function HomePage({ sideMenuState, setSideMenuState }) {
  return (
    <div>
      <HeroSection sideMenuState={sideMenuState} setSideMenuState={setSideMenuState}/>
      <FeatureSection />
      <Gallery />
      <Info />
      <LatestNews />
    </div>
  )
}

export default HomePage
