const services = [
  {
    number: "01",
    icon: (
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="service-svg"
      >
        <path d="M24 39s-13-7.3-13-17.1C11 16 15.2 12 20.2 12c2.7 0 4.8 1.2 6 3 1.2-1.8 3.3-3 6-3 5 0 9.2 4 9.2 9.9C41.4 31.7 24 39 24 39Z" />
        <path d="M17 24.2c2.2-2.5 4.8-3.7 7-3.7 2.6 0 5.1 1.3 7.2 3.7" />
      </svg>
    ),
    title: "Postpartum Support",
    text:
      "Thoughtful in-home care that gives you room to rest, recover, eat, shower, and adjust to life with your newborn.",
    details: [
      "Recovery and emotional support",
      "Light baby-related household help",
      "Time for rest and nourishment",
    ],
  },
  {
    number: "02",
    icon: (
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="service-svg"
      >
        <circle cx="24" cy="18" r="8" />
        <path d="M14 38c1.8-7.5 6-11.2 10-11.2S32.2 30.5 34 38" />
        <path d="M19 18.5c1.4 1.2 3.1 1.8 5 1.8s3.6-.6 5-1.8" />
        <path d="M20.5 14.5h.1M27.4 14.5h.1" />
      </svg>
    ),
    title: "Newborn Care",
    text:
      "Gentle, hands-on guidance that helps you feel more confident with your baby’s everyday needs.",
    details: [
      "Feeding and soothing guidance",
      "Diapering, swaddling, and bottle care",
      "Newborn education and reassurance",
    ],
  },
  {
    number: "03",
    icon: (
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="service-svg"
      >
        <path d="M33.5 31.5A15 15 0 0 1 17 11.7 15.2 15.2 0 1 0 33.5 31.5Z" />
        <path d="M31.5 13.5l1.1 2.7 2.8 1.1-2.8 1.1-1.1 2.7-1.1-2.7-2.8-1.1 2.8-1.1 1.1-2.7Z" />
      </svg>
    ),
    title: "Overnight Newborn Care",
    text:
      "Calm overnight support so your baby is cared for while your family receives meaningful, restorative rest.",
    details: [
      "Overnight feeding support",
      "Diapering, soothing, and settling",
      "Bottle preparation and baby-related cleanup",
    ],
  },
];

function ServicesPreview() {
  return (
    <section
      className="section services-preview"
      id="services"
    >
      <div className="container services-layout">
        <div
          className="services-heading"
          data-reveal="fade-up"
        >
          <p className="eyebrow">
            How Zoë Can Help
          </p>

          <h2 className="section-title">
            Care that helps your home feel calmer.
          </h2>

          <p className="section-copy">
            Every postpartum experience is different. Zoë’s Village offers
            personalized support centered around your recovery, your baby,
            and the needs of your household.
          </p>

          <a
            className="services-heading-link"
            href="#packages"
          >
            View Postpartum Packages
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className="service-card-premium"
              key={service.title}
              data-reveal="fade-up"
              style={{
                "--service-delay": `${index * 0.1}s`,
              }}
            >
              <div className="service-card-top">
                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-icon">
                  {service.icon}
                </div>
              </div>

              <h3>{service.title}</h3>

              <p className="service-card-copy">
                {service.text}
              </p>

              <ul className="service-detail-list">
                {service.details.map((detail) => (
                  <li key={detail}>
                    <span aria-hidden="true">✦</span>
                    {detail}
                  </li>
                ))}
              </ul>

              <a
                className="service-card-link"
                href="#packages"
              >
                Explore Care Options
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;