import React from 'react'
import styled from '@emotion/styled'
import { getImage } from 'src/components/assets'

import { MenuLinkExternal } from 'src/components/ui-blocks'

const Logo = styled.div({
  display: 'flex',
  flexFlow: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '20px'
})

const LogoImg = styled.img({
  margin: 0
})

const LogoText = styled.p({
  display: 'inline-block',
  margin: 0,
  color: 'white',
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '10pt',
  marginLeft: '20px',
  whiteSpace: 'nowrap'
})

const Menu = styled.div({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-end',
  alignItems: 'center'
})

const HyperWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  '@media (min-width: 800px)': {
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 0
  },
  backgroundColor: 'black'
})

const Wrapper = styled.div({
  width: '100%',
  maxWidth: '1200px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  backgroundColor: 'black',
  opacity: '1.0'
})

const Header = ({ data }) => (
  <HyperWrapper>
    <Wrapper>
      <Logo>
        <LogoImg alt='header logo' src={getImage(data, 'header-logo')} width='40px' />
        <LogoText>Confluenza</LogoText>
      </Logo>
      <Menu>
        <MenuLinkExternal
          styles={{ color: 'white' }}
          href='https://github.com/marcinczenko/identity-box'
          target='_blank'
        >Github
        </MenuLinkExternal>
        <MenuLinkExternal
          styles={{ color: 'white' }}
          href='https://twitter.com/identity_box'
          target='_blank'
        >Twitter
        </MenuLinkExternal>
        {/* <MenuLinkExternal
          styles={{ color: 'white' }}
          href='http://marcinczenko.github.io'
          target='_blank'
        >Blog
        </MenuLinkExternal> */}
      </Menu>
    </Wrapper>
  </HyperWrapper>
)

export { Header }
