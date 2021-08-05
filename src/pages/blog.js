import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map(node => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
      <h1>{data.allFile.nodes.name} </h1>
    </Layout>
  )
}
export default BlogPage

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`
