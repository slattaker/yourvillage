import { useEffect, useState } from "react";
import logoImage from "../assets/zoes-village-logo.png";
import "./VillageIntro.css";

function VillageIntro() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  if (!showIntro) return null;

  return (
    <section className="village-intro">
      <div className="morning-background"></div>
      <div className="sun-animation">
        <div className="sun-rays"></div>
        <div className="rising-sun"></div>       
        <svg
        className="horizon-line"
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
        >
        <path
            d="
            M0,60
            C120,15 280,15 420,60
            C560,105 720,105 860,60
            C920,40 960,40 1000,60
            "
        />
        </svg>
      </div>

      <div className="logo-wrapper">
        <img src={logoImage} alt="Zoë's Village logo" />
      </div>

      <div className="intro-soft-fade"></div>
    </section>
  );
}

export default VillageIntro;