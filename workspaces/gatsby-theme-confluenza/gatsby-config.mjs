import path from 'path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'url'
const require = createRequire(import.meta.url)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const wrapESMPlugin = (name) =>
  function wrapESM(opts) {
    return async (...args) => {
      const mod = await import(name)
      const plugin = mod.default(opts)
      return plugin(...args)
    }
  }

const workspacesDirNames = ['workspaces', 'packages']

const rootPath = () => {
  const parentDirName = path.basename(path.resolve(process.cwd(), '..'))
  if (workspacesDirNames.includes(parentDirName)) {
    return path.resolve(`${process.cwd()}/../../`)
  } else {
    return process.cwd()
  }
}

const config = ({ ignore = [] }) => {
  return {
    jsxRuntime: 'automatic',
    siteMetadata: {
      title: 'Confluenza',
      editBaseUrl: 'https://github.com/confluenza/confluenza/blob/master'
    },
    plugins: [
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${rootPath()}`,
          ignore: [
            '**/.git/**',
            '**/coverage/**',
            '**/node_modules/**',
            '**/.cache/**',
            '**/public/**',
            '**/es/**',
            '**/lib/**',
            '**/umd/**',
            '/**/.*',
            ...ignore
          ]
        }
      },
      {
        resolve: 'gatsby-plugin-page-creator',
        options: {
          path: path.join(__dirname, 'src/pages')
        }
      },
      'gatsby-transformer-yaml',
      'gatsby-plugin-sharp',
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            'gatsby-remark-autolink-headers',
            {
              resolve: 'gatsby-remark-prismjs',
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
                maxWidth: 800
              }
            },
            'gatsby-remark-emoji'
          ]
        }
      },
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          mdxOptions: {
            remarkPlugins: [wrapESMPlugin('remark-emoji')]
          },
          gatsbyRemarkPlugins: [
            'gatsby-remark-autolink-headers',
            {
              resolve: 'gatsby-remark-prismjs',
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
                maxWidth: 800
              }
            }
          ]
        }
      },
      {
        resolve: 'gatsby-plugin-typography',
        options: {
          pathToConfigModule: require.resolve('./src/utils/typography')
        }
      },
      'gatsby-plugin-emotion',
      'gatsby-plugin-catch-links',
      'gatsby-plugin-layout',
      'gatsby-plugin-root-import'
    ]
  }
}

export default config
