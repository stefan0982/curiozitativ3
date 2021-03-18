require( 'dotenv' ).config( {
  path: `.env.${ process.env.NODE_ENV }`,
} )

module.exports = {
  siteMetadata: {
    siteUrl: `https://curiozitati.app`,
    url: 'https://curiozitati.app',
    titleTemplate: "%s · Cea mai interesantă informație",
    siteTitleAlt: `Cele mai interesante curiozități știați că info știai că`,
    siteHeadline   : `Cele mai interesante curiozități știați că info știai că`,
    title: "Curiozitati",
    description: `Curiozități noi în fiecare zi, începe să fii mai bun, uimește-ți prietenii, investiția în cunoștințe mereu îți va oferi cel mai mare profit, Ziua în care nu înveți nimic nou este pierdută`,
    siteLanguage   : `ro`,
    author: `stefan`,
    image: `//curiozitati.app/banner.png`,
    twitterUsername: '@curiozitati2'
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-google-gtag`, options: {
        trackingIds: [
          process.env.GA_TRACKING_ID,
        ],
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "static",
        path: "./static/",
      }
    },
    `gatsby-theme-material-ui`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        modalProps: {
          style: {
            overlay: {
              position: `fixed`,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: `rgba(0, 0, 0, 0.75)`,
            },
            content: {
              position: `absolute`,
              border: `none`,
              background: `none`,
              padding: 0,
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              overflow: `auto`,
              WebkitOverflowScrolling: `touch`,
            },
          },
          contentLabel: `Modal`
        }
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries")
      },
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        excludePaths: ["/"],
        height: 2,
        color: `#ff7d00`,
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name       : `Investiția în cunoștințe mereu îți va oferi cel mai mare profit`,
        short_name : `Curiozități`,
        description: `Curiozități noi în fiecare zi, începe să fii mai bun, uimește-ți prietenii, dezvoltă-te multilateral`,
        start_url  : `/`,
        background_color: `#455a64`,
        theme_color: `#ffecb2`,
        display    : `standalone`,
        icon: "static/square_logo.png",
        crossOrigin: `use-credentials`,
      },
    },
  ]
};
