/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `rays-superops`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [
          {
            userAgent: '*',
            allow: '/',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        mergeScriptHashes: false,
        mergeStyleHashes: false,
        mergeDefaultDirectives: true,
        directives: {
          'script-src': "'self' 'unsafe-inline' ",
          'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
          'img-src': "'self' blob: data: https://images.g2crowd.com https://media.graphassets.com https://superops.com",
          'connect-src': ["'self'"],
          'font-src': "'self' data: https://fonts.googleapis.com https://fonts.gstatic.com ",
          'frame-src': ["'self'"],
          'base-uri': ["'self'"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-NFJ3RX65',
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-HP4WKPMZYR",
        head: true, 
      },
    },
  ],
};
