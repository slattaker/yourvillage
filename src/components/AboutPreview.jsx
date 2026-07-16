import zoeHeadshot from "../assets/zoe-headshot.png";

function AboutPreview() {
  return (
    <section
      className="section about-preview"
      id="about"
    >
      <div className="container about-grid">
        <div
          className="about-visual"
          data-reveal="fade-left"
        >
          <div className="about-image-frame">
            <img
              src={zoeHeadshot}
              alt="Zoë, postpartum doula and newborn care provider"
              className="about-image"
            />

            <div
              className="about-image-glow"
              aria-hidden="true"
            />

            <div
              className="about-orbit about-orbit-one"
              aria-hidden="true"
            />

            <div
              className="about-orbit about-orbit-two"
              aria-hidden="true"
            />
          </div>

          <div className="about-note">
            <span
              className="about-note-icon"
              aria-hidden="true"
            >
              ♡
            </span>

            <p>
              Gentle, personal support for your family’s
              postpartum season.
            </p>
          </div>

          <div
            className="about-small-detail"
            aria-hidden="true"
          >
            <span>✦</span>
            <span>❀</span>
          </div>
        </div>

        <div
          className="about-content"
          data-reveal="fade-right"
        >
          <p className="eyebrow">
            Hi, I’m Zoë.
          </p>

          <h2 className="section-title">
            A calm presence when everything feels new.
          </h2>

          <p className="about-lead">
            I believe no parent should have to navigate the
            postpartum season without meaningful support.
          </p>

          <p className="section-copy">
            My heart is to help families feel rested, reassured,
            and cared for as they recover, bond with their baby,
            and settle into life at home.
          </p>

          <p className="section-copy">
            Whether you need newborn guidance, an extra set of
            hands, emotional encouragement, or simply time to
            shower, eat, and rest, I offer thoughtful care shaped
            around your family’s individual needs.
          </p>

          <div className="about-values">
            <div className="about-value">
              <span
                className="about-value-icon"
                aria-hidden="true"
              >
                ♡
              </span>

              <div>
                <strong>Personal care</strong>
                <p>
                  Support centered around your recovery, baby,
                  household, and preferences.
                </p>
              </div>
            </div>

            <div className="about-value">
              <span
                className="about-value-icon"
                aria-hidden="true"
              >
                ✦
              </span>

              <div>
                <strong>Calm guidance</strong>
                <p>
                  Practical newborn support without pressure,
                  judgment, or one-size-fits-all expectations.
                </p>
              </div>
            </div>
          </div>

          <div className="about-signature">
            <p>With care,</p>
            <span>Zoë ♡</span>
            <small>
              Postpartum Doula &amp; Newborn Care Provider
            </small>
          </div>

          <div className="about-actions">
            <a
              className="primary-btn"
              href="#services"
            >
              Explore Care Options
            </a>

            <a
              className="about-text-link"
              href="#contact"
            >
              Contact Zoë
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;