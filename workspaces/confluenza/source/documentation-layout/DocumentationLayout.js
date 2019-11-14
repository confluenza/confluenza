import React from 'react'
import Media from 'react-media'

import { useUnusualReloader } from './useUnusualReloader'

import { DocumentationLayoutSmall } from './DocumentationLayoutSmall'
import { DocumentationLayoutMedium } from './DocumentationLayoutMedium'
import { DocumentationLayoutWide } from './DocumentationLayoutWide'

const DocumentationLayout = ({ children, location, data, rhythm }) => {
  const pageReady = useUnusualReloader(location)
  if (!pageReady) {
    return null
  }
  return (
    <Media query='(min-width: 1100px)'>
      {matches =>
        matches ? (
          <DocumentationLayoutWide location={location} data={data} rhythm={rhythm}>
            { children }
          </DocumentationLayoutWide>
        ) : (
          <Media query='(min-width: 800px)'>
            {matches =>
              matches ? (
                <DocumentationLayoutMedium location={location} data={data} rhythm={rhythm}>
                  { children }
                </DocumentationLayoutMedium>
              ) : (
                <DocumentationLayoutSmall location={location} data={data} rhythm={rhythm}>
                  { children }
                </DocumentationLayoutSmall>
              )
            }
          </Media>
        )
      }
    </Media>
  )
}

export { DocumentationLayout }
