import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  border-top: 1px solid ${({ theme }) => theme.colors.text};
  margin-top: 1rem;
  padding: 0.5rem 0;
  text-align: center;
`;

export const HeaderContent = styled.div`
  color: ${({ theme }) => theme.colors.accentOrange};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  justify-content: space-between;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
  }

  a {
    color: ${({ theme }) => theme.colors.accentOrange};
    margin: auto 0;
    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.accentOrangeHover};
    }
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  gap: 0.75rem;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
  }
`;

export const HeaderLinkGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  margin: 0 auto;
`;

export const SkipLink = styled.a`
  position: absolute;
  left: -9999px;
  z-index: 999;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  opacity: 0;

  &:focus {
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
    color: ${({ theme }) => theme.colors.accentPink};
  }
`;
