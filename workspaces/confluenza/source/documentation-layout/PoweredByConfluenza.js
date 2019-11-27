import { React } from 'react'
import styled from '@emotion/styled'
import ConfluenzaLogoImage from './ConfluenzaLogoImage.png'

const iOS = () => {
  if (typeof window !== 'undefined') {
    return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)
  }
}

const Wrapper = styled.div({
  width: '100%',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: iOS() ? '70px' : 0,
  marginTop: '20px',
  '@media (orientation: landscape)': {
    marginBottom: 0
  }
})

const ConfluenzaLogo = styled.div({
  width: '36px',
  height: '36px',
  backgroundImage: `url(${ConfluenzaLogoImage})`,
  backgroundSize: 'auto 100%',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat'
})

const ConfluenzaText = styled.div({
  color: 'black',
  fontFamily: 'Roboto Mono, monospace',
  fontWeight: '300',
  fontSize: '0.5rem',
  textAlign: 'center',
  verticalAlign: 'middle',
  padding: '5px'
})

const PoweredByConfluenza = ({ title }) => (
  // see https://mathiasbynens.github.io/rel-noopener
  <a href='https://confluenza.online' target='_blank' rel='noopener noreferrer'>
    <Wrapper>
      <ConfluenzaLogo />
      <ConfluenzaText>
        Powered by Confluenza
      </ConfluenzaText>
    </Wrapper>
  </a>
)

export { PoweredByConfluenza }
