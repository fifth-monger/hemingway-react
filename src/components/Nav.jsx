import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div className="nav-top">
        <Link to="/" className="nav-brand">
          Hemingway Nursery &nbsp;·&nbsp; <span>feat. Roycroft Daylilies</span>
        </Link>

        <ul className="nav-links">
          <li><NavLink to="/about">Our Story</NavLink></li>
          <li><NavLink to="/varieties">2026 Varieties</NavLink></li>
          <li><NavLink to="/about#visit">Visit &amp; Hours</NavLink></li>
          {/* TODO: Replace # with Square store URL */}
          <li><a href="#" className="nav-cta">Shop Daylilies</a></li>
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-mobile${open ? ' open' : ''}`}>
        <NavLink to="/about" onClick={() => setOpen(false)}>Our Story</NavLink>
        <NavLink to="/varieties" onClick={() => setOpen(false)}>2026 Varieties</NavLink>
        <NavLink to="/about#visit" onClick={() => setOpen(false)}>Visit &amp; Hours</NavLink>
        {/* TODO: Replace # with Square store URL */}
        <a href="#" className="nav-cta" onClick={() => setOpen(false)}>Shop Daylilies</a>
      </div>
    </nav>
  )
}
