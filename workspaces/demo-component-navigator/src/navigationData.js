const navigationData = {
  site: {
    siteMetadata: {
      title: 'Component Navigator'
    }
  },
  config: {
    nodes: [
      { title: 'Nav Group 1', tag: 'tag1' },
      { title: 'Nav Group 2', tag: 'tag2' }
    ]
  },
  navigation: {
    docs: [
      {
        node: {
          frontmatter: {
            title: 'Group 1',
            path: '/',
            tag: 'tag1',
            sortIndex: 1
          },
          headings: [
            { value: 'Heading 1', path: '/heading1' },
            { value: 'Heading 2', path: '/heading2' }
          ]
        }
      },
      {
        node: {
          frontmatter: {
            title: 'Group 2',
            path: '/group-2',
            tag: 'tag1',
            sortIndex: 2
          }
        }
      },
      {
        node: {
          frontmatter: {
            title: 'Group 3',
            path: '/group-3',
            tag: 'tag2'
          },
          headings: [
            { value: 'Heading 1', path: '/group-3/heading1' },
            { value: 'Heading 2', path: '/group-3/heading2' }
          ]
        }
      }
    ]
  }
}

export { navigationData }
