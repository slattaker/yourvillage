import { Link } from "react-router";
import { resourcePosts } from "../data/resources.js";

function ResourcesPreview() {
  const featuredPosts = resourcePosts.slice(0, 3);

  return (
    <section className="section resources-preview">
      <div className="container resources-preview-shell">
        <div className="resources-preview-header">
          <div>
            <p className="eyebrow">
              Parent Resources
            </p>

            <h2 className="section-title">
              Gentle guidance for the newborn season.
            </h2>

            <p className="section-copy">
              Explore practical, judgment-free articles about
              postpartum recovery, newborn care, overnight
              support, and choosing the right care for your
              family.
            </p>
          </div>

          <Link
            className="resources-view-all"
            to="/resources"
          >
            View All Resources
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="resources-preview-grid">
          {featuredPosts.map((post) => (
            <article
              className="resource-preview-card"
              key={post.slug}
            >
              <div className="resource-preview-meta">
                <span>{post.category}</span>
                <span>{post.readingTime}</span>
              </div>

              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>

              <Link to={`/resources/${post.slug}`}>
                Read Article
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResourcesPreview;