import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import NeilCvTheme from "./styles/theme";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={NeilCvTheme}>{children}</ThemeProvider>;
};

export const customRender = (
  ui: React.ReactNode,
  options: RenderOptions<
    typeof import("@testing-library/dom/types/queries"),
    HTMLElement,
    HTMLElement
  > = {}
) => render(ui, { wrapper: AllTheProviders, ...options });
