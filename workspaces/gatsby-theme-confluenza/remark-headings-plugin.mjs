import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'

export const remarkHeadingsPlugin = function remarkHeadingsPlugin() {
  return async function transformer(tree, file) {
    const headings = []

    visit(tree, `heading`, (heading) => {
      headings.push({
        value: toString(heading),
        depth: heading.depth
      })
    })

    const mdxFile = file
    if (!mdxFile.data.meta) {
      mdxFile.data.meta = {}
    }

    mdxFile.data.meta.headings = headings
  }
}
