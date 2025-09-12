import styled from "styled-components";

export const PageContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  padding: 2rem 1rem;
`;
