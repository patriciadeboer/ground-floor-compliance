import styled from "styled-components";

const Section = styled.section`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
`;

export default function Services() {
  return (
    <Section>
      <h2>Services</h2>
      <ul>
        <li>ISO 9001 Certification Support</li>
        <li>ISO 13485 (Medical Devices)</li>
        <li>Internal Auditing & Gap Analysis</li>
        <li>Custom Training</li>
      </ul>
    </Section>
  );
}
