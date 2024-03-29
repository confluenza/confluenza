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
  width: 'calc(100% - 1rem)',
  '@media (min-width: 800px)': {
    position: 'fixed',
    width: 'calc(100% - 1rem)',
    top: 0,
    left: 0,
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
        <LogoImg
          alt='header logo'
          src={getImage(data, 'header-logo')}
          width='40px'
        />
        <LogoText>Confluenza</LogoText>
      </Logo>
      <Menu>
        <MenuLinkExternal
          styles={{ color: 'white' }}
          href='https://github.com/confluenza/confluenza'
          target='_blank'
          // see https://mathiasbynens.github.io/rel-noopener
          rel='noopener noreferrer'
        >
          Github
        </MenuLinkExternal>
        <MenuLinkExternal
          styles={{ color: 'white' }}
          href='https://twitter.com/confluenza1'
          target='_blank'
          rel='noopener noreferrer'
        >
          Twitter
        </MenuLinkExternal>
        {/* <MenuLinkExternal
          styles={{ color: 'white' }}
          href='http://marcinczenko.github.io'
          target='_blank'
          rel='noopener noreferrer'
        >Blog
        </MenuLinkExternal> */}
      </Menu>
    </Wrapper>
  </HyperWrapper>
)

export { Header }
