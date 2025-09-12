import styled from "styled-components";
import { Helmet } from "react-helmet-async";

const Wrapper = styled.section`
  padding: 3rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2rem;
  text-align: center;
`;

const FAQItem = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin-top: 0.25rem;
    color: #444;
    line-height: 1.6;
  }
`;

export default function FAQ() {
  const faqs = [
    {
      question: "What is ISO compliance and why is it important?",
      answer:
        "ISO compliance means meeting international quality and safety standards. It builds trust with customers, improves efficiency, and is often required for certain contracts."
    },
    {
      question: "Which ISO standards do you specialize in?",
      answer:
        "We specialize in ISO 9001 (quality management) and ISO 13485 (medical devices), but also support related standards depending on client needs."
    },
    {
      question: "Do I need to be ISO certified to work with large clients?",
      answer:
        "Many large companies and government agencies require ISO certification from their suppliers. Achieving compliance gives you a competitive advantage."
    },
    {
      question: "What’s the difference between ISO certification and compliance?",
      answer:
        "Compliance means your processes align with the ISO standard. Certification means a third-party auditor has officially validated your compliance."
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve a wide range of industries including manufacturing, healthcare, technology, and service-based organizations."
    },
    {
      question: "Do you work with startups and small businesses, or only larger companies?",
      answer:
        "We work with organizations of all sizes. Small and mid-sized businesses often benefit the most from streamlined compliance support."
    },
    {
      question: "Can you help us if we’ve failed an ISO audit before?",
      answer:
        "Yes, we specialize in corrective action planning and helping organizations resolve non-conformities quickly to achieve compliance."
    },
    {
      question: "Do you offer remote consulting services?",
      answer:
        "Yes, we provide both on-site and remote ISO consulting services, making it easier for distributed teams to achieve compliance."
    },
    {
      question: "What’s your typical consulting process?",
      answer:
        "Our process usually includes a gap analysis, tailored roadmap, employee training, documentation support, and pre-audit preparation."
    },
    {
      question: "How much does ISO consulting cost?",
      answer:
        "Pricing depends on company size, complexity, and project scope. We offer flexible pricing, from hourly consulting to fixed-price project packages."
    },
    {
      question: "Do you provide ongoing support after certification?",
      answer:
        "Yes, we offer ongoing compliance maintenance services, including internal audits, refresher training, and documentation updates."
    },
    {
      question: "Can you help maintain compliance year-to-year?",
      answer:
        "Absolutely. We provide long-term support to help you stay compliant as standards and regulations evolve."
    }
  ];

  // Build FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <Wrapper>
      <Helmet>
        <title>FAQ | Ground Floor Compliance</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about ISO compliance, certification timelines, industries served, and our consulting services."
        />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Heading>Frequently Asked Questions</Heading>

      {faqs.map((faq, idx) => (
        <FAQItem key={idx}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </FAQItem>
      ))}
    </Wrapper>
  );
}
