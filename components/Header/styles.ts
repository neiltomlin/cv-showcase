import styled from "styled-components";

export const HeaderContainer = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  border-top: 1px solid ${({ theme }) => theme.colors.text};
  margin: 1rem 0;
  padding: 0.5rem 0;
  text-align: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  justify-content: space-between;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
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

  a {
    color: ${({ theme }) => theme.colors.text};
    margin: auto 0;
    text-decoration: none;
  }
`;

export const HeaderLinkGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  margin: 0 auto;
`;
