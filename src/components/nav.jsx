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
  text-decoration: none;
  color: ${props => props.theme.fg};
  :hover {
    color: ${props => props.theme.ac};
  }
`;

export const NavLink = styled(Link)`
  padding: 0 0.25em;
  text-decoration: none;
  color: ${props => props.theme.fg};
  :hover {
    color: ${props => props.theme.ac};
  }
`;
