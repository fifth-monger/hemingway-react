import { useState, useRef, useEffect } from 'react'

const ZONES = [
  { zone: '3', f: '-40 to -30°F', c: '-40 to -34°C' },
  { zone: '4', f: '-30 to -20°F', c: '-34 to -29°C' },
  { zone: '5', f: '-20 to -10°F', c: '-29 to -23°C' },
  { zone: '6', f: '-10 to 0°F',   c: '-23 to -18°C' },
  { zone: '7', f: '0 to 10°F',    c: '-18 to -12°C', ideal: true },
  { zone: '8', f: '10 to 20°F',   c: '-12 to -7°C',  ideal: true },
  { zone: '9', f: '20 to 30°F',   c: '-7 to -1°C'   },
]

const FAQS = [
  {
    q: 'When should I plant daylilies?',
    a: 'In spring, wait until the last frost has passed so your plants can go straight into active growth. For fall planting, get them in the ground at least six weeks before your first expected frost — roots need time to anchor before winter sets in. If you garden in a hot climate, avoid planting during peak summer heat.',
  },
  {
    q: 'What is a fan?',
    a: 'A fan is a single daylily plant growing from one root system. When we ship two fans, that means two individual plants — enough to establish a small clump right away and fill in beautifully over the first season.',
  },
  {
    q: 'What is a diploid vs. tetraploid?',
    a: 'The difference is chromosomes. Diploids have 22; tetraploids have 44. In practice, tetraploids often produce larger, more richly colored blooms with thicker petals, while diploids tend toward finer, more graceful forms.',
  },
  {
    q: 'What is a rebloomer?',
    a: 'A rebloomer sends up more than one set of bloom stalks — called scapes — during a single season. Some follow one flush immediately with another; others rest briefly in between. Every cultivar we carry has demonstrated rebloom in our Zone 8 climate.',
  },
  {
    q: 'What do I do with the foliage in fall and winter?',
    a: 'Mostly nothing. Dormant varieties die back on their own as temperatures drop. Evergreen types stay above ground and may look brown or ragged after a hard freeze — you can trim that off for appearances, but the plant doesn\'t need it. Let it do its thing.',
  },
  {
    q: 'What is your guarantee policy?',
    a: 'Every plant we ship comes with a one-year guarantee. If your daylily doesn\'t thrive for any reason, reach out and we\'ll send a replacement — no questions asked. The only cost on your end is shipping for the replacement plant.',
  },
  {
    q: 'Do you offer gift certificates?',
    a: 'Yes — gift certificates are available in any amount. Call Scott at 919-306-4230 or purchase one directly through the online store.',
  },
]

