import Hero from "../components/Hero.jsx";
import AboutPreview from "../components/AboutPreview.jsx";
import ServicesPreview from "../components/ServicesPreview.jsx";
import WhyChoose from "../components/WhyChoose.jsx";
import JourneyTimeline from "../components/JourneyTimeline.jsx";
import PackageCards from "../components/PackageCards.jsx";
import PainPoints from "../components/PainPoints.jsx";
import ResourcesPreview from "../components/ResourcesPreview.jsx";
import VillagePromise from "../components/VillagePromise.jsx";
import Footer from "../components/Footer.jsx";
import SiteHeader from "../components/SiteHeader.jsx";

import VillageIntro from "../components/VillageIntro.jsx";
import VillageLandscape from "../components/VillageLandscape.jsx";
import LivingDetails from "../components/LivingDetails.jsx";

import SEO from "../components/SEO.jsx";
import useReveal from "../hooks/useReveal.js";

import {
  BUSINESS,
  SITE_URL,
} from "../data/siteData.js";

function Home() {
  useReveal();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: SITE_URL,
    telephone: BUSINESS.phoneHref,
    email: BUSINESS.email,
    description: BUSINESS.description,
    image: `${SITE_URL}/social/zoes-village-social.jpg`,
    logo: `${SITE_URL}/logo.png`,
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "North Carolina",
      },
      {
        "@type": "AdministrativeArea",
        name: "South Carolina",
      },
    ],
    priceRange: "$$",
    sameAs: [
      // Add the real Google Business, Instagram,
      // and Facebook URLs here when available.
    ],
  };

  return (
    <>
      <SEO
        title="Postpartum Doula & Newborn Care | Zoë’s Village"
        description="Compassionate postpartum doula and newborn care support throughout the Carolinas. Daytime care, overnight newborn support, parent education, twins support, and personalized care plans."
        path="/"
        structuredData={localBusinessSchema}
      />

      <VillageIntro />
      <VillageLandscape />
      <LivingDetails />
      <SiteHeader />

      <main>
        <Hero />
        <AboutPreview />
        <ServicesPreview />
        <PainPoints />
        <WhyChoose />
        <JourneyTimeline />
        <PackageCards />
        <ResourcesPreview />
        <VillagePromise />
      </main>

      <Footer />
    </>
  );
}

export default Home;