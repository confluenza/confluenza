import { useState, useEffect, useRef } from 'react'

import {
  DocumentationLayoutGrid,
  SidebarGridItem,
  ContentGridItem
} from './DocumentationLayoutGrid'
import { Navigation } from '../navigation'
import { MenuButton } from '../navigation/MenuButton'
import { SiteTitle } from './SiteTitle'
import { PoweredByConfluenza } from './PoweredByConfluenza'

import { FixedNavigation } from './FixedNavigation'

import { useScrollResoration } from './useScrollRestoration'
import { useMobileDocumentNavigator } from './useMobileDocumentNavigator'

const DocumentationLayoutSmall = ({
  children,
  location,
  data,
  onStateChanged,
  deltas,
  rhythm
}) => {
  const [menuActive, setMenuActive] = useState(false)
  const [position, setPosition] = useState('relative')
  const [transition, setTransition] = useState('none')
  const [animationSpan, setAnimationSpan] = useState(0)
  const animationDuration = 0.3
  const openingTimeout = useRef(undefined)
  const closingTimeout = useRef(undefined)

  const {
    recordScrollPosition,
    restoreScrollPosition,
    disableScrollRestoration
  } = useScrollResoration()

  const enableMenuAnimation = (duration, delay) => {
    setTransition(`all ${duration}s ease-in-out ${delay}s`)
    setAnimationSpan((duration + delay) * 1000)
  }

  const disableMenuAnimation = () => {
    setTransition('none')
  }

  const closeMenu = () => {
    setMenuActive(false)
    // we will be hiding menu - thus, we need to make sure that
    // document container is again scrollable before we see it
    setPosition('relative')
  }

  // toggleMenu is used to trigger opening menu, and one of
  // the two triggers to close it (the second closing trigger
  // is user selecting navigation item). Opening and closing
  // menu is finalized in the effect below that responds to
  // the menuActive change.
  const toggleMenu = () => {
    enableMenuAnimation(animationDuration, 0)
    if (menuActive) {
      clearTimeout(openingTimeout.current)
      closeMenu()
    } else {
      clearTimeout(closingTimeout.current)
      setMenuActive(true)
      // record scroll position so that we can restore it if needed
      recordScrollPosition()
    }
  }

  // This hook responds to the change of location: the user
  // selected a link in the navigation menu.
  useMobileDocumentNavigator(
    {
      onNewPathSelected: () => {
        closeMenu()
        disableScrollRestoration()
        enableMenuAnimation(animationDuration, 0.3)
      },
      location
    },
    [location]
  )

  useEffect(() => {
    if (menuActive) {
      // We do not want to change to 'position: fixed' immediately as
      // this may be visible and create unpleasant visual effect.
      // The timeout is about the same as the transition duration in CSS.
      openingTimeout.current = setTimeout(() => {
        setPosition('fixed')
        disableMenuAnimation()
      }, animationSpan)
    } else {
      // Restoring scroll position can only be effective
      // after position is set back to 'relative'
      // We have two cases: (1) closing menu is the explicit user
      // action (by pressing the "toggle menu" button) or (2) as
      // a result of changing location (user selected a new menu item).
      // In both cases we use the closeMenu function above to trigger
      // the closing process. We could not restore the scroll possition
      // right there as this would be too early - the changing from
      // 'position: fixed' to 'position: relative' needs to be effective
      // before we can change the scroll position.
      restoreScrollPosition()
      closingTimeout.current = setTimeout(() => {
        disableMenuAnimation()
      }, animationSpan)
    }
    // eslint-disable-next-line
  }, [menuActive])

  const {
    site: {
      siteMetadata: { title }
    },
    navigation: { docs },
    config: { nodes: confluenzaConfig },
    menuButton
  } = data
  return (
    <>
      <DocumentationLayoutGrid
        rhythm={rhythm}
        css={{
          position,
          height: '100vh',
          left: menuActive ? 0 : '-100vw',
          margin: 0,
          gridGap: 0,
          gridTemplateColumns: '100vw 100vw',
          transition
        }}
      >
        <SidebarGridItem>
          <FixedNavigation
            rhythm={rhythm}
            css={{
              left: menuActive ? '0' : '-100vw',
              minWidth: '100vw',
              maxWidth: '100vw',
              height: '100vh',
              transition
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
          </FixedNavigation>
        </SidebarGridItem>
        <ContentGridItem>{children}</ContentGridItem>
      </DocumentationLayoutGrid>
      <MenuButton
        onClick={toggleMenu}
        backgroundImage={menuButton && menuButton.publicURL}
        css={{
          position: 'fixed',
          zIndex: 20,
          bottom: '30px',
          right: '30px',
          backgroundColor: menuActive ? '#F486CA' : 'white'
        }}
      />
    </>
  )
}

export { DocumentationLayoutSmall }
