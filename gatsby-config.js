module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    }
  ],
  siteMetadata: {
    title: `Bili Dong`,
    source: `https://github.com/qobilidop/site`,
    description: `Hello world!`,
    author: `Bili Dong`,
  },
}
