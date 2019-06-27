import React from "react";

import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from "react-helmet";
import styled from "styled-components";

import { Nav, NavLink } from "./nav";
import theme from "../utils/theme";
import { rhythm } from "../utils/typography";
import { muteLink } from "../utils/styles"


const Page = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr minmax(0, ${theme.line.width.view}) 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header-left header header-right"
    "main-left main main-right"
    "footer-left footer footer-right";
  grid-gap: ${rhythm(1)};
  justify-items: center;
  align-items: center;
`;

const HeaderBanner = styled.header`
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 100%;
  height: 100%;
  background: ${theme.color.hightlight};
  z-index: 1;
`;

const FooterBanner = styled.header`
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: -2;
  grid-row-end: -1;
  width: 100%;
  height: 100%;
  background: ${theme.color.hightlight};
  z-index: 1;
`;

const Header = styled.header`
  grid-area: header;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  z-index: 2;
  ${muteLink}
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
  z-index: 2;
  text-align: center;
  ${muteLink}
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <React.Fragment>
      <Helmet
        title={data.site.siteMetadata.title}
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
        <HeaderBanner />
        <Header>
          <Nav>
            <NavLink to="/">{data.site.siteMetadata.title}</NavLink>
          </Nav>
          <Nav>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Nav>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <a href="https://github.com/qobilidop/site">&copy; {new Date().getFullYear()} Bili Dong</a>
        </Footer>
        <FooterBanner />
      </Page>
    </React.Fragment>
  )
}

export const Cover = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${muteLink}
`;

export const TextColumn = styled.div`
  max-width: ${rhythm(theme.line.width.text / theme.line.height)};
  margin: auto;
`;

export default Layout;
