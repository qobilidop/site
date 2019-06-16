import 'bootstrap/dist/css/bootstrap.css'

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import { Container, Col, Nav, Navbar, Row } from 'react-bootstrap';

// import Header from "./header"

const NavLink = props => (
  <Link to={props.route}>
    <Nav.Link as="span">
      {props.name}
    </Nav.Link>
  </Link>
)

const Header = () => (
  <header>
    <Navbar>
      <Link to="/" className="mr-auto">
        <Navbar.Brand>qobilidop</Navbar.Brand>
      </Link>
      <Nav>
        <NavLink name="About" route="/about" />
        <NavLink name="Blog" route="/blog" />
        <NavLink name="Contact" route="/contact" />
      </Nav>
    </Navbar>
  </header>
)

const Footer = () => (
  <footer className="text-center text-muted">
    &copy; {new Date().getFullYear()} Bili Dong
  </footer>
)

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            source
          }
        }
      }
    `}
    render={data => (
      <Container className="d-flex flex-column min-vh-100" style={{"max-width": "50rem"}}>
        <Header />
        <main className="flex-grow-1" style={{ "position": "relative" }}>
          <Col className="h-100" style={{ "position": "absolute" }}>
            {children}
          </Col>
        </main>
        <Footer />
      </Container>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
