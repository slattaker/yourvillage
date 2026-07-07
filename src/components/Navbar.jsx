import { useEffect, useState } from "react";
import horizontalLogo from "../assets/zoes-village-horizontal-logo.svg";
import iconLogo from "../assets/zoes-village-icon.svg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a className="nav-logo" href="#">
        <img
          src={horizontalLogo}
          alt="Zoë's Village"
          className="nav-logo-full"
        />

        <img
          src={iconLogo}
          alt="Zoë's Village"
          className="nav-logo-icon"
        />
      </a>

      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#journey">Your Journey</a>
        <a href="#journal">Journal</a>
      </nav>

      <a className="nav-cta" href="#contact">
        Free Consultation
      </a>
    </header>
  );
}

export default Navbar;