import React from 'react'
import styled from '@emotion/styled'

import { NavigationLink } from './NavigationLink'

const Li = styled.li({
  '&:last-child': {
    marginBottom: 0
  }
})

class NavigationHeading extends React.Component {
  state = {
    cln: ''
  }

  getActiveProps = (currentLocation, href) => {
    this.location = currentLocation.pathname.replace(/\/$/, '')
    this.hash = currentLocation.hash
    this.href = href
    if (this.linkClassName) {
      if (`${this.location}${this.hash}` === this.href) {
        return { className: `${this.linkClassName} active` }
      } else {
        return { className: this.linkClassName }
      }
    }
    return null
  }

  recordLinkNode = node => {
    this.linkClassName = node && node.className
    if (`${this.location}${this.hash}` === this.href) {
      this.setState({ cln: `${this.linkClassName} active` })
    } else {
      this.setState({ cln: this.linkClassName })
    }
  }

  render () {
    const { path, value, index } = this.props
    return (
      <Li key={index}>
        <NavigationLink
          to={path}
          ref={this.recordLinkNode}
          className={this.state.cln}
          getProps={({ location, href }) => this.getActiveProps(location, href)}
        >
          {value}
        </NavigationLink>
      </Li>
    )
  }
}

export { NavigationHeading }
