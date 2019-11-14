# @confluenza/confluenza

`@confluenza/confluenza` conveniently adds browsable markdown documentation capability
to your gatsby site.

This package exposes only one React component: `DocumentationLayout`. This component is used
by the `@confluenza/gatsby-theme-confluenza` theme in order to render navigation menu (see [workspaces/gatsby-theme-confluenza/src/layouts/ConfluenzaDocumentationLayout.js](https://github.com/confluenza/confluenza/blob/master/workspaces/gatsby-theme-confluenza/src/layouts/ConfluenzaDocumentationLayout.js)):

```javascript
import { DocumentationLayout } from '@confluenza/confluenza'

const confluenzaQuery = graphql`...`

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
```
