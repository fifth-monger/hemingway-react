const REVIEWS = [
  {
    text: "The plants arrived huge and healthy — two fans each, just like they promised. I've ordered from other nurseries and nothing compares. Blackthorne is already blooming in its first season.",
    author: 'Margaret T. — Virginia',
  },
  {
    text: "Scott and Lucille are the most knowledgeable, genuinely kind people. Called with questions about zone compatibility and they talked with me for 20 minutes. Rare to find that anymore.",
    author: 'Dale R. — North Carolina',
  },
  {
    text: "Third year ordering from Hemingway Nursery. My garden has been transformed. The Roycroft introductions are stunning — you can't find these cultivars just anywhere.",
    author: 'Susan M. — Georgia',
  },
]

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <p className="section-label">What Our Customers Say</p>
        <h2 className="serif" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 400, color: 'var(--bark)' }}>
          Happy gardeners, healthy daylilies
        </h2>

        <div className="reviews-grid">
          {REVIEWS.map(r => (
            <div key={r.author} className="review-card">
              <div className="review-stars">
                {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="review-text">{r.text}</p>
              <p className="review-author">{r.author}</p>
            </div>
          ))}
        </div>

        <div className="review-cta-box">
          <h3 className="serif" style={{ fontSize: '1.3rem', fontWeight: 400, color: 'var(--gold-light)' }}>
            Enjoyed your daylilies?
          </h3>
          <p>
            We'd love to hear about your garden. Leaving a review helps other gardeners find
            us and means the world to our small family nursery.
          </p>
          <a
            href="https://g.page/HemingwayNursery/review?rc"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            Leave a Google Review
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
