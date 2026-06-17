export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-bg">
          <div className="newsletter-inner">
            <p className="newsletter-eyebrow">Stay in the Loop</p>
            <h2 className="newsletter-heading">
              Grown here. Sent to your inbox.
            </h2>
            <p className="newsletter-sub">
              New varieties, planting tips, sale windows, and field updates —
              once a month during the growing season.
            </p>
            <form
              className="newsletter-form"
              action="https://www.ymlp.com/subscribe.php?id=gusmewegmgs"
              method="post"
              target="_blank"
              rel="noopener noreferrer"
            >
              <input
                type="email"
                name="YMP0"
                placeholder="your@email.com"
                required
              />
              <button className="newsletter-btn" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
