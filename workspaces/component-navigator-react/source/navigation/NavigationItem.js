import React from 'react'
import styled from '@emotion/styled'

import { MidLevelNavigationItem } from './mid-level-navigation-item'
import { NavigationHeading } from './NavigationHeading'

const List = styled.ul({
  display: 'block',
  paddingLeft: 0,
  paddingRight: 0,
  listStyle: 'none',
  paddingTop: '0.5rem',
  paddingBottom: 0,
  margin: 0
})

class NavigationItem extends React.Component {
  renderNavigationHeading = (heading, index) => (
    <NavigationHeading key={index} {...heading} index={index} />
  )

  render() {
    const {
      node: {
        headings,
        frontmatter: { title, path }
      },
      onChange,
      location
    } = this.props

    return (
      <li key={path}>
        <MidLevelNavigationItem
          location={location}
          path={path}
          title={title}
          headings={headings}
          onChange={onChange}
        >
          {headings && headings.length > 0 && (
            <List>
              {headings.map((heading, index) =>
                this.renderNavigationHeading(heading, index, path)
              )}
            </List>
          )}
        </MidLevelNavigationItem>
      </li>
    )
  }
}

export { NavigationItem }
