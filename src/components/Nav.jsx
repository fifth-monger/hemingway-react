import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div className="nav-top">
        <Link to="/" className="nav-brand">
          Hemingway Nursery
          <span className="nav-brand-sep">&nbsp;·&nbsp;</span>
          <span className="nav-brand-sub">feat. Roycroft Daylilies</span>
        </Link>

        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">Learn More</NavLink></li>
          <li><NavLink to="/visit">Visit Us</NavLink></li>
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
        <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>Learn More</NavLink>
        <NavLink to="/visit" onClick={() => setOpen(false)}>Visit Us</NavLink>
        {/* TODO: Replace # with Square store URL */}
        <a href="#" className="nav-cta" onClick={() => setOpen(false)}>Shop Daylilies</a>
      </div>
    </nav>
  )
}
