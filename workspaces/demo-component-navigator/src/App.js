import React from 'react'
import { Router, Location } from '@reach/router'
import { Global } from '@emotion/react'
import { Helmet } from 'react-helmet'

import { Layout } from './Layout'

import { globalStyles } from './globalStyles'
import { navigationData } from './navigationData'
import { withPrefix } from './withPrefix'

const Group1 = () => <div>Group1</div>
const Group1Heading1 = () => <div>Group1Heading1</div>
const Group1Heading2 = () => <div>Group1Heading2</div>
const Group2 = () => <div>Group2</div>
const Group2Heading1 = () => <div>Group2Heading1</div>
const Group2Heading2 = () => <div>Group2Heading2</div>
const Group3 = () => <div>Group3</div>
const Group3Heading1 = () => <div>Group3Heading1</div>
const Group3Heading2 = () => <div>Group3Heading2</div>

const App = () => {
  return (
    <div>
      <Global styles={globalStyles} />
      <Helmet>
        <title>{navigationData.site.siteMetadata.title}</title>
        <link href='https://fonts.googleapis.com/css?family=Roboto+Mono:100,100i,300,300i,400,400i,500,500i&display=swap' rel='stylesheet' />
      </Helmet>

      <Location>
        {({ location }) => (
          <Layout location={location} data={navigationData}>
            <Router basepath={withPrefix()}>
              <Group1 path='/' />
              <Group1Heading1 path='/heading1' />
              <Group1Heading2 path='/heading2' />
              <Group2 path='/group-2' />
              <Group2Heading1 path='/group-2/heading1' />
              <Group2Heading2 path='/group-2/heading2' />
              <Group3 path='/group-3' />
              <Group3Heading1 path='/group-3/heading1' />
              <Group3Heading2 path='/group-3/heading2' />
            </Router>
          </Layout>
        )}
      </Location>
    </div>
  )
}

export default App
