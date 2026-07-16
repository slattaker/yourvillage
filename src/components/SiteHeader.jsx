import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useLocation,
} from "react-router";

import horizontalLogo from "../assets/zoes-village-horizontal-logo.svg";
import iconLogo from "../assets/zoes-village-icon.svg";

import { BOOKING_URL } from "../data/siteData.js";

const navigationLinks = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/#about",
  },
  {
    label: "Services",
    to: "/#services",
  },
  {
    label: "Packages",
    to: "/#packages",
  },
  {
    label: "Journey",
    to: "/#journey",
  },
  {
    label: "Resources",
    to: "/resources",
  },
  {
    label: "Contact",
    to: "/#contact",
  },
];

function SiteHeader() {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 860) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isLinkActive = (link) => {
    if (link.to === "/resources") {
      return location.pathname.startsWith(
        "/resources"
      );
    }

    if (link.to === "/") {
      return (
        location.pathname === "/" &&
        !location.hash
      );
    }

    const linkHash = link.to.split("#")[1];

    return (
      location.pathname === "/" &&
      location.hash === `#${linkHash}`
    );
  };

  return (
    <>
      <header
        className={[
          "site-navbar",
          scrolled
            ? "site-navbar-scrolled"
            : "",
          menuOpen
            ? "site-navbar-menu-open"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Link
          className="site-nav-logo"
          to="/"
          onClick={closeMenu}
          aria-label="Zoë’s Village home"
        >
          <img
            className="site-nav-logo-full"
            src={horizontalLogo}
            alt="Zoë’s Village"
          />

          <img
            className="site-nav-logo-icon"
            src={iconLogo}
            alt=""
            aria-hidden="true"
          />
        </Link>

        <nav
          className="site-nav-links"
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={
                isLinkActive(link)
                  ? "site-nav-link-active"
                  : ""
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-nav-actions">
          <a
            className="site-nav-cta"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Free Consultation
          </a>

          <button
            type="button"
            className={[
              "site-menu-toggle",
              menuOpen
                ? "site-menu-toggle-open"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => {
              setMenuOpen((current) => !current);
            }}
            aria-expanded={menuOpen}
            aria-controls="mobile-site-navigation"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
          >
            <span className="site-menu-line site-menu-line-one" />
            <span className="site-menu-line site-menu-line-two" />
            <span className="site-menu-line site-menu-line-three" />
          </button>
        </div>

        {menuOpen && (
          <div
            className="site-mobile-menu"
            id="mobile-site-navigation"
          >
            <nav aria-label="Mobile navigation">
              {navigationLinks.map(
                (link, index) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={closeMenu}
                    className={
                      isLinkActive(link)
                        ? "site-mobile-link-active"
                        : ""
                    }
                  >
                    <span>{link.label}</span>

                    <span
                      className="site-mobile-menu-number"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>
                  </Link>
                )
              )}
            </nav>

            <div className="site-mobile-menu-footer">
              <div className="site-mobile-availability">
                <span className="site-availability-dot" />

                <p>
                  Currently accepting new families
                </p>
              </div>

              <a
                className="site-mobile-menu-cta"
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <span>
                  Schedule a Free Consultation
                </span>

                <span aria-hidden="true">→</span>
              </a>

              <p className="site-mobile-location">
                Serving the Carolinas and
                surrounding areas
              </p>
            </div>
          </div>
        )}
      </header>

      {menuOpen && (
        <button
          type="button"
          className="site-mobile-backdrop"
          onClick={closeMenu}
          aria-label="Close navigation menu"
        />
      )}
    </>
  );
}

export default SiteHeader;