import { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'

import { Navigation } from '../navigation'
import { MenuButton } from '../navigation/MenuButton'
import { SiteTitle } from './SiteTitle'
import { PoweredByConfluenza } from './PoweredByConfluenza'

const MobileNavigationWrapper = styled.div(({ menuActive, clientWidth }) => ({
  position: 'fixed',
  zIndex: 20,
  height: 'calc(100vh - 3rem)',
  minWidth: '300px',
  maxWidth: '300px',
  '@media (max-width: 568px)': {
    minWidth: '100vw',
    maxWidth: '100vw',
    height: '100vh'
  },
  backgroundColor: 'rgba(247, 247, 247, 0.9)',
  WebkitOverflowScrolling: 'touch',
  '::-webkit-scrollbar': {
    width: '6px',
    height: '6px'
  },
  '::-webkit-scrollbar-thumb': {
    background: '#ccc'
  },
  top: 0,
  right: clientWidth,
  display: 'flex',
  flexFlow: 'column nowrap',
  transition: 'transform 0.2s ease-in-out 0s',
  transform: menuActive ? 'translate(100%, 0)' : 'none'
}))

const MobileNavigation = ({
  menuActive,
  title,
  docs,
  location,
  onStateChanged,
  deltas,
  confluenzaConfig,
  clientWidth
}) => {
  return (
    <MobileNavigationWrapper menuActive={menuActive} clientWidth={clientWidth}>
      <SiteTitle title={title} />
      <Navigation
        docs={docs}
        location={location}
        confluenzaConfig={confluenzaConfig}
        onStateChanged={onStateChanged}
        deltas={deltas}
      />
      <PoweredByConfluenza />
    </MobileNavigationWrapper>
  )
}

const DocumentationLayoutMedium = ({
  children,
  location,
  data,
  onStateChanged,
  deltas
}) => {
  const [menuActive, setMenuActive] = useState(false)
  const [prevLocation, setPrevLocation] = useState()
  const divRef = useRef(null)
  const [clientWidth, setClientWidth] = useState('100vw')

  const showMenu = () => {
    setMenuActive((cur) => !cur)
  }

  const pageChanged = () => {
    // it is not used currently, but nice to have one!
    onStateChanged?.()
  }

  useEffect(() => {
    if (!menuActive) {
      setClientWidth(`${divRef.current.clientWidth}px`)
    }
  }, [menuActive])

  useEffect(() => {
    const onResize = () => {
      setClientWidth(`${divRef.current.clientWidth}px`)
    }
    window.addEventListener('resize', onResize)
    setClientWidth(`${divRef.current.clientWidth}px`)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    const currentPathName = location.pathname.replace(/\/$/, '')
    const currentHash = location.hash
    const currentLocation = `${currentPathName}${currentHash}`
    if (prevLocation !== currentLocation) {
      setPrevLocation(currentLocation)
      setMenuActive(false)
    }
  }, [location, prevLocation])

  const {
    site: {
      siteMetadata: { title }
    },
    navigation: { docs },
    config: { nodes: confluenzaConfig },
    menuButton
  } = data
  return (
    <div
      ref={divRef}
      style={{
        padding: '1rem'
      }}
    >
      <MobileNavigation
        menuActive={menuActive}
        title={title}
        docs={docs}
        location={location}
        onStateChanged={pageChanged}
        deltas={deltas}
        confluenzaConfig={confluenzaConfig}
        clientWidth={clientWidth}
      />
      <MenuButton
        onClick={showMenu}
        backgroundImage={menuButton && menuButton.publicURL}
        css={{
          position: 'fixed',
          zIndex: 20,
          bottom: '30px',
          right: '30px',
          backgroundColor: menuActive ? '#F486CA' : 'white'
        }}
      />
      {children}
    </div>
  )
}

export { DocumentationLayoutMedium }
