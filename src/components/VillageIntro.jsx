import { useEffect, useState } from "react";
import logo from "../assets/zoes-village-logo.png";

const INTRO_KEY = "zv-intro-last-shown";
const THIRTY_DAYS = 1000 * 60 * 60 * 24 * 30;

function VillageIntro() {
const [showIntro, setShowIntro] = useState(true);

    /*const [showIntro, setShowIntro] = useState(() => {
    const lastShown = localStorage.getItem(INTRO_KEY);

    if (!lastShown) return true;

    const daysSince =
        Date.now() - Number(lastShown);

    return daysSince > THIRTY_DAYS;
    });*/

useEffect(() => {
  if (!showIntro) return;

  const finishIntro = () => {
    localStorage.setItem(
      INTRO_KEY,
      Date.now().toString()
    );

    setShowIntro(false);
  };

  const timer = setTimeout(finishIntro, 3800);

  window.addEventListener("click", finishIntro);
  window.addEventListener("keydown", finishIntro);
  window.addEventListener("touchstart", finishIntro);
  window.addEventListener("wheel", finishIntro);

  return () => {
    clearTimeout(timer);

    window.removeEventListener("click", finishIntro);
    window.removeEventListener("keydown", finishIntro);
    window.removeEventListener("touchstart", finishIntro);
    window.removeEventListener("wheel", finishIntro);
  };
}, [showIntro]);

if (!showIntro) return null;

  return (
    <section className="village-intro" aria-label="Zoë's Village introduction">
      <div className="intro-sky"></div>

        <div className="intro-sun-wrapper">
          <svg
            className="intro-sun-svg"
            viewBox="0 0 500 280"
            aria-hidden="true"
          >
            <g className="intro-logo-rays">
              <path d="M250 130 L250 10" />
              <path d="M250 130 L180 25" />
              <path d="M250 130 L110 55" />
              <path d="M250 130 L50 125" />
              <path d="M250 130 L390 55" />
              <path d="M250 130 L320 25" />
              <path d="M250 130 L450 125" />
            </g>

            <path
              className="intro-logo-sun"
              d="M165 155 C175 95, 220 65, 250 65 C295 65, 335 98, 345 155 Z"
            />
          </svg>
        </div>

      <div className="intro-hill intro-hill-one"></div>
      <div className="intro-hill intro-hill-two"></div>

      <div className="intro-path"></div>

      <div className="intro-flowers">
        <span>✿</span>
        <span>❀</span>
        <span>✦</span>
        <span>✿</span>
        <span>❀</span>
      </div>

      <img className="intro-logo" src={logo} alt="Zoë's Village logo" />

      <div className="intro-fade"></div>
    </section>
  );
}

export default VillageIntro;