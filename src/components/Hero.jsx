import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="hero-eyebrow">Hemingway, South Carolina &nbsp;·&nbsp; Featuring Roycroft Daylilies</p>
        <h1 className="hero-title">
          Where <em>every bloom</em> is grown with intention
        </h1>
        <p className="hero-sub">
          Homegrown daylilies from our fields to your garden — hundreds of cultivars
          and a 1-year guarantee on every plant.
        </p>
        <div className="hero-actions">
          <a href="https://hemingwaynursery.square.site/s/shop" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Browse Our Daylilies</a>
          <Link to="/visit" className="btn btn-outline">Plan Your Visit</Link>
        </div>
      </div>
      <span className="scroll-hint">Scroll</span>
    </section>
  )
}
