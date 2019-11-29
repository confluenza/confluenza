import React from 'react'
import styled from '@emotion/styled'

import { Collapsable } from '../Collapsable'
import { NavigationLink } from '../NavigationLink'
import { normalizeLocationPath } from '../../documentation-layout/normalizeLocationPath'
import { PathPrefixContext, withPrefix } from '../../documentation-layout/PathPrefixContext'

const Wrapper = styled.div({
  position: 'relative',
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center'
})

class MidLevelNavigationItem extends React.Component {
  static contextType = PathPrefixContext

  constructor (props) {
    super(props)

    this.triggerRef = React.createRef()
  }

  getActiveProps = (currentLocation, href, pathPrefix) => {
    const normalizedHref = href.replace(/\/$/, '')
    const { path: normalizedPathName } = normalizeLocationPath(currentLocation, pathPrefix)
    if (`${normalizedPathName}` === normalizedHref) {
      return 'active'
    }
    return ''
  }

  handleOnChange = (delta, collpasableElement) => {
    this.props.onChange(delta, collpasableElement, this.triggerRef.current)
  }

  render () {
    const { title, path, location } = this.props
    const pathPrefix = this.context

    return (
      <Collapsable
        id={`collapsable${this.props.path}${this.props.title}`} onChange={this.handleOnChange} trigger={(unfold, folded) => (
          <Wrapper onClick={() => unfold()}>
            <NavigationLink
              ref={this.triggerRef}
              to={withPrefix(path, pathPrefix)}
              className={this.getActiveProps(location, path, pathPrefix)}
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
