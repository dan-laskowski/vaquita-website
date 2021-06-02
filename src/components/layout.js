import React from "react";
import "@fontsource/catamaran/900.css";
import "@fontsource/libre-franklin";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import GlobalStyle from "../assets/style/globalStyle";
import theme from "../assets/style/theme";
import Header from "../components/organisms/header";
import Footer from "./footer";
import Seo from "./seo";

const StyledWrapper = styled.main``;

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Helmet>
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
        </Helmet>
        <Seo />
        <Header />
        <StyledWrapper>{children}</StyledWrapper>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
