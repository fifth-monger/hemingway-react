export default function Intro() {
  return (
    <section className="intro-section" id="about">
      <div className="container intro">
        <div className="intro-text">
          <p className="section-label">About the Nursery</p>
          <h2 className="serif">Grown here. Shipped fresh. Guaranteed.</h2>
          <p>
            At Hemingway Nursery, we live where we work — every daylily is grown and
            nurtured until it's ready to ship or meet you in person. We love talking
            about daylilies, and we welcome every question.
          </p>
          <p>
            We ship bare-root within 24 hours of harvest, manicured and treated, so you receive
            large, healthy plants ready for your garden.
          </p>
          <div className="stat-row">
            <div className="stat">
              <strong>100s</strong>
              <span>of cultivars available</span>
            </div>
            <div className="stat">
              <strong>1 Year</strong>
              <span>plant guarantee</span>
            </div>
            <div className="stat">
              <strong>2 fans</strong>
              <span>minimum per order</span>
            </div>
          </div>
          <br />
          <a href="https://hemingwaynursery.square.site/s/shop" target="_blank" rel="noopener noreferrer" className="link-subtle"><span>Explore all daylilies</span><span className="link-arrow">&rarr;</span></a>
        </div>

        <div className="intro-images">
          <img
            src="/images/Blackthorne-HR.jpg"
            alt="Blackthorne daylily at Hemingway Nursery"
            className="intro-img"
          />
          <img
            src="/images/FEATHERED.jpg"
            alt="Feathered daylily in bloom at Hemingway Nursery"
            className="intro-img"
          />
          <img
            src="/images/Carolina-Dreaming-Clump-3.jpg"
            alt="Carolina Dreaming daylily clump at Hemingway Nursery"
            className="intro-img  intro-img-wide"
          />
        </div>
      </div>
    </section>
  )
}
