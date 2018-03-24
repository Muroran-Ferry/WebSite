module.exports = {
  siteMetadata: {
    title: '室蘭フェリーターミナル',
    author: '室蘭港フェリー航路応援隊',
    description: 'ある市民による室蘭フェリーターミナルの情報サイト',
    siteUrl: 'https://muroran-ferry.net/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-116131947-1',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
  ],
}
