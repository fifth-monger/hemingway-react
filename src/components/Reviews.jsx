import { useState } from 'react'

const REVIEWS = [
  {
    text: "Visited for the first time and was impressed with the overall selection and variety of beautiful day lilies — what I had seen on the website was well represented on site. The owners (Lucille and Scott) were friendly, attentive, and answered any questions I had...",
    author: '--- Cliff Barfield',
  },
  {
    text: "Even though bloom season is largely done in SC, there were quite a few flowers including a stunning bed of South Seas. Thanks for the friendly service in this stifling heat. I look forward to returning next bloom season to see the garden in full bloom!",
    author: '--- MichaelE Williams',
  },
  {
    text: "My visit to Hemingway Nursery was absolutely wonderful. They were so helpful and happy to share their knowledge when I had so many questions about growing day lilies. The whole atmosphere was tranquil serenity with so many varieties to choose from...",
    author: '--- Carol Conahan',
  },
]

export default function Reviews() {
  const [current, setCurrent] = useState(0)

  function prev() { setCurrent(c => (c - 1 + REVIEWS.length) % REVIEWS.length) }
  function next() { setCurrent(c => (c + 1) % REVIEWS.length) }

  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <p className="section-label">What Our Customers Say</p>
        <h2 className="serif" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 400, color: 'var(--bark)' }}>
          Happy gardeners, healthy daylilies
        </h2>

        <div className="reviews-scroll-wrapper">
          <div className="reviews-grid">
            {REVIEWS.map((r, i) => (
              <div key={r.author} className={`review-card${i === current ? ' review-card--active' : ''}`}>
                <div className="review-stars">
                  {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="review-text">{r.text}</p>
                <p className="review-author">{r.author}</p>
              </div>
            ))}
          </div>

          {/* Mobile carousel nav — hidden on desktop via CSS */}
          <div className="reviews-carousel-nav">
            <button className="reviews-arrow" onClick={prev} aria-label="Previous review">&#8249;</button>
            <div className="reviews-dots">
              {REVIEWS.map((_, i) => (
                <span key={i} className={`reviews-dot${i === current ? ' reviews-dot--active' : ''}`} />
              ))}
            </div>
            <button className="reviews-arrow" onClick={next} aria-label="Next review">&#8250;</button>
          </div>
        </div>

        <div className="review-cta-box">
          <h3 className="serif" style={{ fontSize: '1.3rem', fontWeight: 400, color: 'var(--gold-light)' }}>
            Enjoyed your daylilies?
          </h3>
          <p>
            Leaving a review helps other gardeners find us — and means the world to our small family nursery.
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
