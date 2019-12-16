import React from 'react'
import { rhythm } from '../utils/typography'
import { StaticQuery, graphql } from 'gatsby'

import { DocumentationLayout } from '@confluenza/confluenza'

export const SiteInformation = graphql`
  fragment SiteInformation on Site {
    siteMetadata {
      title
    }
    fields {
      mdx
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

export const MdxDataConnection = graphql`
  fragment MdxDataConnection on MdxConnection {
    docs: edges {
      node {
        frontmatter {
          title
          path
          tag
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
    mdxNavigation: allMdx(
      filter: { frontmatter: { path: { ne: "/404.html" } } }
      sort: { fields: [fileAbsolutePath], order: ASC }
    ) {
      ...MdxDataConnection
    }
  }
`

const ConfluenzaDocumentationLayout = ({ children, location }) => {
  return (
    <StaticQuery
      query={confluenzaQuery}
      render={data => {
        const mdxEnabled = data.site.fields && data.site.fields.mdx
        let updatedData = data
        if (mdxEnabled) {
          updatedData = { ...data, navigation: { docs: [...data.navigation.docs, ...data.mdxNavigation.docs] } }
        }
        return (
          <DocumentationLayout location={location} data={updatedData} rhythm={rhythm}>
            {children}
          </DocumentationLayout>
        )
      }}
    />
  )
}

export { ConfluenzaDocumentationLayout }
