import AboutHero from '../components/AboutHero'
import MainHero from '../components/MainHero'
import Navbar from '../components/Navbar'

function Home (): React.ReactElement {
  return (
    <>
      <Navbar />
      <MainHero />
      <AboutHero />
    </>
  )
}

export default Home
