/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: '/barney-travels',
  siteMetadata: {
    title: `Barney's travels`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Barney's Travels",
        start_url: '/',
        backgrond_color: '#e2e8f0',
        display: 'standalone',
        //Icon source: https://www.svgrepo.com/svg/437961/navigator-2
        icon: 'src/images/icon.png',
      },
    },
  ],
};
