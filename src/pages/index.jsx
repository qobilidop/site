import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Layout, { Cover } from "../components/layout";
import { Nav, NavA } from "../components/nav";

const IndexPage = () => (
  <Layout>
    <Cover>
      <h1>
        Hi! I'm <strong>Bili Dong</strong>,
      </h1>
      <h2>an aspiring <strong>software engineer</strong>.</h2>
      <h1>
        <Nav>
          <NavA href="https://github.com/qobilidop">
            <FaGithub />
          </NavA>
          <NavA href="https://twitter.com/qobilidop">
            <FaTwitter />
          </NavA>
          <NavA href="https://www.linkedin.com/in/qobilidop/">
            <FaLinkedin />
          </NavA>
          <NavA href="mailto:qobilidop@gmail.com">
            <FaEnvelope />
          </NavA>
        </Nav>
      </h1>
    </Cover>
  </Layout>
);

export default IndexPage;
