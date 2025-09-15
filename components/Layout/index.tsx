import styled from "styled-components";
import { Header } from "../Header";

export const PageContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  border-left: 1px solid ${({ theme }) => theme.colors.text};
  border-right: 1px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  min-height: 100vh;
  padding: 2rem 1rem;
`;

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <PageContainer>{children}</PageContainer>
    </>
  );
};
