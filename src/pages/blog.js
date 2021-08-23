import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Card from "../components/Card"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMarkdownRemark.edges.map(edge => (
        <section key={edge.node.id}>
          <Link to={edge.node.frontmatter.path}>
            <Card
              title={edge.node.frontmatter.title}
              description={edge.node.frontmatter.date}
            />
          </Link>
        </section>
      ))}
    </Layout>
  )
}
export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { path: { eq: "/blog/" } } }) {
      edges {
        node {
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`
