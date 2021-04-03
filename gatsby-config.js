require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Kaung Nan Dar Shein Personal Portfolio`,
    description: `Full-Stack Developer, Graphic Designer, and former Chemist. Kaung Nan Dar Shein is originally from Yangon, Myanmar, currently based out of NYC.`,
    url: "https://knds.art",
    image: `http://images.ctfassets.net/d4v7dy300qaq/4aTb8Bdb9CeU6QNlPN2hy/2fb362a3a61b3377207f3e55b265e6d8/IMG_0909.JPG`,
    author: `Kaung Nan Dar Shein`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-dark-mode`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kaung Nan Dar Shein Personal Portfolio`,
        short_name: `KNDS`,
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
        icon: `src/images/favicon-alt.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
