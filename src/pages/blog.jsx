import React from "react";
import { Link, graphql } from "gatsby";

import Layout, { TextColumn } from "../components/layout";
import { Nav } from "../components/nav";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout>
        <TextColumn>
          {posts.map(({ node }) => {
            return (
              <div key={node.fields.slug}>
                <Nav>
                  <h3>
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  </h3>
                  <p>{node.frontmatter.date}</p>
                </Nav>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt
                  }}
                />
              </div>
            );
          })}
        </TextColumn>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
          }
        }
      }
    }
  }
`;
