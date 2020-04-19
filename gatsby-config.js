/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Riewe Web Development`,
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://davidriewe.netlify.com`,
    home: {
      title: `Hi, I'm David Riewe`,
      description: `Internet Marketing Consultant skilled in Amazon Web Services, WordPress, HTML, Javascript, PHP, Search Engine Optimization (SEO), web development, and e-commerce. Launched first website in 1997 and in 2005 started using wordpress. Most of the sites I build are for my own marketing goals to generate and resell leads. As of 2019 I have turned my focus to building niche business directories for clients.`,
    },

    /* W3Layouts domain verification key for contact forms https://my.w3layouts.com/Forms/ */
    w3l_dom_key: `5e86d919dc044CF_Domain_verify` 
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-47432237-1",
        head: true,
      }
    },
    `gatsby-plugin-sass`, 
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
  ],
}
