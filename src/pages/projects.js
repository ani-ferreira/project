import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { portfolio, projectsx } from "../styles/project.module.css"

const Projects = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Projects</h2>
        <h3>My nice websites</h3>
        <div className={projectsx}>
          <h2>nothing here</h2>
        </div>
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          title
        }
        html
      }
    }
  }
`
