import heroImage from "../assets/hero-baby-feet.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-flower flower-one">✦</div>
      <div className="hero-flower flower-two">❀</div>
      <div className="hero-flower flower-three">✧</div>

      <div className="hero-content reveal">
        <p className="eyebrow">Charlotte Birth & Postpartum Doula</p>

        <h1>Every family deserves a village.</h1>

        <p>
          Thoughtful birth and postpartum care that helps you feel calm,
          informed, and supported — from pregnancy through your first days at
          home.
        </p>

        <div className="hero-actions">
          <a className="primary-btn" href="#contact">
            Schedule a Free Consultation
          </a>

          <a className="secondary-btn" href="#services">
            Explore Services
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper reveal">
        <img
          src={heroImage}
          alt="Newborn baby's feet wrapped in a soft blanket"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;