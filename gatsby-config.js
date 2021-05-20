module.exports = {
  siteMetadata: {
    title: `Vaquita Tech`,
    description: `Developing a new sustainable technology that measures the levels of toxicity and pollution of water reservoirs in all areas around you, 24/7. Our goal is to make the planet, better for everyone, starting from today.`,
    author: `@dan-laskowski`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
};
