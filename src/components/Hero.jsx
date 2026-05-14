import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="hero-eyebrow">Hemingway, South Carolina — Est. Roycroft</p>
        <h1 className="hero-title">
          Where <em>every bloom</em> is grown with intention
        </h1>
        <p className="hero-sub">
          Homegrown daylilies from our fields to your garden. Hundreds of cultivars,
          generations of care, and a 1-year guarantee on every plant.
        </p>
        <div className="hero-actions">
          {/* TODO: Replace # with Square store URL */}
          <a href="#" className="btn btn-primary">Browse Our Daylilies</a>
          <Link to="/about#visit" className="btn btn-outline">Plan Your Visit</Link>
        </div>
      </div>
      <span className="scroll-hint">Scroll</span>
    </section>
  )
}
