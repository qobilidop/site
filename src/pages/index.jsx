import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Layout, { Cover } from "../components/layout";
import { Nav, NavA } from "../components/nav";

const IndexPage = () => (
  <Layout>
    <Cover>
      <h1>
        <div>
          Hi! I'm <strong>Bili Dong</strong> <strong>董比立</strong>,
        </div>
      </h1>
      <p>
        a <strong>developer</strong> at heart,
        <br />a <strong>research software engineer</strong> by skill,
        <br />
        and a <strong>computational astrophysics researcher</strong> in
        training.
        <br />
      </p>
      <footer>
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
      </footer>
    </Cover>
  </Layout>
);

export default IndexPage;
