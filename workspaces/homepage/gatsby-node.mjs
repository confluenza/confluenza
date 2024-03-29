export const createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions
  createFieldExtension({
    name: 'noMdx',
    extend: () => ({
      resolve(source, args, context, info) {
        if (source[info.fieldName]) {
          return context.defaultFieldResolver(source, args, context, info)
        } else {
          return ''
        }
      }
    })
  })
  const typeDefs = `
    type Mdx implements Node @infer {
      frontmatter: MdxFrontmatter,
    }
    type MdxFrontmatter @infer {
      title: String @noMdx,
      path: String @noMdx,
      tag: String @noMdx,
      sortIndex: String @noMdx
    }
  `
  createTypes(typeDefs)
}
