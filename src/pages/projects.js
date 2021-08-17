import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const Projects = ({ data }) => {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(edge => (
        <div key={edge.node.id}>
          <h3>{edge.node.frontmatter.title}</h3>
        </div>
      ))}
    </Layout>
  )
}

export default Projects

/*no puse el body porque no lo pedi por query al html*/

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { path: { eq: "/project/" } } }) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
