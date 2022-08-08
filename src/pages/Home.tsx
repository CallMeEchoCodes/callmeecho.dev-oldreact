import AboutHero from '../components/AboutHero'
import MainHero from '../components/MainHero'
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'

function Home (): React.ReactElement {
  useEffect(() => {
    document.documentElement.classList.add('transition-all')
  })

  return (
    <>
      <Navbar />
      <MainHero />
      <AboutHero />
    </>
  )
}

export default Home
