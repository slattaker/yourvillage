const steps = [
  {
    number: "01",
    title: "First hello",
    text:
      "We begin with a relaxed consultation to learn about your family, your needs, and the kind of support that would feel most helpful.",
  },
  {
    number: "02",
    title: "Your care plan",
    text:
      "Together, we create a flexible postpartum plan centered around recovery, rest, newborn care, and the rhythm of your household.",
  },
  {
    number: "03",
    title: "Steady support",
    text:
      "Zoë provides calm, practical care while helping you rest, recover, and grow more confident caring for your newborn.",
  },
  {
    number: "04",
    title: "Growing confidence",
    text:
      "As your family settles in, support adapts to your changing needs so you feel prepared, encouraged, and never alone.",
  },
];

function JourneyTimeline() {
  return (
    <section
      className="section journey"
      id="journey"
    >
      <div className="container journey-shell">
        <div
          className="journey-header"
          data-reveal="fade-up"
        >
          <p className="eyebrow">
            Your Journey
          </p>

          <h2 className="section-title">
            Support for the season after baby arrives.
          </h2>

          <p className="section-copy">
            From the first conversation through those tender weeks at home,
            Zoë’s Village offers support that feels steady, thoughtful, and
            personal.
          </p>
        </div>

        <div className="journey-timeline">
          <div
            className="journey-line"
            aria-hidden="true"
          >
            <span className="journey-line-progress" />
          </div>

          {steps.map((step, index) => (
            <article
              className={`journey-step ${
                index % 2 === 0
                  ? "journey-step-left"
                  : "journey-step-right"
              }`}
              key={step.number}
              data-reveal={
                index % 2 === 0
                  ? "fade-left"
                  : "fade-right"
              }
            >
              <span
                className="journey-node"
                aria-hidden="true"
              >
                <span />
              </span>

              <div className="journey-card">
                <div className="journey-card-top">
                  <span className="journey-number">
                    {step.number}
                  </span>

                  <span
                    className="journey-accent"
                    aria-hidden="true"
                  >
                    ✦
                  </span>
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div
          className="journey-closing"
          data-reveal="fade-up"
        >
          <span aria-hidden="true">♡</span>

          <p>
            Care changes as your family’s needs change.
          </p>

          <a href="#packages">
            Explore Postpartum Packages
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default JourneyTimeline;