import React from 'react'
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Cta from '../components/cta/Cta';
import Testimony from "../components/Testimony/Testimony";
import Footer from "../components/Footer/Footer";

const landingpages = () => {
  return (
    <div>
      <Hero />
      <About />
      <Cta />
      <Testimony />
      <Footer />

    </div>
  )
}

export default landingpages
