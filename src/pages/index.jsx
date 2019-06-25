import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Layout, { Cover } from "../components/layout";
import { Nav, NavA } from "../components/nav";

const IndexPage = () => (
  <Layout>
    <Cover>
      <h1>
        Hi! I'm <strong>Bili Dong</strong> <strong>董比立</strong>.
      </h1>
      <h2>Software Engineer</h2>
      <p>I'm a <strong>developer</strong> at heart. I would like to be a professional <strong>software engineer</strong> after getting my Ph.D. degree in <strong>computational astrophysics</strong> (hopefully in 2020). I have self-trained to be a <strong>research software engineer</strong> during graduate school by contributing to <strong>open source software</strong> projects mostly in the <strong>scientific Python</strong> world.</p>
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
