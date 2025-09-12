import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import HeroSideBySide from "../components/HeroSideBySide";
import QuickLinksSection from "../components/QuickLinksSection";


export default function Home() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>ISO Compliance Consulting | Ground Floor Compliance</title>
        <meta
          name="description"
          content="Expert ISO consulting services for ISO 9001, ISO 13485, and more. Helping businesses achieve certification with clarity, collaboration, and results."
        />
      </Helmet>

      <Helmet>
        <title>ISO Compliance Consulting | Ground Floor Compliance</title>
        <meta
          name="description"
          content="Expert ISO consulting services for ISO 9001, ISO 13485, and more. Helping businesses achieve certification with clarity, collaboration, and results."
        />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ground Floor Compliance",
            "url": "https://groundfloorcompliance.com",
            "logo": "https://groundfloorcompliance.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "info@groundfloorcompliance.com",
              "contactType": "Customer Service",
              "areaServed": "US"
            }
          }
        `}</script>
      </Helmet>

      {/* Visible Content */}
      <Hero />
      <HeroSideBySide />
      <QuickLinksSection />
    </>
  );
}
