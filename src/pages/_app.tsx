import { defaultTheme } from "@/config/theme";
import { GlobalStyle } from "@/styles/globals";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import "@/components/richtextinput/styles.css";

import ModalProvider from "@/components/modal";
import { Source_Sans_Pro } from "@next/font/google";

export const SourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle fontFamilySrc={SourceSansPro.style.fontFamily} />
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </ThemeProvider>
    </>
  );
}
