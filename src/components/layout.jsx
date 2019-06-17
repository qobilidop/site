import React from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import { Nav, NavLink } from "./nav";

const theme = {
  // https://ethanschoonover.com/solarized/
  bg: "#fdf6e3",
  bd: "#eee8d5",
  mt: "#93a1a1",
  fg: "#839496",
  em: "#586e75",
  ac: "#268bd2"
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.fg};
  }
  a {
    color: ${props => props.theme.fg};
    :hover {
      color: ${props => props.theme.ac} !important;
    }
  }
  em {
    font-style: normal;
    font-weight: bold;
    color: ${props => props.theme.em} !important;
  }
  ::selection {
    background: ${props => props.theme.bd};
  }
  ::-moz-selection {
    background: ${props => props.theme.bd};
  }
`;

const Page = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr minmax(0, 960px) 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header-left header header-right"
    "main-left main main-right"
    "footer-left footer footer-right";
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
`;

const Header = styled.header`
  grid-area: header;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  font-size: 1.5rem;
`;

const Main = styled.main`
  grid-area: main;
  width: 100%;
  height: 100%;
`;

const Footer = styled.footer`
  grid-area: footer;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <Helmet
        title="Bili Dong"
        link={[
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href:
              "http://gravatar.com/avatar/086d1990cca231600eed04b18d6ee726.png?s=16"
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href:
              "http://gravatar.com/avatar/086d1990cca231600eed04b18d6ee726.png?s=32"
          }
        ]}
      />
      <Page>
        <Header>
          <Nav>
            <NavLink to="/">qobilidop</NavLink>
          </Nav>
          <Nav>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Nav>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <p>&copy; {new Date().getFullYear()} Bili Dong</p>
        </Footer>
      </Page>
    </React.Fragment>
  </ThemeProvider>
);

const Central = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const CoverLayout = ({ children }) => (
  <Layout>
    <Central>{children}</Central>
  </Layout>
);

export default Layout;
