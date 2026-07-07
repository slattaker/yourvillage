import { useState } from "react";
import heroImage from "../assets/hero-baby-feet.png";

function Hero() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setParallax({
      x: x * 10,
      y: y * 10,
    });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  return (
    <section
      className="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--hero-x": `${parallax.x}px`,
        "--hero-y": `${parallax.y}px`,
        "--light-x": `${parallax.x * 1.8}px`,
        "--light-y": `${parallax.y * 1.8}px`,
      }}
    >
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

        <div className="hero-badge">
          <span>★★★★★</span>
          <h4>
            Trusted Birth &<br />
            Postpartum Care
          </h4>
          <p>Charlotte • Fort Mill • Surrounding Areas</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;