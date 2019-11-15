import React from 'react'
import '../prismjs/themes/prism-tomorrow.css'
import { rhythm } from '../utils/typography'
import { StaticQuery, graphql } from 'gatsby'

import { DocumentationLayout } from '@confluenza/confluenza'

export const SiteInformation = graphql`
  fragment SiteInformation on Site {
    siteMetadata {
      title
    }
  }
`

export const ConfluenzaConfig = graphql`
  fragment ConfluenzaConfig on ConfluenzaYamlConnection {
    nodes {
      tag
      title
    }
  }
`

export const MarkdownConnection = graphql`
  fragment MarkdownConnection on MarkdownRemarkConnection {
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
      ...SiteInformation
    }
    menuButton: file(base: { eq: "confluenza-menu-button.png" }) {
      publicURL
    }
    config: allConfluenzaYaml(filter: {tag: {ne: null}}) {
      ...ConfluenzaConfig
    }
    navigation: allMarkdownRemark(
      filter: { frontmatter: { path: { ne: "/404.html" } } }
      sort: { fields: [fileAbsolutePath], order: ASC }
    ) {
      ...MarkdownConnection
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
