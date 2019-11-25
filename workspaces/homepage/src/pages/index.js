import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Header } from 'src/components/header'
import { IntroPanel } from 'src/components/intro-panel'
import { BodyFrame } from 'src/components/ui-blocks'
import { Footer } from 'src/content/footer'

import { Box1, Box2, Box3 } from 'src/content'
import { navigate } from '@reach/router'

const useUnusualReloader = (location, onReady) => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setReady(true)
      // window.history.back()
      onReady && onReady()
    }, 0)
    // navigate(location.pathname)
    // eslint-disable-next-line
  }, [])

  return ready
}

const Home = ({ data, location }) => {
  console.log('                CONFLUENZA \n\n       flexible markdown documentation\n ')

  // const [opacity, setOpacity] = useState(1)

  // const onReady = () => {
  //   setTimeout(() => {
  //     setOpacity(1.0)
  //   }, 0)
  // }
  // const pageReady = useUnusualReloader(location, onReady)

  // if (!pageReady) {
  //   return null
  // }

  return (
    <>
      <Helmet title='Confluenza'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
        <link href='https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap' rel='stylesheet' />
      </Helmet>
      <Header data={data} />
      <BodyFrame>
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

export default Home
