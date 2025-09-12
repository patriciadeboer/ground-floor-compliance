import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

// ✅ Define styles for each variant
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

// ✅ Base styles shared across all variants
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

  /* Apply variant styles (default: primary) */
  ${({ $variant }) => buttonVariants[$variant || "primary"]};
`;

const ButtonBase = styled.button`${baseStyles}`;
const ButtonAnchor = styled.a`${baseStyles}`;
const ButtonLink = styled(Link)`${baseStyles}`;

// ✅ Smart button component
export function LinkButton({ to, href, children, variant = "primary", ...rest }) {
  if (to) {
    return (
      <ButtonLink to={to} $variant={variant} {...rest}>
        {children}
      </ButtonLink>
    );
  }
  if (href) {
    return (
      <ButtonAnchor href={href} $variant={variant} {...rest}>
        {children}
      </ButtonAnchor>
    );
  }
  return (
    <ButtonBase type="button" $variant={variant} {...rest}>
      {children}
    </ButtonBase>
  );
}
