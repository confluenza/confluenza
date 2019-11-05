import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import Media from 'react-media'

import { getImage } from 'src/components/assets'

const Panel = styled.div({
  width: '100%',
  backgroundColor: 'black',
  height: 'calc(100vh - 114px)',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'flex-start',
  marginTop: '40px',
  alignItems: 'center',
  '@media (min-width: 800px)': {
    height: 'calc(100vh - 80px)',
    marginTop: '80px',
    flexFlow: 'row',
    justifyContent: 'space-around'
  }
})

const Title = styled.h1({
  marginBottom: '30px',
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '18pt',
  '@media (min-width: 500px)': {
    fontSize: '32pt',
    marginBottom: '50px'
  },
  '@media (min-width: 800px)': {
    marginBottom: '10px',
    fontSize: '48pt'
  },
  '@media (min-width: 1000px)': {
    marginBottom: '10px',
    fontSize: '56pt'
  },
  fontWeight: '400',
  color: '#568a80',
  textAlign: 'center'
})

const TitleContainer = styled.div({
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center'
})

const Subtitle = styled.h2({
  fontFamily: 'Roboto Mono, monospace',
  fontWeight: 400,
  lineHeight: '1.4',
  fontSize: '12pt',
  margin: '20px',
  '@media (min-width: 500px)': {
    margin: '50px',
    fontSize: '20pt'
  },
  '@media (min-width: 800px)': {
    margin: '5px 0 20px 0',
    fontSize: '24pt'
  },
  color: '#f57344',
  textAlign: 'center'
})

const Img = styled.img({
  margin: 0,
  width: '50%',
  '@media (min-width: 500px)': {
    width: '60%'
  },
  '@media (min-width: 800px)': {
    width: '400px'
  }
})

const IntroPanel = ({ data }) => {
  const panel = useRef(null)

  const updateSize = () => {
    const width = window.innerWidth
    const height = window.innerHeight

    console.log(width, height)

    if (width > 370) {
      panel.current.style.height = 'calc(100vh - 80px)'
      if (width > 500 && width < 800 && height < 768) {
        panel.current.style.height = '768px'
      }
    } else {
      if (height < 568) {
        panel.current.style.height = '568px'
      } else {
        panel.current.style.height = 'calc(100vh - 154px)'
      }
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  })

  return (
    <Panel ref={panel}>
      <Media query='(max-width: 799px)' render={() => (
        <Title>Confluenza</Title>
      )}
      />
      <Img alt='Intro' src={getImage(data, 'intro-panel')} />
      <Media query='(min-width: 800px)' render={() => (
        <TitleContainer>
          <Title>Confluenza</Title>
          <Subtitle>flexible markdown documentation</Subtitle>
        </TitleContainer>
      )}
      />
      <Media query='(max-width: 799px)' render={() => (
        <Subtitle>flexible markdown documentation</Subtitle>
      )}
      />
    </Panel>
  )
}

export { IntroPanel }
