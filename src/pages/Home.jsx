import styled from "styled-components";

const Section = styled.section`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
`;

export default function Home() {
  return (
    <Section id="hero">
      <h2>Helping Businesses Achieve ISO Certification</h2>
      <p>Expert consulting for ISO 9001, ISO 13485, and more.</p>
    </Section>
  );
}
