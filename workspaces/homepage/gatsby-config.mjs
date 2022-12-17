const config = {
  jsxRuntime: 'automatic',
  siteMetadata: {
    title: 'Confluenza',
    editBaseUrl: 'https://github.com/confluenza/confluenza/blob/master'
  },
  plugins: [
    {
      resolve: '@confluenza/gatsby-theme-confluenza',
      options: {
        mdx: true,
        ignore: []
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-root-import'
  ]
}

export default config
