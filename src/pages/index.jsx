// import 'bootstrap/dist/css/bootstrap.css'

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Button, Card } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <div className="h-100 d-flex justify-content-center align-items-center">
        {/* <Col className="text-right">
          <img
            src="https://www.gravatar.com/avatar/086d1990cca231600eed04b18d6ee726.png?s=400"
          />
        </Col>
        <Col className="text-left">
          <h2>Hi! I'm Bili Dong.</h2>
          <br></br>
          <p>I'm a software engineer.</p>
          <br></br>
          <h4>GitHub Twitter LinkedIn Email</h4>
        </Col> */}
      <Card className="border-0 align-items-center text-center" style={{ 'max-width': '25rem' }}>
        <Card.Img
          className="w-50"
          variant="top"
          src="https://www.gravatar.com/avatar/086d1990cca231600eed04b18d6ee726.png?s=800"
        />
        <Card.Body>
          <Card.Title>Bili Dong</Card.Title>
          <Card.Text>
            <p>Research Software Engineer</p>
            <p>general Software Engineer to be</p>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="https://github.com/qobilidop">GitHub</Card.Link>
          <Card.Link href="https://twitter.com/qobilidop">Twitter</Card.Link>
          <Card.Link href="https://www.linkedin.com/in/qobilidop/">LinkedIn</Card.Link>
          <Card.Link href="mailto:qobilidop@gmail.com">Email</Card.Link>
        </Card.Body>
      </Card>
    </div>
  </Layout>
)

export default IndexPage
