module.exports = {
  siteMetadata: {
    title: 'Confluenza',
    editBaseUrl: 'https://github.com/confluenza/confluenza/blob/master'
  },
  plugins: [
    {
      resolve: '@confluenza/gatsby-theme-confluenza',
      options: {
        mdx: true
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-root-import'
  ]
}
