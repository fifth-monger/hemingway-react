import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: Wire to Mailchimp or preferred email provider
    setEmail('')
  }

  return (
    <section className="newsletter-section">
      <div className="container">
        <p className="section-label">Stay in the Loop</p>
        <h2 className="serif" style={{ fontSize: '1.8rem', fontWeight: 400, color: 'var(--bark)' }}>
          Nursery Newsletter
        </h2>
        <p>
          Planting tips, sale announcements, and new variety news — sent monthly during the
          growing season. Unsubscribe anytime.
        </p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button className="btn btn-primary" type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  )
}
