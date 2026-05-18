import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: Wire to Mailchimp or preferred email provider
    setSubmitted(true)
    setEmail('')
  }

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
            {submitted ? (
              <p className="newsletter-thanks">You're on the list. Talk soon.</p>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button className="newsletter-btn" type="submit">Subscribe</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
