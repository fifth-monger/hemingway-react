import { useState } from 'react'

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
    a: 'The difference is chromosomes. Diploids have 22; tetraploids have 44. In practice, tetraploids often produce larger, more richly colored blooms with thicker petals, while diploids tend toward finer, more graceful forms. Hybridizers cross within each type — diploids with diploids, tetraploids with tetraploids.',
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
    a: 'Yes. Daylilies make a wonderful gift, and our gift certificates are available in any amount. Call Scott at 919-306-4230 or purchase one directly through the online store.',
  },
]

export default function LearnMore() {
  const [openIndex, setOpenIndex] = useState(null)

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
                  home and their livelihood, carrying on a tradition that began under the name Roycroft
                  Daylilies in Georgetown before relocating to its current address and opening to the
                  public in March 2020.
                </p>
                <p>
                  The nursery holds official status as an American Hemerocallis Society National Display
                  Garden. Forty raised display beds are arranged across the property, each labeled with
                  metal markers identifying the hybridizer behind every cultivar — so visitors can wander
                  the rows and learn as they go. Our collection draws from hybridizers across the country,
                  and we carry varieties you won't find just anywhere.
                </p>
                <p>
                  Over the years, Hemingway Nursery has introduced original daylilies for five hybridizers:
                  Cindy Cribb, Bob Roycroft, Bob Roycroft Jr., Lucille Williams, and Wyatt LeFevre —
                  whose introductions carry the "FORSYTH" prefix and were developed in Kernersville, NC.
                  Select Roycroft introductions from 2009 through 2023 remain available, including the
                  2023 variety named for Lucille Williams herself. Scott and Lucille love what they do,
                  and it shows in every plant that leaves these fields.
                </p>
              </div>
            </div>

            <div className="lm-about-photos">
              <img
                src="src/images/misc-Bob-hybridizing.jpg"
                alt="Bob Roycroft hybridizing daylilies"
                className="lm-about-photo"
              />
              <img
                src="src/images/nursery-sign.jpg"
                alt="Hemingway Nursery sign"
                className="lm-about-photo"
              />
              <img
                src="src/images/misc-drying-rack.jpg"
                alt="Bare-root daylilies on the drying rack"
                className="lm-about-photo lm-about-photo-wide"
              />
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
            each individual listing shows its recommended range.
          </p>
          <p className="lm-intro-text">
            Our zone ratings are intentionally conservative. We based them on consistent real-world
            performance reported by customers — without giving credit for snow cover or heavy
            mulching that can mask a marginal zone. If a listing says Zone 6, it means Zone 6
            with no safety net.
          </p>
          <div className="lm-photo-strip">
            <img src="src/images/Pardon-Me-Clump.jpg"           alt="Pardon Me daylily clump in bloom" />
            <img src="src/images/Blackthorne-HR.jpg"            alt="Blackthorne daylily" />
            <img src="src/images/FEATHERED.jpg"                 alt="Feathered daylily bloom" />
            <img src="src/images/Carolina-Dreaming-Clump-3.jpg" alt="Carolina Dreaming daylily clump" />
          </div>

          <div className="zone-grid">
            {ZONES.map(z => (
              <div key={z.zone} className={`zone-card${z.ideal ? ' zone-card--ideal' : ''}`}>
                <span className="zone-num">Zone {z.zone}</span>
                <span className="zone-f">{z.f}</span>
                <span className="zone-c">{z.c}</span>
                {z.ideal && <span className="zone-badge">Ideal</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="lm-section lm-faq">
        <div className="container">
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
        </div>
      </section>

    </div>
  )
}
