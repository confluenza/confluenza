exports.sourceNodes = ({
  actions,
  createNodeId,
  createContentDigest
}, configOptions, done) => {
  console.log('configOptions=', configOptions)
  done()
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const markdownTemplate = require.resolve(`./src/templates/markdownTemplate.js`)

  const queryResult = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
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
}
