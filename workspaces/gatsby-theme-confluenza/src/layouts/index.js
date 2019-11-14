import { React } from 'react'
import { Global } from '@emotion/core'
import { ConfluenzaDocumentationLayout } from './ConfluenzaDocumentationLayout'

import Home from '../components/home'

const Layout = ({ location, children }) => {
  if (location.pathname === '' || location.pathname === '/') {
    return (
      <Home>
        {children}
      </Home>
    )
  } else {
    return (
      <div>
        <Global styles={{
          'html,body': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            '@media (max-width: 768px)': {
              fontSize: '112%'
            }
          }
        }}
        />
        <ConfluenzaDocumentationLayout location={location}>{children}</ConfluenzaDocumentationLayout>
      </div>
    )
  }
}

export default Layout
