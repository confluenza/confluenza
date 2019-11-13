import React from 'react'
import { DocumentationLayoutGrid, SidebarGridItem, ContentGridItem } from './DocumentationLayoutGrid'
import { Navigation } from '../navigation'
import { SiteTitle } from './SiteTitle'

import { FixedNavigation } from './FixedNavigation'

const DocumentationLayoutWide = ({ children, location, data, onStateChanged, deltas, rhythm }) => {
  const { site: { siteMetadata: { title, navigationGroups } }, navigation: { docs } } = data
  return (
    <DocumentationLayoutGrid rhythm={rhythm}>
      <SidebarGridItem>
        <FixedNavigation rhythm={rhythm}>
          <SiteTitle title={title} />
          <Navigation
            docs={docs}
            location={location}
            navigationGroups={navigationGroups}
            onStateChanged={onStateChanged}
            deltas={deltas}
          />
        </FixedNavigation>
      </SidebarGridItem>
      <ContentGridItem>
        { children }
      </ContentGridItem>
    </DocumentationLayoutGrid>
  )
}

export { DocumentationLayoutWide }
