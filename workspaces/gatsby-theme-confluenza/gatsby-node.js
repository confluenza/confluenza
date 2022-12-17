const { compileMDXWithCustomOptions } = require(`gatsby-plugin-mdx`);
const { remarkHeadingsPlugin } = require(`./remark-headings-plugin`);

const edgesSelector = `
  edges {
    node {
      frontmatter {
        path
      }
    }
  }
`;

const nodesSelectorMdx = `
  nodes {
    frontmatter {
      path
    }
    internal {
      contentFilePath
    }
  }
`;

const markdownQuery = `
  allMarkdownRemark(
    limit: 1000
  ) {
    ${edgesSelector}
  }
`;

const mdxQuery = `
  allMdx(
    limit: 1000
  ) {
    ${nodesSelectorMdx}
  }
`;

const mdxEnabled = (options) => {
  let mdx = true;

  if (Object.prototype.hasOwnProperty.call(options, "mdx")) {
    mdx = options.mdx;
  }

  return mdx;
};

exports.createPages = async ({ actions, graphql }, options) => {
  const { createPage } = actions;
  const markdownTemplate = require.resolve(
    "./src/templates/markdownTemplate.js"
  );

  const mdx = mdxEnabled(options);

  const queryResult = await graphql(`
    query {
      ${markdownQuery}
      ${mdx ? mdxQuery : ""}
    }
  `);

  if (queryResult.errors) {
    throw new Error(queryResult.errors);
  }

  queryResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.path) {
      createPage({
        path: node.frontmatter.path,
        component: markdownTemplate,
        context: { templatePath: node.frontmatter.path },
      });
    }
  });

  if (mdx) {
    queryResult.data.allMdx.nodes.forEach((node) => {
      if (node.frontmatter.path) {
        createPage({
          path: node.frontmatter.path,
          component: `${markdownTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
          context: { templatePath: node.frontmatter.path },
        });
      }
    });
  }
};

exports.onCreateNode = ({ node, actions }, options) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Site") {
    const mdx = mdxEnabled(options);
    createNodeField({
      node,
      name: "mdx",
      value: mdx,
    });
  }
};

exports.createSchemaCustomization = async ({
  getNode,
  getNodesByType,
  pathPrefix,
  reporter,
  cache,
  actions,
  schema,
  store,
}) => {
  const { createTypes } = actions;

  const headingsResolver = schema.buildObjectType({
    name: `Mdx`,
    fields: {
      headings: {
        type: `[MdxHeading]`,
        async resolve(mdxNode) {
          const fileNode = getNode(mdxNode.parent);

          if (!fileNode) {
            return null;
          }

          const result = await compileMDXWithCustomOptions(
            {
              source: mdxNode.body,
              absolutePath: fileNode.absolutePath,
            },
            {
              pluginOptions: {},
              customOptions: {
                mdxOptions: {
                  remarkPlugins: [remarkHeadingsPlugin],
                },
              },
              getNode,
              getNodesByType,
              pathPrefix,
              reporter,
              cache,
              store,
            }
          );

          if (!result) {
            return null;
          }

          return result.metadata.headings;
        },
      },
    },
  });

  createTypes([
    `
      type MdxHeading {
        value: String
        depth: Int
      }
    `,
    headingsResolver,
  ]);
};
