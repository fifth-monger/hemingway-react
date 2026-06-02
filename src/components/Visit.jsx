export default function Visit() {
  return (
    <section className="visit-outer" id="visit">
      <div className="container visit-section">
      <div>
        <p className="section-label">Come See Us</p>
        <h2 className="serif" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '1rem', color: 'var(--bark)' }}>
          Hours &amp; Getting Here
        </h2>
        <p style={{ color: 'var(--text-mid)', fontSize: '1.045rem', maxWidth: '420px' }}>
          We live at the nursery, so if you'd like to visit outside scheduled hours, just call
          ahead. We're happy to accommodate when we're around.
        </p>

        <table className="hours-table">
          <tbody>
            <tr><td>Spring Season</td><td>Apr 1 – Jun 30 (closed Jul 1–Aug 31)</td></tr>
            <tr><td>Fall Season</td><td>Sept 1 – Oct 31</td></tr>
            <tr><td>Open Days</td><td>Thursday, Friday, Saturday</td></tr>
            <tr><td>Hours</td><td>9:00 am – 4:00 pm</td></tr>
            <tr><td>Online Orders</td><td>Always open, Apr 1 – Oct 31 shipping</td></tr>
          </tbody>
        </table>

        <div className="contact-block">
          <div className="contact-item">
            <span className="ckey">Address</span>
            <span>3954 Hemingway Highway, Hemingway, SC 29554</span>
          </div>
          <div className="contact-item">
            <span className="ckey">Lucille</span>
            <a href="tel:9193064329">919-306-4329</a>
          </div>
          <div className="contact-item">
            <span className="ckey">Scott</span>
            <a href="tel:9193064230">919-306-4230</a>
          </div>
          <div className="contact-item">
            <span className="ckey">Email</span>
            <a href="mailto:info@hemingwaynursery.com">info@hemingwaynursery.com</a>
          </div>
        </div>
      </div>

      <div>
        <div className="guarantee-box">
          <h4>While You're in the Area</h4>
          <p>
            Make a day of it — visit us and Scott's Barbeque for lunch on the same trip.
            Scott's is world-renowned for their award-winning barbecue. There's often a line
            out the door, and for good reason.
          </p>
        </div>

        <div className="info-box">
          <h4 className="serif">Visiting in person?</h4>
          <p>
            Container-grown daylilies are available for purchase at the nursery — well-established
            in pots and ready to go home immediately. Container plants cannot be shipped by mail;
            all mail orders are shipped bare-root.
          </p>
        </div>

        <div className="gift-box">
          <h4>Gift Certificates</h4>
          <p>
            Hemingway Nursery Gift Certificates make wonderful gifts for any occasion — available
            for any amount. Call Scott at 919-306-4230 or purchase through our website.
          </p>
        </div>
      </div>
      </div>
    </section>
  )
}
