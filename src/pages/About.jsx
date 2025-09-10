import styled from "styled-components";

const Section = styled.section`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
`;

export default function About() {
  return (
    <Section>
      <h2>About</h2>
      <p>
        We help businesses streamline compliance and succeed in certification.
        Our goal is to make ISO compliance practical and affordable.
      </p>
    </Section>
  );
}
