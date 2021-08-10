import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

const BlogPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html } = markdownRemark
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMarkdownRemark.nodes.map(node => (
        <Link to={"/blog/"} key={node.id}>
          <h3>{node.frontmatter.title}</h3>
          <p>Posted: {node.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Link>
      ))}
    </Layout>
  )
}
export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          title
        }
        html
        id
      }
    }
  }
`
