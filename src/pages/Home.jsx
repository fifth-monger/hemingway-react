import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import FeaturedVariety from '../components/FeaturedVariety'
import Pillars from '../components/Pillars'
import Reviews from '../components/Reviews'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Intro />
      <Pillars />
      <Reviews />
      <Newsletter />
      <Footer />
    </>
  )
}
