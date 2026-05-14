export default function Pillars() {
  return (
    <section className="pillars-section">
      <div className="container">
        <p className="section-label">Why Hemingway Nursery</p>
        <h2 className="serif section-title" style={{ color: 'var(--bark)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: 0 }}>
          Our promise to every gardener
        </h2>
        <div className="pillars-grid">
          <div className="pillar">
            <div className="pillar-num">01</div>
            <h3>Grown Here, Shipped Fresh</h3>
            <p>
              We ship bare-root within 24 hours of harvest — manicured, treated, and packed
              to arrive in excellent condition. Large, established plants, not afterthoughts.
            </p>
          </div>
          <div className="pillar">
            <div className="pillar-num">02</div>
            <h3>No Hidden Fees</h3>
            <p>
              Your card is never charged until the week of shipment. No upcharge for credit
              cards. No surprises. Just honest pricing for beautiful plants.
            </p>
          </div>
          <div className="pillar">
            <div className="pillar-num">03</div>
            <h3>One-Year Guarantee</h3>
            <p>
              If your flowers don't grow as you'd like for any reason, we'll ship you a
              replacement — no questions asked — for up to a year after purchase.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
