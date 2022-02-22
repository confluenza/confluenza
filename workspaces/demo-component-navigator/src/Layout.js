import React from 'react'

import { DocumentationLayout } from '@confluenza/component-navigator-react'

const Layout = ({ children, location, data }) => {
  return (
    <DocumentationLayout location={location} data={data}>
      {children}
    </DocumentationLayout>
  )
}

export { Layout }
