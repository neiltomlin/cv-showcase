declare module "styled-components" {
  type CustomTheme = typeof NeilCvTheme;
  export interface DefaultTheme extends CustomTheme {
    colors: {
      background: string;
      backgroundAlt: string;
      text: string;
      accentPink: string;
      accentPinkHover: string;
      accentOrange: string;
      accentOrangeHover: string;
    };
    layout: {
      maxWidth: string;
    };
    media: {
      tablet: string;
      desktop: string;
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
    backgroundAlt: "#281a30",
    text: "#FFF",
    accentPink: "#fd2ec9",
    accentPinkHover: "#fd6ec9",
    accentOrange: "#ffbc04",
    accentOrangeHover: "#fffc04",
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
