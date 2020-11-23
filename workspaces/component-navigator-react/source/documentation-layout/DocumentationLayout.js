import Media from 'react-media'

import { DocumentationLayoutSmall } from './DocumentationLayoutSmall'
import { DocumentationLayoutMedium } from './DocumentationLayoutMedium'
import { DocumentationLayoutWide } from './DocumentationLayoutWide'
import { PathPrefixContext } from './PathPrefixContext'

const DocumentationLayout = ({ children, location, data, pathPrefix = '/' }) => {
  return (
    <PathPrefixContext.Provider value={pathPrefix}>
      <Media query='(min-width: 1100px)'>
        {matches =>
          matches
            ? (
              <DocumentationLayoutWide location={location} data={data}>
                {children}
              </DocumentationLayoutWide>
              )
            : (
              <Media query='(min-width: 800px)'>
                {matches =>
                  matches
                    ? (
                      <DocumentationLayoutMedium location={location} data={data}>
                        {children}
                      </DocumentationLayoutMedium>
                      )
                    : (
                      <DocumentationLayoutSmall location={location} data={data}>
                        {children}
                      </DocumentationLayoutSmall>
                      )}
              </Media>
              )}
      </Media>
    </PathPrefixContext.Provider>
  )
}

export { DocumentationLayout }
