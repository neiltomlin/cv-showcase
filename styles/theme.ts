import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  type CustomTheme = typeof NeilCvTheme;
  export interface DefaultTheme extends CustomTheme {
    colors: {
      background: string;
      text: string;
    };
  }
}

const NeilCvTheme = {
  colors: {
    background: "#333333",
    text: "#FFF",
  },
};
export default NeilCvTheme;
