// src/components/Hero.jsx
import styled from "styled-components";

const HeroSection = styled.section`
  position: relative;
  height:45vh; /* adjust to taste */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    height: 50vh;
    padding: 1rem;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  inset: 0; /* top, right, bottom, left = 0 */
  width: 100%;
  height: 100%;
  object-fit: cover; /* fill without distorting */
  z-index: 0;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4); /* dark overlay for text contrast */
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2; /* above overlay */
  max-width: 800px;
  padding: 1rem;

  h1 {
    font-size: clamp(1.75rem, 5vw, 3rem);
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <HeroImage src="/hero-image.jpg" alt="Compliance background" />
      <HeroOverlay />
      <HeroContent>
        <h1>Helping Businesses Achieve ISO Certification</h1>
        <p>Expert consulting for ISO 9001, ISO 13485, and more.</p>
      </HeroContent>
    </HeroSection>
  );
}
