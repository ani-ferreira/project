/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },

    `gatsby-transformer-remark`,
    "gatsby-plugin-mdx",
  ],
  siteMetadata: {
    title: "Titulo",
    description: "este es un proyecto",
    copyright: "This website is copyright 2021",
  },
}
