import styled from "styled-components";
import { Link } from "react-router-dom";
import services from "../data/services";
import { FiSettings, FiBarChart2, FiClipboard } from "react-icons/fi"; // icons

const HeroSection = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
  padding: 4rem 2rem;
`;

const HeroHeading = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
`;

const HeroSubheading = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #061a44;
    transform: translateY(-2px);
  }
`;

const ServicesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled(Link)`
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  cursor: pointer;  /* 👈 makes it feel clickable */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  /* Desktop hover */
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-6px);
      box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
    }
  }

  /* Mobile active (tap feedback) */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      transform: scale(0.98);
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    }
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin-top: 0.5rem;
    color: #555;
    font-size: 1rem;
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
  transition: background 0.3s ease, transform 0.3s ease;

    /* Desktop hover */
  @media (hover: hover) and (pointer: fine) {
    ${ServiceCard}:hover & {
      background: ${({ theme }) => theme.colors.secondary};
      transform: scale(1.1);
    }
  }

  /* Mobile tap feedback */
  @media (hover: none) and (pointer: coarse) {
    ${ServiceCard}:active & {
      transform: scale(0.95);
      background: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const icons = {
  settings: <FiSettings />,
  bar: <FiBarChart2 />,
  clipboard: <FiClipboard />,
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <HeroSection>
        <HeroHeading>Our Services</HeroHeading>
        <HeroSubheading>
          Helping you streamline ISO compliance and succeed with confidence
        </HeroSubheading>
        <CTAButton href="/contact">Get Started</CTAButton>
      </HeroSection>

      {/* Service Cards */}
      <ServicesGrid>
        {services.map((service) => (
          <ServiceCard key={service.id} to={`/services/${service.id}`}>
            <IconWrapper>{icons[service.icon]}</IconWrapper>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </>
  );
}
