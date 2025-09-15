import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    body {
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
      font-family: Georgia, "Times New Roman", Times, serif;
    }
  `
);
