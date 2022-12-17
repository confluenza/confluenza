import React from 'react'
import styled from '@emotion/styled'

import { Collapsable } from '../Collapsable'
import { NavigationLink } from '../NavigationLink'
import { normalizeLocationPath } from '../../documentation-layout/normalizeLocationPath'

const Wrapper = styled.div({
  position: 'relative',
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center'
})

class MidLevelNavigationItem extends React.Component {
  constructor(props) {
    super(props)

    this.triggerRef = React.createRef()
  }

  getActiveProps = (currentLocation, path, headings) => {
    const normalizedPath = path.replace(/\/$/, '')
    const { path: normalizedPathName } = normalizeLocationPath(currentLocation)
    // this part (inside the 'if') is responsible for making midlevel item bold
    // when one of the children is rendered
    if (headings) {
      const headingsPaths = headings.map((h) => h.path)
      if (
        `${normalizedPathName}` === normalizedPath ||
        headingsPaths.includes(normalizedPathName)
      ) {
        return 'active'
      }
      return ''
    }
    if (`${normalizedPathName}` === normalizedPath) {
      return 'active'
    }
    return ''
  }

  handleOnChange = (delta, collpasableElement) => {
    this.props.onChange(delta, collpasableElement, this.triggerRef.current)
  }

  render() {
    const { title, path, location, headings } = this.props

    return (
      <Collapsable
        id={`collapsable${this.props.path}${this.props.title}`}
        onChange={this.handleOnChange}
        trigger={(unfold) => (
          <Wrapper onClick={() => unfold()}>
            <NavigationLink
              ref={this.triggerRef}
              to={path}
              className={this.getActiveProps(location, path, headings)}
            >
              {title}
            </NavigationLink>
          </Wrapper>
        )}
      >
        <div style={{ marginLeft: '1rem', width: 'calc(100% - 1rem)' }}>
          {this.props.children}
        </div>
      </Collapsable>
    )
  }
}

export { MidLevelNavigationItem }
