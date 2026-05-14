import { Link } from 'react-router-dom'
import featured from '../data/featured.json'

export default function FeaturedVariety({ compact = false }) {
  return (
    <section className={`featured-section${compact ? ' compact' : ''}`}>
      <div className="container">
        <div className="featured-inner">
          <div>
            <span className="featured-badge">
              {compact ? 'Featured Cultivar' : "This Week's Featured Cultivar"}
            </span>
            <h2 className="featured-name"><em>{featured.name}</em></h2>
            <p className="featured-desc">{featured.description}</p>

            {!compact && (
              <>
                {(featured.award || featured.growth || featured.style) && (
                  <div className="featured-meta">
                    {featured.award && (
                      <div className="featured-meta-item">
                        <span className="label">Award</span>
                        <span className="val">{featured.award}</span>
                      </div>
                    )}
                    {featured.growth && (
                      <div className="featured-meta-item">
                        <span className="label">Growth</span>
                        <span className="val">{featured.growth}</span>
                      </div>
                    )}
                    {featured.style && (
                      <div className="featured-meta-item">
                        <span className="label">Style</span>
                        <span className="val">{featured.style}</span>
                      </div>
                    )}
                  </div>
                )}
                {/* TODO: Replace featured.square_url with direct Square item URL */}
                <a href={featured.square_url} className="btn btn-primary">
                  View {featured.name} &amp; Order
                </a>
              </>
            )}

            {compact && (
              <Link to="/varieties" className="btn btn-primary">
                Check Out New Varieties &rarr;
              </Link>
            )}
          </div>

          <img
            src={featured.image_url}
            alt={featured.image_alt}
            className="featured-img"
          />
        </div>
      </div>
    </section>
  )
}
