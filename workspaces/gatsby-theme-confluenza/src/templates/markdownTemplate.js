import React from "react";
import { MDXProvider } from "@mdx-js/react";
import "../prismjs/themes/prism-tomorrow.css";
import { EditFile } from "@confluenza/confluenza";
import { graphql } from "gatsby";

const Template = ({ data, location, children }) => {
  const {
    site: { siteMetadata },
    doc,
    mdx,
  } = data;
  const { editBaseUrl } = siteMetadata;
  if (mdx) {
    const {
      internal: { contentFilePath: fileAbsolutePath },
      frontmatter: { title },
    } = mdx;
    return (
      <div>
        <EditFile
          fileAbsolutePath={fileAbsolutePath}
          editBaseUrl={editBaseUrl}
        />
        <h1>{title}</h1>
        {children}
      </div>
    );
  } else {
    const {
      html,
      fileAbsolutePath,
      frontmatter: { title, content },
    } = doc;
    return (
      <div>
        <EditFile
          fileAbsolutePath={fileAbsolutePath}
          externalContent={content}
          editBaseUrl={editBaseUrl}
        />
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: content
              ? content.childMarkdownRemark.html.split("\n").slice(1).join("\n")
              : html,
          }}
        />
        {content && html !== "" && (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        )}
      </div>
    );
  }
};

export const pageQuery = graphql`
  query ($templatePath: String!) {
    site: site {
      siteMetadata {
        title
        editBaseUrl
      }
    }
    config: allConfluenzaYaml(filter: { tag: { ne: null } }) {
      nodes {
        tag
        title
      }
    }
    doc: markdownRemark(frontmatter: { path: { eq: $templatePath } }) {
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
    mdx: mdx(frontmatter: { path: { eq: $templatePath } }) {
      body
      frontmatter {
        title
      }
      internal {
        contentFilePath
      }
    }
  }
`;

export const Head = ({ data }) => {
  const { doc, mdx } = data;
  return (
    <>
      <title>{mdx ? mdx.frontmatter.title : doc.frontmatter.title}</title>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=1.0'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap'
        rel='stylesheet'
      />
    </>
  );
};

export default Template;
