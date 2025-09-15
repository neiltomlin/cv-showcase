declare module "styled-components" {
  type CustomTheme = typeof NeilCvTheme;
  export interface DefaultTheme extends CustomTheme {
    colors: {
      background: string;
      text: string;
    };
  }
}
const breakpoints = {
  tablet: "768px",
  desktop: "1024px",
};

const NeilCvTheme = {
  colors: {
    background: "#333333",
    text: "#FFF",
  },
  layout: {
    maxWidth: "800px",
  },
  media: {
    tablet: `@media (min-width: ${breakpoints.tablet})`,
    desktop: `@media (min-width: ${breakpoints.desktop})`,
  },
};

export default NeilCvTheme;
