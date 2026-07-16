import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.jsx";

/* Core design */
import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/animations.css";

/* Original premium background and intro */
import "./styles/village-intro.css";
import "./styles/village-landscape.css";
import "./styles/living-details.css";

/* Existing sections */
import "./styles/navbar.css";
import "./styles/Hero.css";
import "./styles/about-preview.css";
import "./styles/services-preview.css";
import "./styles/why-choose.css";
import "./styles/journey-timeline.css";
import "./styles/packages.css";
import "./styles/VillagePromise.css";
import "./styles/footer.css";
import "./styles/testimonial-area.css";

/* New SEO and Resources sections */
import "./styles/support-needs.css";
import "./styles/resources.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);