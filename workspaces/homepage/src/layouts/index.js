import { React } from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import { ConfluenzaDocumentationLayout } from './ConfluenzaDocumentationLayout'

const Wrapper = styled.div({
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  backgroundColor: 'black'
})

const Layout = ({ location, children }) => {
  if (location.pathname === '' || location.pathname === '/') {
    return (
      <Wrapper>
        <Global styles={{
          'html,body': {
            backgroundColor: 'black',
            margin: 0,
            padding: 0,
            boxSizing: 'border-box'
          }
        }}
        />
        {children}
      </Wrapper>
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
