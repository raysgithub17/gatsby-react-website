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
    // {
    //   resolve: `gatsby-plugin-csp`,
    //   options: {
    //     directives: {
    //       'default-src': ["'self'"],
    //       'script-src': ["'self'", "'unsafe-inline'"],
    //       'style-src': ["'self'", "'unsafe-inline'"],
    //       'img-src': ["'self'", 'data:'],
    //       'connect-src': ["'self'"],
    //       'font-src': ["'self'"],
    //       'frame-src': ["'self'"],
    //       'base-uri': ["'self'"],
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-tagmanager`,
      options: {
        id: 'YOUR_GOOGLE_TAG_MANAGER_ID',
        // Add other options if needed
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
