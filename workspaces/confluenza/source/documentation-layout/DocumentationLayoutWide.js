import React from 'react'
import { DocumentationLayoutGrid, SidebarGridItem, ContentGridItem } from './DocumentationLayoutGrid'
import { Navigation } from '../navigation'
import { SiteTitle } from './SiteTitle'
import { PoweredByConfluenza } from './PoweredByConfluenza'

import { FixedNavigation } from './FixedNavigation'

const DocumentationLayoutWide = ({ children, location, data, onStateChanged, deltas, rhythm }) => {
  const { site: { siteMetadata: { title } }, config: { nodes: confluenzaConfig }, navigation: { docs } } = data
  return (
    <DocumentationLayoutGrid rhythm={rhythm}>
      <SidebarGridItem>
        <FixedNavigation rhythm={rhythm}>
          <SiteTitle title={title} />
          <Navigation
            docs={docs}
            location={location}
            confluenzaConfig={confluenzaConfig}
            onStateChanged={onStateChanged}
            deltas={deltas}
          />
          <PoweredByConfluenza />
        </FixedNavigation>
      </SidebarGridItem>
      <ContentGridItem>
        {children}
      </ContentGridItem>
    </DocumentationLayoutGrid>
  )
}

export { DocumentationLayoutWide }
