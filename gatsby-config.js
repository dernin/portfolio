/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Devin Curtis | Web Developer & Videographer'
  },
  pathPrefix: "/portfolio",
  /* Your site config here */
  plugins: [
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `src/projects`,
                path: `${__dirname}/src/projects`,
              },
            },
             {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `src/img`,
                path: `${__dirname}/src/img`,
              },
            }, 
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `src/skills`,
                path: `${__dirname}/src/skills`
              },
            },
            "gatsby-plugin-gatsby-cloud",
            "gatsby-plugin-image",
            "gatsby-plugin-sharp",
            "gatsby-plugin-sass",
            "gatsby-transformer-remark",
            "gatsby-transformer-sharp",
            "gatsby-plugin-react-helmet",
          ],
}
