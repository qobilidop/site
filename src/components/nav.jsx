import { Link } from "gatsby";
import styled from "styled-components";

export const Nav = styled.nav`
  margin: 0 -0.25em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const NavA = styled.a`
  padding: 0 0.25em;
`;

export const NavLink = styled(Link)`
  padding: 0 0.25em;
`;
