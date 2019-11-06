import React from 'react'
import 'src/prismjs/themes/prism-tomorrow.css'
import { StaticQuery, graphql } from 'gatsby'

import { DocumentationLayout } from '@confluenza/confluenza'

const ConfluenzaDocumentationLayout = ({ children, location }) => {
  return (
    <StaticQuery
      query={graphql`
        query Navigation {
          site {
            siteMetadata {
              title
            }
          }
          file(base: { eq: "MenuButton.png" }) {
            publicURL
          }
          navigation: allMarkdownRemark(
            filter: { frontmatter: { path: { ne: "/404.html" } } }
            sort: { fields: [fileAbsolutePath], order: ASC }
          ) {
            docs: edges {
              node {
                frontmatter {
                  title
                  path
                  tag
                  content {
                    childMarkdownRemark {
                      html
                      headings(depth: h2) {
                        value
                      }
                    }
                  }
                }
                headings(depth: h2) {
                  value
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <DocumentationLayout location={location} data={data}>
            { children }
          </DocumentationLayout>
        )
      }}
    />
  )
}

export { ConfluenzaDocumentationLayout }
