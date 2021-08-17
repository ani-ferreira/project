import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Card from "../components/Card"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMarkdownRemark.nodes.map(node => (
        <section key={node.id}>
          <Card
            title={node.frontmatter.title}
            description={node.frontmatter.date}
          />

          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </section>
      ))}
    </Layout>
  )
}
export default BlogPage

/* dont know how to insert dangerously html.. inside the card*/

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
