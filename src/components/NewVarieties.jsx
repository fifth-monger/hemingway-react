import varieties from '../data/varieties.json'

export default function NewVarieties() {
  return (
    <section className="varieties-section" id="varieties">
      <div className="container">
        <p className="section-label">Fresh for This Season</p>
        <h2 className="section-title">2026 New Arrivals</h2>
        <p style={{ color: 'rgba(240,232,216,0.7)', maxWidth: '480px', fontSize: '0.95rem', marginTop: '0.5rem' }}>
          {varieties.length} new cultivars joining our collection this year.
          Supply is limited — order early to secure yours.
        </p>
        <div className="varieties-grid">
          {varieties.map(v => (
            <div key={v.name} className="variety-chip">{v.name}</div>
          ))}
        </div>
        <p className="varieties-note">
          We list only cultivars that re-bloom for us here in lower Zone 8.
        </p>
      </div>
    </section>
  )
}
