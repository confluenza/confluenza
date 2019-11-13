import React from 'react'
import '../prismjs/themes/prism-tomorrow.css'
import { rhythm } from '../utils/typography'
import { StaticQuery, graphql } from 'gatsby'

import { DocumentationLayout } from '@confluenza/confluenza'

export const ConfluenzaSiteInformation = graphql`
  fragment ConfluenzaSiteInformation on Site {
    siteMetadata {
      title
      navigationGroups {
        title
        tag
      }
    }
  }
`

export const ConfluenzaMarkdownConnection = graphql`
  fragment ConfluenzaMarkdownConnection on MarkdownRemarkConnection {
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
`

const confluenzaQuery = graphql`
  query Navigation {
    site {
      ...ConfluenzaSiteInformation
    }
    file(base: { eq: "MenuButton.png" }) {
      publicURL
    }
    navigation: allMarkdownRemark(
      filter: { frontmatter: { path: { ne: "/404.html" } } }
      sort: { fields: [fileAbsolutePath], order: ASC }
    ) {
      ...ConfluenzaMarkdownConnection
    }
  }
`

const ConfluenzaDocumentationLayout = ({ children, location }) => {
  return (
    <StaticQuery
      query={confluenzaQuery}
      render={data => {
        return (
          <DocumentationLayout location={location} data={data} rhythm={rhythm}>
            { children }
          </DocumentationLayout>
        )
      }}
    />
  )
}

export { ConfluenzaDocumentationLayout }
