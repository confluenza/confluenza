import React, { useState, useEffect } from 'react'

import { Navigation } from '../navigation'
import { MenuButton } from '../navigation/MenuButton'
import { SiteTitle } from './SiteTitle'
import { PoweredByConfluenza } from './PoweredByConfluenza'

const MobileNavigation = ({
  menuActive,
  title,
  docs,
  location,
  onStateChanged,
  deltas,
  confluenzaConfig,
  rhythm
}) => {
  return (
    <div css={{
      position: 'fixed',
      zIndex: 20,
      height: `calc(100vh - ${rhythm(2)})`,
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
      right: '100vw',
      // height: '100vh',
      display: 'block',
      // justifyContent: 'center',
      // alignItems: 'center',
      // background: 'white',
      transition: 'transform 0.2s ease-in-out 0s',
      transform: menuActive ? 'translate(100%, 0)' : 'none'
    }}
    >
      <SiteTitle title={title} />
      <Navigation
        docs={docs}
        location={location}
        confluenzaConfig={confluenzaConfig}
        onStateChanged={onStateChanged}
        deltas={deltas}
      />
      <PoweredByConfluenza />
    </div>
  )
}

const DocumentationLayoutMedium = ({ children, location, data, onStateChanged, deltas, rhythm }) => {
  const [menuActive, setMenuActive] = useState(false)
  const [prevLocation, setPrevLocation] = useState()

  const showMenu = () => {
    setMenuActive(!menuActive)
  }

  useEffect(() => {
    const currentPathName = location.pathname.replace(/\/$/, '')
    const currentHash = location.hash
    const currentLocation = `${currentPathName}${currentHash}`
    if (prevLocation !== currentLocation) {
      setPrevLocation(currentLocation)
      setMenuActive(false)
    }
  }, [location])

  const { site: { siteMetadata: { title } }, navigation: { docs }, config: { nodes: confluenzaConfig }, menuButton } = data
  return (
    <div css={{
      padding: '1rem'
    }}
    >
      <MobileNavigation
        menuActive={menuActive}
        title={title}
        docs={docs}
        location={location}
        onStateChanged={onStateChanged}
        deltas={deltas}
        confluenzaConfig={confluenzaConfig}
        rhythm={rhythm}
      />
      <MenuButton
        onClick={showMenu} backgroundImage={menuButton && menuButton.publicURL} css={{
          position: 'fixed',
          zIndex: 20,
          bottom: '30px',
          right: '30px',
          backgroundColor: menuActive ? '#F486CA' : 'white'
        // marginBottom: '10px'
        }}
      />
      {children}
    </div>
  )
}

export { DocumentationLayoutMedium }
