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
      resolve: '@confluenza/gatsby-theme-confluenza',
      options: {}
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-root-import'
  ]
}
