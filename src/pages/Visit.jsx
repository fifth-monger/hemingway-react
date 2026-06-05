import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import VisitSection from '../components/VisitSection'
import Footer from '../components/Footer'

export default function Visit() {
  return (
    <>
      <Helmet>
        <title>Visit Us | Hemingway Nursery | Hemingway, SC</title>
        <meta name="description" content="Visit Hemingway Nursery at 3954 Hemingway Highway, Hemingway SC. Open Thursday through Saturday 9am-4pm, April through June and September through October." />
      </Helmet>
      <Nav />
      <VisitSection />
      <Footer />
    </>
  )
}
