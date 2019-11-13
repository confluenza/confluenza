module.exports = {
  siteMetadata: {
    title: 'Confluenza',
    editBaseUrl: 'https://github.com/confluenza/confluenza/blob/master',
    navigationGroups: [{
      title: 'User Documentation',
      tag: 'user'
    },
    {
      title: 'Developer Documentation',
      tag: 'developer'
    },
    {
      title: 'Other Documents',
      tag: 'other'
    },
    {
      title: 'Demo Workspace 1',
      tag: 'demo1'
    },
    {
      title: 'Demo Workspace 2',
      tag: 'demo2'
    }]
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/../../`,
        ignore: [
          '**/.git/**',
          '**/coverage/**',
          'workspaces/design-assets/**',
          'workspaces/gatsby-theme-confluenza/**',
          '**/node_modules/**',
          '**/.cache/**',
          '**/public/**',
          '**/es/**',
          '**/lib/**',
          '**/umd/**'
        ]
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600
            }
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: require.resolve(`./src/utils/typography`)
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-layout',
    'gatsby-plugin-root-import'
  ]
}
