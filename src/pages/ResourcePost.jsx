import {
  Link,
  useParams,
} from "react-router";

import SiteHeader from "../components/SiteHeader.jsx";
import Footer from "../components/Footer.jsx";
import SEO from "../components/SEO.jsx";
import VillageLandscape from "../components/VillageLandscape.jsx";
import LivingDetails from "../components/LivingDetails.jsx";

import {
  getRelatedPosts,
  getResourcePost,
} from "../data/resources.js";

import {
  BUSINESS,
  BOOKING_URL,
  SITE_URL,
} from "../data/siteData.js";

function ResourcePost() {
  const { slug } = useParams();

  const post = getResourcePost(slug);

  if (!post) {
    return (
      <>
        <VillageLandscape />
        <LivingDetails />
        <SiteHeader />

        <main className="resource-not-found">
          <div>
            <h1>Resource not found</h1>

            <Link to="/resources">
              Return to Resources
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  const relatedPosts = getRelatedPosts(post);

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Person",
      name: "Zoë",
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/resources/${post.slug}`,
    },
  };

  return (
    <>
      <SEO
        title={`${post.title} | Zoë’s Village`}
        description={post.excerpt}
        path={`/resources/${post.slug}`}
        image={post.image}
        type="article"
        structuredData={articleStructuredData}
      />

      <VillageLandscape />
      <LivingDetails />
      <SiteHeader />

      <main className="resource-post-page">
        <article>
          <header className="resource-post-hero">
            <div className="container resource-post-heading">
              <Link
                className="resource-back-link"
                to="/resources"
              >
                ← All Resources
              </Link>

              <div className="resource-post-meta">
                <span>{post.category}</span>
                <span>{post.readingTime}</span>
              </div>

              <h1>{post.title}</h1>

              <p>{post.excerpt}</p>
            </div>
          </header>

          <div className="container resource-post-layout">
            <div className="resource-post-content">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>

                  {section.paragraphs?.map(
                    (paragraph) => (
                      <p key={paragraph}>
                        {paragraph}
                      </p>
                    )
                  )}

                  {section.bullets && (
                    <ul>
                      {section.bullets.map(
                        (bullet) => (
                          <li key={bullet}>
                            {bullet}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </section>
              ))}

              <aside className="resource-disclaimer">
                <strong>Please note</strong>

                <p>
                  This article is educational and is
                  not a substitute for medical advice.
                  Contact your pediatrician,
                  obstetric provider, or another
                  licensed medical professional with
                  health or safety concerns.
                </p>
              </aside>
            </div>

<aside className="resource-post-sidebar">
  <div className="resource-sidebar-card">
    <p className="eyebrow">Need Support?</p>

    <h2>
      You do not have to navigate the newborn season alone.
    </h2>

    <p className="resource-sidebar-copy">
      Learn how Zoë’s Village can support your recovery, newborn
      care, rest, and confidence at home.
    </p>

    <div className="resource-sidebar-actions">
      <a
        className="primary-btn resource-sidebar-primary"
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Schedule a Consultation
      </a>

      <Link
        className="secondary-btn resource-sidebar-secondary"
        to="/#packages"
      >
        Explore Care Packages
      </Link>
    </div>
  </div>
</aside>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="section related-resources">
            <div className="container">
              <p className="eyebrow">
                Continue Reading
              </p>

              <h2 className="section-title">
                More helpful resources.
              </h2>

              <div className="related-resources-grid">
                {relatedPosts.map(
                  (relatedPost) => (
                    <article
                      key={relatedPost.slug}
                    >
                      <span>
                        {relatedPost.category}
                      </span>

                      <h3>
                        {relatedPost.title}
                      </h3>

                      <p>
                        {relatedPost.excerpt}
                      </p>

                      <Link
                        to={`/resources/${relatedPost.slug}`}
                      >
                        Read Article →
                      </Link>
                    </article>
                  )
                )}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export default ResourcePost;