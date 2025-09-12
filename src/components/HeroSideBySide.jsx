import styled from "styled-components";

const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  flex: 1;

  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 1rem;
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    font-size: 1.125rem;
    color: #555;
    margin-bottom: 2rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }
`;

export default function HeroSideBySide() {
  return (
    <HeroWrapper>
      <TextContent>
        <h1>Build processes that perform and meet ISO standards.</h1>
        <p>
          We help companies streamline ISO compliance and unlock growth with
          scalable consulting solutions.
        </p>
        <Button href="/contact">Get Started</Button>
      </TextContent>

      <ImageWrapper>
        <img src="/process-mapping.webp" alt="Consulting background" />
      </ImageWrapper>
    </HeroWrapper>
  );
}
