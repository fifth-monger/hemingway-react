export default function Story() {
  return (
    <section className="story-section">
      <div className="container story-inner">
        <div className="story-img-col" />
        <div className="story-text-col">
          <p className="section-label" style={{ color: 'var(--gold-light)' }}>Our Introductions</p>
          <h2 className="serif" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1.5rem', color: 'var(--parchment)' }}>
            Roycroft Originals
          </h2>
          <p>
            Bob Roycroft has been introducing original daylily cultivars since 2009. Each year,
            carefully selected seedlings make their way from the trial beds into our catalog —
            and into gardens across the country.
          </p>
          <p>
            Our most recent introduction, <em>Lucille Williams</em> (2023), was named in honor
            of the family. Earlier cultivars from 2009–2022 remain available while supplies last.
          </p>
          <p>
            We also maintain a collection of unregistered seedlings — Roycroft SELECT, SUPER GIANT,
            DOUBLE FLOWERED, WHITE, GIANT ORANGE, and UFO types — for gardeners who love to
            discover something before it has a name.
          </p>
          <br />
          {/* TODO: Replace # with Square Roycroft Introductions category URL */}
          <a href="#" className="btn btn-outline" style={{ fontSize: '0.75rem' }}>
            View All Roycroft Introductions
          </a>
        </div>
      </div>
    </section>
  )
}
