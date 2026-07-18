import promiseImage from "../assets/promise-baby-hands.png";

import { TEXT_URL } from "../data/siteData.js";

function VillagePromise() {
  return (
    <section className="section village-promise">
      <div className="container promise-wrap">
<div className="promise-art">
          <img
            src={promiseImage}
            alt="A newborn gently holding a caregiver’s finger"
            className="promise-image"
          />

          <div
            className="promise-image-glow"
            aria-hidden="true"
          />

          <div className="promise-photo-note">
            <span aria-hidden="true">♡</span>

            <p>
              Gentle support for the earliest days at home.
            </p>
          </div>
        </div>

<div className="promise-content">
          <p className="eyebrow">
            The Village Promise
          </p>

          <h2>
            No family was meant to do this alone.
          </h2>

          <p className="promise-lead">
            The newborn season can feel beautiful, exhausting,
            tender, and overwhelming all at once.
          </p>

          <p>
            Zoë’s Village offers practical help, gentle guidance,
            and a calm presence while your family rests, recovers,
            and finds its new rhythm.
          </p>

          <div className="promise-points">
            <div>
              <span aria-hidden="true">✦</span>
              <p>Care shaped around your family</p>
            </div>

            <div>
              <span aria-hidden="true">✦</span>
              <p>Encouragement without judgment</p>
            </div>

            <div>
              <span aria-hidden="true">✦</span>
              <p>Support for rest, recovery, and confidence</p>
            </div>
          </div>

          <div className="promise-actions">
            <a
              className="primary-btn package-button"
              href={TEXT_URL}
              aria-label="Text Zoë to schedule a consultation"
            >
              <span>Free consultation by text or phone</span>
              <span aria-hidden="true">→</span>
            </a>

            <a
              className="promise-text-link"
              href="#contact"
            >
              Contact Zoë
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="promise-small">
            Serving the Carolinas and surrounding areas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VillagePromise;