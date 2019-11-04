import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'

import { getImage } from 'src/components/assets'

const Panel = styled.div({
  width: '100%',
  backgroundColor: 'black',
  height: 'calc(100vh - 80px)',
  marginTop: '80px',
  display: 'flex',
  flexFlow: 'row',
  alignItems: 'center',
  justifyContent: 'space-around'
})

const Title = styled.h1({
  marginBottom: '10px',
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '56pt',
  '@media (max-width: 568px)': {
    fontSize: '22pt'
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
  margin: '5px 0 20px 0',
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '20pt',
  fontWeight: 400,
  lineHeight: '1.4',
  '@media (max-width: 568px)': {
    fontSize: '12pt',
    fontWeight: 400,
    margin: '30px'
  },
  color: '#f57344',
  textAlign: 'center'
})

const IntroPanel = ({ data }) => {
  const panel = useRef(null)

  const updateSize = () => {
    const height = window.innerHeight
    if (height < 746) {
      // panel.current.style.height = '656px'
      panel.current.style.height = 'calc(100vh - 80px)'
    } else {
      panel.current.style.height = 'calc(100vh - 80px)'
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  })

  return (
    <Panel ref={panel}>
      <img alt='Intro' width='400px' css={{ margin: 0 }} src={getImage(data, 'intro-panel')} />
      <TitleContainer>
        <Title>Confluenza</Title>
        <Subtitle>flexible markdown documentation</Subtitle>
      </TitleContainer>
    </Panel>
  )
}

export { IntroPanel }
