const reasons = [
  {
    title: "Gentle guidance",
    text:
      "Whether you're welcoming your first baby or growing your family, you'll have calm, experienced support that adapts to your unique needs.",
  },
  {
    title: "Care that fits your home",
    text:
      "Every visit is personalized around your recovery, your newborn, and the rhythm of your household—not a one-size-fits-all checklist.",
  },
  {
    title: "Confidence through compassion",
    text:
      "Questions are always welcome. Zoë provides practical newborn education and reassurance so you can feel more confident every day.",
  },
];

function WhyChoose() {
  return (
    <section className="section why-choose">
      <div className="container">

        <div
          className="why-header"
          data-reveal="fade-up"
        >
          <p className="eyebrow">
            Why Families Choose Zoë
          </p>

          <h2 className="section-title">
            Support that feels personal from the moment you arrive home.
          </h2>

          <p className="section-copy">
            Every family deserves care that is gentle, encouraging, and built
            around their unique postpartum journey.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <article
              className="why-card"
              key={reason.title}
            >
              <div className="why-number">
                ✦
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.text}</p>
            </article>
          ))}
        </div>

        <div
          className="why-quote"
          data-reveal="fade-up"
        >
          <p>
            "My goal isn't simply to care for your baby.
            It's to care for your entire family while you recover,
            rest, and grow in confidence."
          </p>

          <span>
            — Zoë
          </span>
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;