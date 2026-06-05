import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import LearnMore from '../components/LearnMore'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Hemingway Nursery | Featuring Roycroft Daylilies</title>
        <meta name="description" content="Learn about Hemingway Nursery, featuring Roycroft Daylilies. An AHS National Display Garden in Hemingway, SC featuring daylily introductions from Bob Roycroft and other hybridizers." />
      </Helmet>
      <Nav />
      <LearnMore />
      <Footer />
    </>
  )
}
