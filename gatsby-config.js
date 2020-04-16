const path = require("path")

module.exports = {
  siteMetadata: {
    title: "COVID-19",
    source: "http://www.caib.es/",
    repoNameWithOwner: "",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-emotion`,
  ],
}
