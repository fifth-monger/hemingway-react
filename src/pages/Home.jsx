import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Reviews from '../components/Reviews'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Hemingway Nursery | Daylilies | Featuring Roycroft Daylilies</title>
        <meta name="description" content="Hemingway Nursery in Hemingway, SC features premium daylilies including Roycroft Daylilies introductions. Browse our collection of diploid and tetraploid daylilies, featuring Roycroft Daylilies." />
      </Helmet>
      <Nav />
      <Hero />
      <Intro />
      <Reviews />
      <Newsletter />
      <Footer />
    </>
  )
}
