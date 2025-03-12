import React from 'react'
import Hero from './hero-section'
import Feature from './feature-section'
import Discover from './discover-section'
import CallToActionSection from './call-to-action-section'
import Footer from './footer-section'

const Landing = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Discover />
      <CallToActionSection />
      <Footer />
    </div>
  )
}

export default Landing