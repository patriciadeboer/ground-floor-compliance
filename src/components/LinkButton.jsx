import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

// ✅ Define variant styles
const buttonVariants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.secondary};
    color: #fff;

    &:hover {
      background: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.secondary};
    }
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: #fff;
    }
  `,
};

{/* 
  <LinkButton to="/special" color="green" hover="darkgreen">
    Custom Green Button
  </LinkButton> 
*/}

// ✅ Base styles
const baseStyles = css`
  display: inline-block;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  /* Variant fallback */
  ${({ $variant }) => buttonVariants[$variant || "primary"]};

  /* ✅ Custom color overrides */
  ${({ $color, $hover }) =>
    $color &&
    css`
      background: ${$color};
      color: #fff;
      border: none;

      &:hover {
        background: ${$hover || $color};
      }
    `}
`;

const ButtonBase = styled.button`${baseStyles}`;
const ButtonAnchor = styled.a`${baseStyles}`;
const ButtonLink = styled(Link)`${baseStyles}`;

// ✅ Smart Button
export function LinkButton({
  to,
  href,
  children,
  variant = "primary",
  color,
  hover,
  ...rest
}) {
  const props = { $variant: variant, $color: color, $hover: hover, ...rest };

  if (to) return <ButtonLink to={to} {...props}>{children}</ButtonLink>;
  if (href) return <ButtonAnchor href={href} {...props}>{children}</ButtonAnchor>;
  return <ButtonBase type="button" {...props}>{children}</ButtonBase>;
}
