import { TEXT_URL } from "../data/siteData.js";

const postpartumPackages = [
  {
    name: "Golden Hour",
    hours: "20 Hours of Care",
    badge: "A Gentle Beginning",
    bestFor:
      "Families with some nearby support who want professional guidance and several restorative visits during the earliest days at home.",
    summary:
      "A reassuring introduction to postpartum support while your family begins settling into life with your newborn.",
    features: [
      "Typically five 4-hour daytime visits",
      "Personalized postpartum care planning",
      "Newborn care and feeding guidance",
      "Time for parents to rest, eat, or shower",
      "Light baby-related household support",
      "Recovery and emotional check-ins",
    ],
  },
  {
    name: "Village",
    hours: "40 Hours of Care",
    badge: "Most Popular",
    featured: true,
    bestFor:
      "Families wanting dependable weekly care while recovering, building confidence, and creating a sustainable newborn rhythm.",
    summary:
      "Consistent care and greater continuity as your family recovers, adjusts, and grows more confident at home.",
    features: [
      "Typically ten 4-hour daytime visits",
      "Everything included in Golden Hour",
      "Consistent visits with greater continuity",
      "Ongoing feeding and soothing guidance",
      "Support organizing bottles and baby spaces",
      "Care that adapts as your needs change",
    ],
  },
  {
    name: "Fourth Trimester",
    hours: "80 Hours of Care",
    badge: "Extended Care",
    bestFor:
      "Families seeking dependable support across several weeks, especially those with limited nearby help or a greater need for rest.",
    summary:
      "Comprehensive postpartum and newborn support designed to continue throughout the early fourth trimester.",
    features: [
      "Typically twenty 4-hour daytime visits",
      "Everything included in Village",
      "Regular care across multiple weeks",
      "More opportunities for meaningful rest",
      "Ongoing newborn education and guidance",
      "Support adapting routines as baby grows",
    ],
  },
];

function PackageCards() {
  return (
    <section
      className="section packages"
      id="packages"
    >
      <div className="container packages-shell">
        <div className="packages-header">
  <p className="eyebrow">
    Postpartum Support
  </p>

  <h2 className="section-title">
    Choose the level of care that fits your family.
  </h2>

  <p className="section-copy">
    Whether you need a few reassuring visits or ongoing care throughout
    the newborn season, every package provides calm, personalized support
    centered around your recovery, your baby, and your household.
  </p>
</div>

        <div className="postpartum-package-grid">
          {postpartumPackages.map((carePackage, index) => (
            <article
              className={[
                "postpartum-package-card",
                carePackage.featured
                  ? "postpartum-package-card-featured"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              key={carePackage.name}
              data-reveal="fade-up"
              style={{
                "--package-delay": `${index * 0.1}s`,
              }}
            >
              <div className="package-card-glow" aria-hidden="true" />

              <div className="package-card-top">
                <p className="package-hours">
                  {carePackage.hours}
                </p>

                <span className="package-badge">
                  {carePackage.badge}
                </span>
              </div>

              <h3>{carePackage.name}</h3>

              <p className="package-price">
                {carePackage.price}
              </p>

              <p className="package-summary">
                {carePackage.summary}
              </p>

              <div className="package-best-for">
                <span>Best for</span>
                <p>{carePackage.bestFor}</p>
              </div>

              <ul className="package-feature-list">
                {carePackage.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>

              <a
                className="primary-btn package-button"
                href={TEXT_URL}
                aria-label="Text Zoë to schedule a consultation"
              >
                <span>Free consultation by text or phone</span>
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <p className="package-pricing-note">
          Package hours are designed for daytime postpartum care in four-hour
          visits. Overnight newborn care, twins or multiples, travel, and
          specialized support are scheduled and priced separately.
        </p>

        <div className="package-footer-note">
          <div data-reveal="fade-left">
            <div className="package-footer-icon" aria-hidden="true">
              ♡
            </div>

            <div>
              <p className="eyebrow">
                Every Family Receives
              </p>

              <ul>
                <li>Free consultation by text or phone</li>
                <li>Personalized care planning</li>
                <li>Evidence-based newborn guidance</li>
                <li>Judgment-free emotional support</li>
                <li>Helpful resources and referrals</li>
              </ul>
            </div>
          </div>

          <div data-reveal="fade-right">
            <div className="package-footer-icon" aria-hidden="true">
              ✦
            </div>

            <div>
              <p className="eyebrow">
                Specialty Areas
              </p>

              <ul>
                <li>First-time parents</li>
                <li>Twins and multiples</li>
                <li>Premature newborns and NICU graduates</li>
                <li>Overnight newborn care</li>
                <li>Feeding and soothing support</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="package-custom-note"
          data-reveal="fade-up"
        >
          <span aria-hidden="true">✦</span>

          <div>
            <h3>Need something more personalized?</h3>

            <p>
              Custom care plans are available when your family needs a
              different schedule, overnight support, or a combination of
              services.
            </p>
          </div>

          <a href="#contact">
            Contact Zoë
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default PackageCards;