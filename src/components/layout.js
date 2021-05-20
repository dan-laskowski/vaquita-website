import React from "react";
import "@fontsource/catamaran/900.css";
import "@fontsource/libre-franklin";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../assets/style/globalStyle";
import theme from "../assets/style/theme";
import Header from "./header";
import Footer from "./footer";
import Seo from "./seo";

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Seo />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
