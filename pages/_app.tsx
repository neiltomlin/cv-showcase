import { GlobalStyles } from "@/styles/global";
import NeilCvTheme from "@/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={NeilCvTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
