import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiSettings, FiInfo, FiHelpCircle, FiMail } from "react-icons/fi";

const Section = styled.section`
  background: #f8f9fa;
  padding: 4rem 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const Card = styled(Link)`
  background: white;
  padding: 2rem 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 0.95rem;
    color: #555;
    margin-top: 0.5rem;
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export default function QuickLinksSection() {
  return (
    <Section>
      <Container>
        <Card to="/services">
          <IconWrapper><FiSettings /></IconWrapper>
          <h3>Our Services</h3>
          <p>Discover how we help businesses achieve ISO compliance and growth.</p>
        </Card>

        <Card to="/about">
          <IconWrapper><FiInfo /></IconWrapper>
          <h3>About Us</h3>
          <p>Learn more about our mission, values, and consulting approach.</p>
        </Card>

        <Card to="/faq">
          <IconWrapper><FiHelpCircle /></IconWrapper>
          <h3>FAQs</h3>
          <p>Get answers to common questions about ISO compliance.</p>
        </Card>

        <Card to="/contact">
          <IconWrapper><FiMail /></IconWrapper>
          <h3>Contact Us</h3>
          <p>Ready to get started? Reach out to our team today.</p>
        </Card>
      </Container>
    </Section>
  );
}
