export default function VisitSection() {
  return (
    <div className="visit-page">

      {/* ── Page Banner ── */}
      <div className="vs-banner">
        <div className="vs-banner-inner">
          <img
            src="/images/may-29-daylilies.jpg"
            alt="Container daylilies under the shade structure at Hemingway Nursery"
          />
        </div>
      </div>

      {/* ── Come See Us ── */}
      <section className="vs-section vs-come">
        <div className="container">
          <div className="vs-come-inner">

            <div className="vs-info">
              <p className="section-label">Hours &amp; Location</p>
              <h2 className="vs-heading">Come see us.</h2>
              <p className="vs-note">
                We're open during bloom season — generally late April through June,
                depending on how the weather cooperates. Call ahead if you're making
                a trip, and we'll let you know what's looking best in the field.
              </p>

              <table className="hours-table">
                <tbody>
                  <tr>
                    <td>Thu – Sat</td>
                    <td>9:00 am – 4:00 pm</td>
                  </tr>
                  <tr>
                    <td>Spring Season</td>
                    <td>April 1 – end of June</td>
                  </tr>
                  <tr>
                    <td>Fall Season</td>
                    <td>September 1 – end of October</td>
                  </tr>
                  <tr>
                    <td>Closed</td>
                    <td>July 1 – August 31</td>
                  </tr>
                </tbody>
              </table>

              <div className="contact-block">
                <div className="contact-item">
                  <span className="ckey">Phone</span>
                  <div className="contact-numbers">
                    <span><a href="tel:8439335675">store: 843-933-5675</a></span>
                    <span><a href="tel:9193064230">Scott: 919-306-4230</a></span>
                    <span><a href="tel:9193064329">Lucille: 919-306-4329</a></span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="ckey">Address</span>
                  <span>3954 Hemingway Hwy <br /> Hemingway, South Carolina</span>
                </div>
                <div className="contact-item">
                  <span className="ckey">Email</span>
                  <span><a href="mailto:info@hemingwaydaylilies.com">info@hemingwaynursery.com</a></span>
                </div>
              </div>
            </div>

            <div className="vs-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13272.447643357369!2d-79.53433933449438!3d33.731922172465495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88ffe74a94305463%3A0x804f5ddeeefea826!2sHemingway%20Nursery%20Featuring%20Roycroft%20Daylilies!5e0!3m2!1sen!2sus!4v1779221613871!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hemingway Nursery on Google Maps"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Tips for Visiting ── */}
      <section className="vs-section vs-tips">
        <div className="container">
          <p className="section-label">Before You Arrive</p>
          <h2 className="vs-heading">Tips for your visit.</h2>
          <div className="vs-tips-grid">

            <div className="vs-tip-card">
              <img
                src="/images/making-room.jpg"
                alt="Preparing daylily beds at Hemingway Nursery"
                className="vs-tip-photo"
              />
              <div className="vs-tip-content">
                <h3>Wagons available</h3>
                <p>
                  Grab a wagon at the entrance and load up — no hauling plants by hand across the property.
                </p>
              </div>
            </div>

            <div className="vs-tip-card">
              <img
                src="/images/nursery-picture-3.jpg"
                alt="The 80+ raised display beds at Hemingway Nursery"
                className="vs-tip-photo"
              />
              <div className="vs-tip-content">
                <h3>Walk the display beds</h3>
                <p>
                  Over 80 raised display beds, every cultivar labeled. Walk the rows,
                  take your time, and let the plants speak for themselves.
                </p>
              </div>
            </div>

            <div className="vs-tip-card">
              <img
                src="/images/misc-parking-lot.jpg"
                alt="Daylily seedling trays at Hemingway Nursery"
                className="vs-tip-photo"
              />
              <div className="vs-tip-content">
                <h3>Shop container plants</h3>
                <p>
                  In addition to bare-root, we carry potted daylilies during the
                  season — already growing, already blooming. Great if you want to
                  see exactly what you're taking home.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── While You're in the Area ── */}
      <section className="vs-section vs-area">
        <div className="container">
          <div className="vs-area-inner">

            <div className="vs-area-text">
              <p className="section-label">Worth the Detour</p>
              <h2 className="vs-heading">While you're in the area.</h2>
              <p>
                Scott's Bar-B-Que is just down the road — a South Carolina institution
                that's been smoking whole hogs over wood coals since 1972. It's the kind
                of place food writers travel across the country to visit. Plan your trip
                around it.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=2734+Hemingway+Hwy+Hemingway+SC+29554"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-outline-dark"
                style={{ fontSize: '0.75rem', marginTop: '1.5rem' }}
              >
                Get Directions
              </a>
            </div>

            <div className="vs-area-img">
              <img
                src="/images/maxresdefault.jpg"
                alt="Scott's Bar-B-Que in Hemingway, SC"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
