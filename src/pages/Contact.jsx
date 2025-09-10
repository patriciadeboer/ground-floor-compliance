import styled from "styled-components";

const Section = styled.section`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
`;

const Button = styled.button`
  background: #0b3d91;
  color: white;
  padding: 0.5rem;
  border: none;
  cursor: pointer;

  &:hover {
    background: #092c68;
  }
`;

export default function Contact() {
  return (
    <Section>
      <h2>Contact</h2>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Name: <input type="text" name="name" required />
        </label>
        <label>
          Email: <input type="email" name="email" required />
        </label>
        <label>
          Message: <textarea name="message" required></textarea>
        </label>
        <Button type="submit">Send</Button>
      </form>
    </Section>
  );
}
