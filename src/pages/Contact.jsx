import styled from "styled-components";
import { Helmet } from "react-helmet-async";

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
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
`;

const ContactWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.75rem;
    color: #444;
    font-size: 1.1rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  label {
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #333;
  }

  input,
  textarea {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    font: inherit;
    transition: border 0.2s ease;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      outline: none;
    }
  }

  textarea {
    resize: vertical;
    min-height: 150px;
  }
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function Contact() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Contact Us | Ground Floor Compliance</title>
        <meta
          name="description"
          content="Get in touch with Ground Floor Compliance for ISO compliance consulting. Reach us by email, phone, or message."
        />
      </Helmet>


      {/* Hero */}
      <HeroSection>
        <HeroHeading>Contact Us</HeroHeading>
        <HeroSubheading>
          Let’s talk about your ISO compliance needs. We’re here to help.
        </HeroSubheading>
      </HeroSection>

      {/* Contact Content */}
      <ContactWrapper>
        {/* Left side: Info */}
        <ContactInfo>
          <h2>Get in Touch</h2>
          <p>📧 Email: info@groundfloorcompliance.com</p>
          <p>📞 Phone: (555) 123-4567</p>
          <p>📍 Location: Chicago, IL</p>
          <p>
            We respond to all inquiries within 1–2 business days. Looking
            forward to working with you!
          </p>
        </ContactInfo>

        {/* Right side: Form */}
        <ContactForm onSubmit={(e) => e.preventDefault()}>
          <Field>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </Field>
          <Field>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="your@email.com" required />
          </Field>
          <Field>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="How can we help?" required />
          </Field>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactWrapper>
    </>
  );
}
