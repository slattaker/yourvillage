import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router";

import horizontalLogo from "../assets/zoes-village-horizontal-logo.svg";
import iconLogo from "../assets/zoes-village-icon.svg";

import {
  BOOKING_URL,
  PHONE_NUMBER,
} from "../data/siteData.js";

const navigationLinks = [
  {
    label: "Home",
    to: "/#home",
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
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const currentScroll = window.scrollY;

        setScrolled((currentlyScrolled) => {
          if (!currentlyScrolled && currentScroll > 140) {
            return true;
          }

          if (currentlyScrolled && currentScroll < 60) {
            return false;
          }

          return currentlyScrolled;
        });

        ticking = false;
      });
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
      if (window.innerWidth > 1100) {
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

  const scrollToHomeTop = () => {
    const homeSection =
      document.getElementById("home");

    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleHomeClick = (event) => {
    event.preventDefault();

    closeMenu();

    if (location.pathname === "/") {
      window.history.replaceState(
        null,
        "",
        "/"
      );

      scrollToHomeTop();

      return;
    }

    navigate("/#home");

    window.setTimeout(() => {
      scrollToHomeTop();
    }, 100);
  };

  const isLinkActive = (link) => {
    if (link.to === "/resources") {
      return location.pathname.startsWith(
        "/resources"
      );
    }

    if (link.label === "Home") {
      return (
        location.pathname === "/" &&
        (!location.hash ||
          location.hash === "#home")
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
          to="/#home"
          onClick={handleHomeClick}
          aria-label="Return to the top of the Zoë’s Village homepage"
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
              onClick={
                link.label === "Home"
                  ? handleHomeClick
                  : undefined
              }
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
            aria-label={`Text Zoë at ${PHONE_NUMBER}`}
          >
            Text Zoë
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
              setMenuOpen(
                (current) => !current
              );
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
                    onClick={
                      link.label === "Home"
                        ? handleHomeClick
                        : closeMenu
                    }
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
                  Currently accepting new
                  families
                </p>
              </div>

              <a
                className="site-mobile-menu-cta"
                href={BOOKING_URL}
                onClick={closeMenu}
                aria-label={`Text Zoë at ${PHONE_NUMBER}`}
              >
                <span>Text Zoë</span>

                <span aria-hidden="true">→</span>
              </a>

              <a
                className="site-mobile-phone-number"
                href={BOOKING_URL}
                onClick={closeMenu}
              >
                {PHONE_NUMBER}
              </a>

              <p className="site-mobile-location">
                Serving Fort Mill, Rock Hill,
                Charlotte, and surrounding areas
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