import React from 'react'
import '../prismjs/themes/prism-tomorrow.css'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { EditFile } from '@confluenza/confluenza'
import { graphql } from 'gatsby'

const Template = ({ data: { site: { siteMetadata }, doc, mdx }, location }) => {
  const { editBaseUrl } = siteMetadata
  if (mdx) {
    const { body, fileAbsolutePath, frontmatter: { title } } = mdx
    return (
      <div>
        <EditFile
          fileAbsolutePath={fileAbsolutePath}
          editBaseUrl={editBaseUrl}
        />
        <h1>{title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    )
  } else {
    const { html, fileAbsolutePath, frontmatter: { title, content } } = doc
    return (
      <div>
        <EditFile
          fileAbsolutePath={fileAbsolutePath}
          externalContent={content}
          editBaseUrl={editBaseUrl}
        />
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content ? content.childMarkdownRemark.html.split('\n').slice(1).join('\n') : html }} />
        {content && html !== '' && <div dangerouslySetInnerHTML={{ __html: html }} />}
      </div>
    )
  }
}

export const pageQuery = graphql`
  query ($path: String!) {
    site: site {
      siteMetadata {
        title
        editBaseUrl
      }
    }
    config: allConfluenzaYaml(filter: {tag: {ne: null}}) {
      nodes {
        tag
        title
      }
    }
    doc: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      fileAbsolutePath
      frontmatter {
        title
        content {
          childMarkdownRemark {
            html
            fileAbsolutePath
          }
        }
      }
    }
    mdx: mdx(frontmatter: { path: { eq: $path } }) {
      body
      fileAbsolutePath
      frontmatter {
        title
      }
    }
  }
`

export const Head = ({ data: { doc, mdx }}) => {
  const { frontmatter: { title } } = doc

  return (
    <>
      <title>{title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
      <link href='https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap' rel='stylesheet' />
    </>
  )
}

export default Template
