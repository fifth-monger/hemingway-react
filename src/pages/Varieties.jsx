import Nav from '../components/Nav'
import SeasonBanner from '../components/SeasonBanner'
import FeaturedVariety from '../components/FeaturedVariety'
import NewVarieties from '../components/NewVarieties'
import Footer from '../components/Footer'

export default function Varieties() {
  return (
    <>
      <Nav />
      <SeasonBanner />
      <FeaturedVariety />
      <NewVarieties />
      <section className="catalog-cta">
        <div className="container">
          <p>
            Hundreds of additional cultivars available in our full catalog —
            browse, read descriptions, and order direct from our store.
          </p>
          <a href="https://hemingwaynursery.square.site/s/shop" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Shop the Entire Catalog &rarr;</a>
        </div>
      </section>
      <Footer />
    </>
  )
}