export default function LearnMore() {
  const [openIndex, setOpenIndex] = useState(null)
  const zoneRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft]   = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  function checkScroll() {
    const el = zoneRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
  }

  useEffect(() => {
    const el = zoneRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll)
    window.addEventListener('resize', checkScroll)
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  function scrollZones(dir) {
    zoneRef.current?.scrollBy({ left: dir * 160, behavior: 'smooth' })
  }

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="learn-more">

      {/* ── About Us ── */}
      <section className="lm-section lm-about">
        <div className="container">
          <div className="lm-about-inner">

            <div className="lm-about-text">
              <p className="section-label">About the Nursery</p>
              <h2 className="lm-heading">A working nursery, rooted in one place.</h2>
              <div className="lm-prose">
                <p>
                  Hemingway Nursery sits in Hemingway, South Carolina — 53 miles west of Myrtle Beach
                  and 83 miles north of Charleston. Scott and Lucille Williams have made this place their
                  home and their livelihood. The nursery began as Roycroft Daylilies in Georgetown,
                  relocated to its current address, and opened to the public in March 2020.
                </p>
                <p>
                  The nursery holds official status as an American Hemerocallis Society National Display
                  Garden. Over 80 raised display beds are arranged across the property, each labeled with
                  metal markers identifying the hybridizer behind every cultivar — so visitors can wander
                  the rows and learn as they go. Our collection draws from hybridizers across the country,
                  and we carry varieties you won't find just anywhere.
                </p>
                <p>
                 Scott and Lucille love what they do, and it shows in every plant that leaves these fields.
                </p>
              </div>
            </div>

            <div className="lm-about-photos">
              {/* lm-about-photos-grid is absolutely positioned so it fills
                  the text column height without contributing its own intrinsic size */}
              <div className="lm-about-photos-grid">
                <img
                  src="/images/pee-dee-farmers-market.jpg"
                  alt="Pee Dee Farmers Market Spring Flower Festival 2024"
                  className="lm-about-photo lm-about-photo-wide"
                  style={{ objectPosition: 'left top' }}
                />
                <img
                  src="/images/under-the-magnolia.jpg"
                  alt="Daylilies under the magnolia at Hemingway Nursery"
                  className="lm-about-photo"
                />
                <img
                  src="/images/nursery-sign.jpg"
                  alt="Hemingway Nursery sign"
                  className="lm-about-photo"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Climate Zones ── */}
      <section className="lm-section lm-climate">
        <div className="container">
          <p className="section-label">Hardiness Zones</p>
          <h2 className="lm-heading">Finding your zone.</h2>
          <p className="lm-intro-text">
            Daylilies are tough plants, performing reliably from Zone 3 winters that dip to -40°F
            all the way through the mild winters of Zone 9. Zones 7 and 8 are the sweet spot —
            every cultivar in our catalog should thrive for you there. Outside those zones,
            each listing shows its recommended range.
          </p>
          <p className="lm-intro-text">
            Our zone ratings are intentionally conservative. We based them on consistent real-world
            performance reported by customers — without giving credit for snow cover or heavy
            mulching that can mask a marginal zone. If a listing says Zone 6, it means Zone 6
            with no safety net.
          </p>
          <p className="zone-temp-note">Minimum winter temperature per zone</p>
          <div className="zone-scroll-wrapper">
            {canScrollLeft && (
              <button className="zone-arrow zone-arrow--left" onClick={() => scrollZones(-1)} aria-label="Scroll left">&#8249;</button>
            )}
            <div className="zone-grid" ref={zoneRef} onScroll={checkScroll}>
              {ZONES.map(z => (
                <div key={z.zone} className={`zone-card${z.ideal ? ' zone-card--ideal' : ''}`}>
                  <span className="zone-num">Zone {z.zone}</span>
                  <span className="zone-f">{z.f}</span>
                  {z.ideal && <span className="zone-badge">Ideal</span>}
                </div>
              ))}
            </div>
            {canScrollRight && (
              <button className="zone-arrow zone-arrow--right" onClick={() => scrollZones(1)} aria-label="Scroll right">&#8250;</button>
            )}
          </div>
          <p className="zone-swipe-hint">Swipe to explore all zones →</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="lm-section lm-faq">
        <div className="container">
          <div className="faq-inner">

            {/* Column 1: label + heading + accordion */}
            <div className="faq-main">
              <p className="section-label">Common Questions</p>
              <h2 className="lm-heading">FAQ</h2>
              <div className="faq-list">
              {FAQS.map((item, i) => (
                <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
                  <button
                    className="faq-question"
                    onClick={() => toggle(i)}
                    aria-expanded={openIndex === i}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {openIndex === i ? '−' : '+'}
                    </span>
                  </button>
                  {openIndex === i && (
                    <p className="faq-answer">{item.a}</p>
                  )}
                </div>
              ))}
            </div>
            </div>{/* end faq-main */}

            {/* Column 2: sidebar */}
            <aside className="faq-sidebar">
              <div className="faq-sidebar-card">
                <img
                  src="/images/bob-roycroft-field.jpg"
                  alt="Bob Roycroft working in the field"
                  className="faq-sidebar-photo"
                />
                <div className="faq-sidebar-body">
                  <h3 className="faq-sidebar-heading">Still have questions?</h3>
                  <p className="faq-sidebar-text">
                    Scott loves talking daylilies. Give him a call or shoot an email
                    — no question is too small.
                  </p>
                  <a href="tel:9193064230" className="faq-sidebar-phone">
                    919-306-4230
                  </a>
                  <a href="mailto:info@hemingwaynursery.com" className="faq-sidebar-email">
                    info@hemingwaynursery.com
                  </a>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

    </div>
  )
}
