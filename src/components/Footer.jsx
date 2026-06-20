import { Link, NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">

          {/* Column 1 — Contact */}
          <div className="footer-contact-col">
            <h5>Contact</h5>
            <div className="footer-contact">
              <span>3954 Hemingway Hwy, Hemingway, SC 29554</span>
              <span>
                <a href="tel:8439335675">store: 843-933-5675</a>
              </span>
              <span>
                <a href="mailto:info@hemingwaynursery.com">info@hemingwaynursery.com</a>
              </span>
            </div>
          </div>

          {/* Column 2 — Brand + Review CTA */}
          <div className="footer-brand-col">
            <p className="footer-brand">Hemingway Nursery</p>
            <div className="footer-brand-divider">
              <span>✦</span>
            </div>
            <a
              href="https://g.page/HemingwayNursery/review?rc"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-review-btn"
            >
              ★ Leave us a Google review
            </a>
          </div>

          {/* Column 3 — Navigation */}
          <div className="footer-col">
            <h5>Navigate</h5>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">Learn More</NavLink></li>
              <li><NavLink to="/visit">Visit Us</NavLink></li>
              <li><a href="https://hemingwaynursery.square.site/s/shop" target="_blank" rel="noopener noreferrer">Shop Daylilies</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© 2026 Hemingway Nursery. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
