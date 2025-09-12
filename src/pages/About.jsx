import styled from "styled-components";
import { FiShield, FiEye, FiUsers, FiTrendingUp } from "react-icons/fi"; // icons
import { Helmet } from "react-helmet-async";

const HeroSection = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
  padding: 5rem 2rem;
`;

const HeroHeading = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
`;

const HeroSubheading = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const SectionText = styled.p`
  font-size: 1.125rem;
  color: #555;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ValueCard = styled.div`
  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  text-align: center;

  h3 {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin-top: 0.5rem;
    color: #555;
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.75rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 2rem;
  border-radius: 0.75rem;

  h3 {
    font-size: 2rem;
    margin: 0;
  }

  p {
    margin-top: 0.5rem;
    opacity: 0.9;
  }
`;

const CTASection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: #f4f6f9;
`;

const CTAHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #061a44;
  }
`;

export default function About() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>About Us | Ground Floor Compliance</title>
        <meta
          name="description"
          content="Learn about Ground Floor Compliance, our story, values, and approach to helping businesses achieve ISO certification."
        />
      </Helmet>


      {/* Hero */}
      <HeroSection>
        <HeroHeading>About Ground Floor Compliance</HeroHeading>
        <HeroSubheading>
          Helping businesses achieve ISO certification with clarity, collaboration, and measurable results.
        </HeroSubheading>
      </HeroSection>

      {/* Story */}
      <Section>
        <SectionHeading>Our Story</SectionHeading>
        <SectionText>
          We started Ground Floor Compliance to simplify ISO compliance for
          businesses of all sizes. With years of industry experience, we know
          that success comes from practical solutions — not endless checklists.
        </SectionText>
      </Section>

      {/* Approach */}
      <Section>
        <SectionHeading>Our Approach</SectionHeading>
        <SectionText>
          We believe in tailored strategies that align with your unique business
          goals. Whether it’s ISO 9001 or ISO 13485, we focus on making compliance
          a tool for growth, not a burden.
        </SectionText>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeading>Our Core Values</SectionHeading>
        <ValuesGrid>
          <ValueCard>
            <IconWrapper>
              <FiShield />
            </IconWrapper>
            <h3>Integrity</h3>
            <p>We deliver honest, unbiased guidance you can trust.</p>
          </ValueCard>
          <ValueCard>
            <IconWrapper>
              <FiEye />
            </IconWrapper>
            <h3>Clarity</h3>
            <p>We simplify complex ISO standards into actionable steps.</p>
          </ValueCard>
          <ValueCard>
            <IconWrapper>
              <FiUsers />
            </IconWrapper>
            <h3>Collaboration</h3>
            <p>We work alongside your team, not above it.</p>
          </ValueCard>
          <ValueCard>
            <IconWrapper>
              <FiTrendingUp />
            </IconWrapper>
            <h3>Results</h3>
            <p>We focus on measurable success for your business.</p>
          </ValueCard>
        </ValuesGrid>
      </Section>

      {/* Stats */}
      <Section>
        <SectionHeading>Our Experience</SectionHeading>
        <StatsGrid>
          <StatCard>
            <h3>15+</h3>
            <p>Years of industry experience</p>
          </StatCard>
          <StatCard>
            <h3>30+</h3>
            <p>Successful audits supported</p>
          </StatCard>
          <StatCard>
            <h3>$10M+</h3>
            <p>Client savings enabled</p>
          </StatCard>
        </StatsGrid>
      </Section>

      {/* CTA */}
      <CTASection>
        <CTAHeading>Ready to Simplify ISO Compliance?</CTAHeading>
        <CTAButton href="/contact">Get in Touch</CTAButton>
      </CTASection>
    </>
  );
}
