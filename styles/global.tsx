import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    body {
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
      font-family: Georgia, "Times New Roman", Times, serif;
      margin: 0;
    }

    button {
      background-color: ${({ theme }) => theme.colors.accentPink};
      border: none;
      border-radius: 4px;
      color: ${theme.colors.text};
      cursor: pointer;
      font-family: inherit;
      font-weight: bold;
      padding: 0.5rem 1rem;

      &:hover {
        background-color: ${({ theme }) => theme.colors.accentPinkHover};
      }
    }
  `
);
