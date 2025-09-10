import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  background: #0b3d91;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  a {
    color: white;
    margin-left: 1rem;
    text-decoration: none;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>ISO Compliance Consulting</h1>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </Nav>
    </HeaderWrapper>
  );
}
