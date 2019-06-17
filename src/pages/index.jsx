import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { CoverLayout } from "../components/layout";
import { Nav, NavA } from "../components/nav";

const IndexPage = () => (
  <CoverLayout>
    <h1>
      Hi! I'm <em>Bili Dong</em>,
    </h1>
    <p>
      a <em>developer</em> at heart,
      <br />a <em>research software engineer</em> by skill,
      <br />
      and a <em>computational astrophysics researcher</em> in training.
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
