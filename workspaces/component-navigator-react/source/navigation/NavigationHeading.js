import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { useMatch } from 'react-router-dom'

import { NavigationLink } from './NavigationLink'

const Li = styled.li({
  '&:last-child': {
    marginBottom: 0
  }
})

const NavigationHeading = ({ path, value, index }) => {
  const [cln, setCln] = useState('')
  const linkRef = useRef('')

  const match = useMatch(path)

  useEffect(() => {
    setCln(linkRef.current.className.replace(/\w*active\w*/, ''))
  }, [])

  return (
    <Li key={index}>
      <NavigationLink
        to={path}
        ref={linkRef}
        className={match ? `${cln} active` : cln}
      >
        {value}
      </NavigationLink>
    </Li>
  )
}

export { NavigationHeading }
