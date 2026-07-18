import {
  TEXT_URL,
  PHONE_NUMBER,
} from "../data/siteData.js";

function Footer() {
  return (
    <footer
      className="site-footer"
      id="contact"
    >
      <div className="container footer-shell">
<div className="footer-intro">
          <p className="eyebrow">
            Let’s Connect
          </p>

          <h2>
            Questions? I’d love to hear from you.
          </h2>

          <p>
            Reach out about postpartum support, newborn care,
            availability, or scheduling a free consultation by text or phone.
          </p>

        </div>

<div className="footer-contact-grid">
          <a
            className="footer-contact-card"
            href="tel:+18036103007"
          >
            <span>Call or text</span>
            <strong>(803) 670-2596</strong>
            <small>Tap to call</small>
          </a>

          <a
            className="footer-contact-card"
            href="mailto:hello@zoesvillage.com"
          >
            <span>Email</span>
            <strong>hello@zoesvillage.com</strong>
            <small>Send Zoë a message</small>
          </a>

          <div className="footer-contact-card">
            <span>Serving</span>
            <strong>
              The Carolinas and surrounding areas
            </strong>
            <small>Travel availability varies</small>
          </div>
        </div>
      </div>

      <div className="container footer-closing">
        <div className="footer-promise">
          <span aria-hidden="true">♡</span>

          <div>
            <p>Every family deserves a village.</p>
            <small>
              Gentle postpartum and newborn care for your growing family.
            </small>
          </div>
        </div>

        <div className="footer-bottom">
          <nav aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#packages">Packages</a>
            <a href="#journey">Journey</a>
          </nav>

          <p>
            © {new Date().getFullYear()} Zoë’s Village LLC
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;