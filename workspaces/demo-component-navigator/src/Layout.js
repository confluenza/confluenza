import React from 'react'

import { DocumentationLayout } from '@confluenza/component-navigator-react'
import { withPrefix } from './withPrefix'

const Layout = ({ children, location, data }) => {
  return (
    <DocumentationLayout location={location} data={data} pathPrefix={withPrefix()}>
      {children}
    </DocumentationLayout>
  )
}

export { Layout }
