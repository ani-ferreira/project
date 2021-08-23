const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { path: { eq: "/blog/" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              description
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const items = result.data.allMarkdownRemark.edges

    items.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`src/templates/blogPost.js`),
        context: {
          id: node.id,
        },
      })
    })

    // Make category pages
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
