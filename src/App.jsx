import { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
} from "react-router";

import Home from "./pages/Home.jsx";
import Resources from "./pages/Resources.jsx";
import ResourcePost from "./pages/ResourcePost.jsx";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    /*
     * When navigating to a new page or article,
     * always begin at the top.
     */
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [location.pathname, location.search]);

  useEffect(() => {
    /*
     * Homepage links such as /#packages should
     * still scroll to their correct section.
     */
    if (!location.hash) return;

    const sectionId = location.hash.replace("#", "");

    const timer = window.setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => {
      window.clearTimeout(timer);
    };
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/resources"
          element={<Resources />}
        />

        <Route
          path="/resources/:slug"
          element={<ResourcePost />}
        />

        <Route
          path="*"
          element={<Home />}
        />
      </Routes>
    </>
  );
}

export default App;