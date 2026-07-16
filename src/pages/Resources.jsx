import { Link } from "react-router";

import SiteHeader from "../components/SiteHeader.jsx";
import Footer from "../components/Footer.jsx";
import SEO from "../components/SEO.jsx";
import VillageLandscape from "../components/VillageLandscape.jsx";
import LivingDetails from "../components/LivingDetails.jsx";

import { resourcePosts } from "../data/resources.js";
import {
  BUSINESS,
  SITE_URL,
} from "../data/siteData.js";

function Resources() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name:
      "Postpartum and Newborn Care Resources",
    description:
      "Helpful postpartum, newborn care, baby nurse, newborn care specialist, overnight care, and parenting resources from Zoë’s Village.",
    url: `${SITE_URL}/resources`,
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: SITE_URL,
    },
  };

  return (
    <>
      <SEO
        title="Postpartum & Newborn Care Resources | Zoë’s Village"
        description="Explore helpful resources about postpartum doula care, newborn care specialists, baby nurses, overnight newborn support, recovery, and life with a new baby."
        path="/resources"
        structuredData={structuredData}
      />

      <VillageLandscape />
      <LivingDetails />
      <SiteHeader />

      <main className="resources-page">
        <section className="section resources-hero">
          <div className="container resources-hero-shell">
            <p className="eyebrow">
              The Village Journal
            </p>

            <h1>
              Practical guidance for life with a
              newborn.
            </h1>

            <p>
              Helpful, judgment-free resources for
              postpartum recovery, newborn care,
              overnight support, and choosing care
              that feels right for your family.
            </p>
          </div>
        </section>

        <section className="section resources-library">
          <div className="container resources-library-grid">
            {resourcePosts.map((post) => (
              <article
                className="resource-library-card"
                key={post.slug}
              >
                <div className="resource-library-meta">
                  <span>{post.category}</span>
                  <span>{post.readingTime}</span>
                </div>

                <h2>{post.title}</h2>

                <p>{post.excerpt}</p>

                <Link
                  to={`/resources/${post.slug}`}
                >
                  Read the Full Article
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Resources;