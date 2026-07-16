import { useEffect } from "react";
import { BUSINESS, SITE_URL } from "../data/siteData.js";

function setMetaTag(attribute, key, content) {
  let tag = document.head.querySelector(
    `meta[${attribute}="${key}"]`
  );

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(url) {
  let canonical = document.head.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

function SEO({
  title,
  description,
  path = "/",
  image = "/social/zoes-village-social.jpg",
  type = "website",
  structuredData,
}) {
  useEffect(() => {
    const pageUrl = `${SITE_URL}${path}`;
    const imageUrl = image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`;

    document.title = title;

    setMetaTag("name", "description", description);
    setMetaTag("name", "robots", "index, follow");
    setMetaTag("name", "author", BUSINESS.name);

    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", type);
    setMetaTag("property", "og:url", pageUrl);
    setMetaTag("property", "og:image", imageUrl);
    setMetaTag("property", "og:site_name", BUSINESS.name);
    setMetaTag("property", "og:locale", "en_US");

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", imageUrl);

    setCanonical(pageUrl);

    const existingSchema = document.getElementById(
      "page-structured-data"
    );

    if (existingSchema) {
      existingSchema.remove();
    }

    if (structuredData) {
      const script = document.createElement("script");
      script.id = "page-structured-data";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const currentSchema = document.getElementById(
        "page-structured-data"
      );

      if (currentSchema) {
        currentSchema.remove();
      }
    };
  }, [
    title,
    description,
    path,
    image,
    type,
    structuredData,
  ]);

  return null;
}

export default SEO;