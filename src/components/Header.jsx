import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colors.background};
  color: green;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* so the dropdown nav can be positioned inside */
  z-index: 999
`;

const Brand = styled.h1`
  font-size: 1.25rem;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    color: green;
    text-decoration: none;
  }

  /* Desktop (>= md) */
  @media (min-width: ${({ theme }) => theme.bp.md}) {
    display: flex;
    position: static;
    flex-direction: row;
    background: none;
    max-height: none;
    overflow: visible;
  }

  /* Mobile (< md) */
  @media (max-width: ${({ theme }) => theme.bp.md}) {
    position: absolute;
    top: 60px; /* below header */
    right: 0;
    background: ${({ theme }) => theme.colors.background};
    flex-direction: column;
    padding: 0 1rem;
    width: 200px;
    z-index: 1000; 

    /* Start hidden */
    max-height: 0;
    overflow: hidden;

    /* Transition for slide effect */
    transition: max-height 0.3s ease-out, padding 0.3s ease-out;

    &.open {
      max-height: 500px; /* big enough to fit links */
      padding: 1rem;
    }
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    display: block;
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Brand>Ground Floor Compliance</Brand>
      <Hamburger
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? "✕" : "☰"}
      </Hamburger>
      <Nav className={menuOpen ? "open" : ""}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </Nav>
    </HeaderWrapper>
  );
}
