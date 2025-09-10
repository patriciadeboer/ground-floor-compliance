import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #f4f4f4;
  color: #333;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px solid #ddd;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p>© {new Date().getFullYear()} Ground Floor Compliance. All rights reserved.</p>
    </FooterWrapper>
  );
}
