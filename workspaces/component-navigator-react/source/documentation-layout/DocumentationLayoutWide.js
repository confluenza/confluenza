import React from 'react'
import { DocumentationLayoutGrid, SidebarGridItem, ContentGridItem } from './DocumentationLayoutGrid'
import { Navigation } from '../navigation'
import { SiteTitle } from './SiteTitle'
import { PoweredByConfluenza } from './PoweredByConfluenza'

import { FixedNavigation } from './FixedNavigation'

const DocumentationLayoutWide = ({ children, location, data }) => {
  const { site: { siteMetadata: { title } }, config: { nodes: confluenzaConfig }, navigation: { docs } } = data
  return (
    <DocumentationLayoutGrid>
      <SidebarGridItem>
        <FixedNavigation>
          <SiteTitle title={title} />
          <Navigation
            docs={docs}
            location={location}
            confluenzaConfig={confluenzaConfig}
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
