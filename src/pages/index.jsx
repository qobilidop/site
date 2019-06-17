import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { CoverLayout } from "../components/layout";
import { Nav, NavA } from "../components/nav";

const IndexPage = () => (
  <CoverLayout>
    <h1>
      Hi! I'm <strong>Bili Dong</strong>,
    </h1>
    <p>
      a <strong>developer</strong> at heart,
      <br />a <strong>research software engineer</strong> by skill,
      <br />
      and a <strong>computational astrophysics researcher</strong> in training.
    </p>
    <Nav style={{ "font-size": "3rem" }}>
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
  </CoverLayout>
);

export default IndexPage;
