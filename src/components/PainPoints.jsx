import { Link } from "react-router";

const supportNeeds = [
  {
    number: "01",
    title: "More space for recovery",
    text:
      "Healing and adjusting take time. Thoughtful postpartum support can create room for meals, showers, rest, appointments, and uninterrupted moments with your family.",
    linkText: "How postpartum support helps",
    linkTo:
      "/resources/how-postpartum-support-helps-new-parents",
  },
  {
    number: "02",
    title: "A little more rest",
    text:
      "Newborn nights can be demanding. Overnight support offers another trusted set of hands while your baby receives attentive care.",
    linkText: "Learn about overnight care",
    linkTo:
      "/resources/overnight-newborn-care-what-to-expect",
  },
  {
    number: "03",
    title: "Confidence with newborn care",
    text:
      "Questions about feeding, soothing, diapering, bottles, or everyday newborn care are completely normal. Calm guidance can help you find what works for your family.",
    linkText: "What is an NCS?",
    linkTo:
      "/resources/what-is-a-newborn-care-specialist",
  },
  {
    number: "04",
    title: "Support shaped around your home",
    text:
      "Care should never feel one-size-fits-all. Visits can reflect your recovery, feeding choices, household needs, existing support, and personal preferences.",
    linkText: "Compare support options",
    linkTo:
      "/resources/postpartum-doula-vs-baby-nurse",
  },
];

function PainPoints() {
  return (
    <section className="section support-needs">
      <div className="container support-needs-shell">
        <div className="support-needs-header">
          <p className="eyebrow">
            Support for Real Life
          </p>

          <h2 className="section-title">
            A little help can make room for what matters.
          </h2>

          <p className="section-copy">
            Postpartum and newborn support is not about replacing
            parents. It is about helping your family feel cared for,
            informed, and supported while you find your new rhythm.
          </p>
        </div>

        <div className="support-needs-grid">
          {supportNeeds.map((item) => (
            <article
              className="support-need-card"
              key={item.number}
            >
              <span className="support-need-number">
                {item.number}
              </span>

              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <Link to={item.linkTo}>
                {item.linkText}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PainPoints;