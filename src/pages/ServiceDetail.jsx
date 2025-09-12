import { useParams, Navigate, Link } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import services from "../data/services";

const HeroSection = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
  padding: 3rem 2rem;
`;

const HeroHeading = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  margin: 0;
`;

const Wrapper = styled.section`
  padding: 3rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionText = styled.p`
  font-size: 1.125rem;
  color: #444;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

const FAQSection = styled.section`
  margin-top: 3rem;
`;

const FAQItem = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin-top: 0.25rem;
    color: #444;
  }
`;

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Build FAQ schema dynamically if service has FAQs
  const faqSchema = service.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>{service.title} | Ground Floor Compliance</title>
        <meta name="description" content={service.description} />

        {/* Service Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "${service.title}",
            "description": "${service.description.replace(/"/g, '\\"')}",
            "url": "https://groundfloorcompliance.com/services/${service.id}",
            "provider": {
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
          }
        `}</script>

        {/* FAQ Schema */}
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      {/* Hero */}
      <HeroSection>
        <HeroHeading>{service.title}</HeroHeading>
      </HeroSection>

      {/* Main content */}
      <Wrapper>
        <SectionText>{service.description}</SectionText>
        <SectionText>{service.details}</SectionText>

        {/* Visible FAQ section */}
        {service.faqs && (
          <FAQSection>
            <h2>Frequently Asked Questions</h2>
            {service.faqs.map((faq, idx) => (
              <FAQItem key={idx}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </FAQItem>
            ))}
          </FAQSection>
        )}

        {/* Back button */}
        <BackLink to="/services">← Back to Services</BackLink>
      </Wrapper>
    </>
  );
}
