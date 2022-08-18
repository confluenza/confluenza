import React, { useState, useEffect, useCallback } from 'react'
import { graphql } from 'gatsby'

import { Header } from 'src/components/header'
import { IntroPanel } from 'src/components/intro-panel'
import { BodyFrame } from 'src/components/ui-blocks'
import { Footer } from 'src/content/footer'

import { Box1, Box2, Box3 } from 'src/content'

const useUnusualReloader = (location, onReady) => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
    onReady && onReady()
  }, [onReady])

  return ready
}

const Home = ({ data, location }) => {
  console.log('                CONFLUENZA \n\n       flexible markdown documentation\n ')

  const onReady = useCallback(() => {
    setTimeout(() => {
      setVisibility('visible')
    }, 100)
  }, [])

  const pageReady = useUnusualReloader(location, onReady)

  const [visibility, setVisibility] = useState('hidden')

  if (!pageReady) {
    return null
  }

  return (
    <>
      <Header data={data} />
      <BodyFrame css={{ visibility }}>
        <IntroPanel data={data} />
        <Box1 />
        <Box2 data={data} />
        <Box3 data={data} />
        <Footer data={data} />
      </BodyFrame>
    </>
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativeDirectory: {regex: "/homepage/src/(images|assets/Confluenza-assets)/"}}) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`

export const Head = () => (
  <>
    <title>Confluenza</title>
    <meta name="description" content="Confluenza - flexible Markdown documentation browser" />
    <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
    <link href='https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap' rel='stylesheet' />
  </>
)

export default Home
