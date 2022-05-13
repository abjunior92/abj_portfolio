require(`dotenv`).config({
  path: `.env`
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `Abj - Portfolio`,
    siteTitleAlt: `Abj - Portfolio`,
    siteHeadline: `Abj - Portfolio`,
    siteUrl: `https://abjportfolio.netlify.app`,
    siteDescription: `My Personal Portfolio`,
    siteLanguage: `en`,
    siteImage: `/presentation.png`,
    author: `Andrea Junior Berselli`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {}
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abj - Portfolio`,
        short_name: `Portfolio`,
        description: `My Personal Portfolio`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icon: `src/images/rick_sanchez_avatar.png`,
        icons: [
          {
            src: `src/images/rick_sanchez_avatar.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `src/images/rick_sanchez_avatar.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {}
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false
      }
    }
  ].filter(Boolean)
};
