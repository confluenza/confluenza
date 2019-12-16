const edgesSelector = `
  edges {
    node {
      frontmatter {
        path
      }
    }
  }
`

const markdownQuery = `
  allMarkdownRemark(
    limit: 1000
  ) {
    ${edgesSelector}
  }
`

const mdxQuery = `
  allMdx(
    limit: 1000
  ) {
    ${edgesSelector}
  }
`

exports.createPages = async ({ actions, graphql }, options) => {
  const { createPage } = actions
  const markdownTemplate = require.resolve('./src/templates/markdownTemplate.js')

  const mdx = !!options.mdx

  const queryResult = await graphql(`
    {
      ${markdownQuery}
      ${mdx ? mdxQuery : ''}
    }
  `)

  if (queryResult.errors) {
    throw new Error(queryResult.errors)
  }

  queryResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.path) {
      createPage({
        path: node.frontmatter.path,
        component: markdownTemplate,
        context: {}
      })
    }
  })

  if (mdx) {
    queryResult.data.allMdx.edges.forEach(({ node }) => {
      if (node.frontmatter.path) {
        createPage({
          path: node.frontmatter.path,
          component: markdownTemplate,
          context: {}
        })
      }
    })
  }
}

exports.onCreateNode = ({ node, actions }, options) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Site') {
    const mdx = !!options.mdx
    createNodeField({
      node,
      name: 'mdx',
      value: mdx
    })
  }
}
