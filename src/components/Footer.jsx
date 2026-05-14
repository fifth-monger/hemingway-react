import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>
            <p className="footer-brand">
              Hemingway Nursery &nbsp;·&nbsp; <span>Roycroft Daylilies</span>
            </p>
            <p className="footer-tagline">
              3954 Hemingway Highway<br />
              Hemingway, SC 29554<br /><br />
              Lucille: 919-306-4329<br />
              Scott: 919-306-4230
            </p>
          </div>

          <div className="footer-col">
            <h5>Shop</h5>
            <ul>
              {/* TODO: Replace all # hrefs in this column with Square store URLs */}
              <li><a href="#">Browse All Daylilies</a></li>
              <li><a href="#">2026 New Varieties</a></li>
              <li><a href="#">Clearance Items</a></li>
              <li><a href="#">Sale Items</a></li>
              <li><a href="#">Roycroft Introductions</a></li>
              <li><a href="#">Gift Certificates</a></li>
              <li><a href="#">Seedlings</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Our Nursery</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              {/* TODO: Replace # with Square shipping info page URL */}
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Climate Zones</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Photo Gallery</a></li>
              <li><Link to="/about#visit">Map &amp; Directions</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Account</h5>
            <ul>
              {/* TODO: Replace all # hrefs in this column with Square account URLs */}
              <li><a href="#">Log In</a></li>
              <li><a href="#">Shopping Cart</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Out of Stock</a></li>
              <li><a href="#">Printed Catalog</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Hemingway Nursery · Roycroft Daylilies. All rights reserved.</span>
          <a
            href="https://g.page/HemingwayNursery/review?rc"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'rgba(240,232,216,0.4)', textDecoration: 'none' }}
          >
            Leave us a Google review
          </a>
        </div>
      </div>
    </footer>
  )
}
