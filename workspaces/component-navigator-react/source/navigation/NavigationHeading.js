import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { useMatch, useLocation } from 'react-router-dom'

import { NavigationLink } from './NavigationLink'

const Li = styled.li({
  '&:last-child': {
    marginBottom: 0
  }
})

const NavigationHeading = ({ path, value, index }) => {
  const [cln, setCln] = useState('')
  const ref = useRef('')
  const location = useLocation()
  console.log('location=', location)
  // const href = useHref()

  console.log('path[]=', path)

  const match = useMatch(path)

  console.log('match=', match)

  // const getActiveProps = (currentLocation, href) => {
  //   this.location = currentLocation.pathname.replace(/\/$/, '')
  //   this.hash = currentLocation.hash
  //   this.href = href
  //   if (this.linkClassName) {
  //     if (`${this.location}${this.hash}` === this.href) {
  //       return { className: `${this.linkClassName} active` }
  //     } else {
  //       return { className: this.linkClassName }
  //     }
  //   }
  //   return null
  // }

  useEffect(() => {
    setCln(ref.current.className.replace(/\w*active\w*/, ''))
  }, [])

  // const recordLinkNode = node => {
  //   const linkClassName = node && node.className
  //   console.log('linkClassName=', linkClassName)
  //   // setCln(linkClassName)
  //   // const currentLocation = location.pathname.replace(/\/$/, '')
  //   // const hash = location.hash
  //   // if (`${currentLocation}${hash}` === href) {
  //   //   setCln(`${linkClassName} active`)
  //   // } else {
  //   //   setCln(linkClassName)
  //   // }
  // }

  return (
    <Li key={index}>
      <NavigationLink
        to={path}
        ref={ref}
        className={match ? `${cln} active` : cln}
      >
        {value}
      </NavigationLink>
    </Li>
  )
}

export { NavigationHeading }
