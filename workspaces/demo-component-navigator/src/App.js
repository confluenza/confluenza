import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Global } from '@emotion/react'
import { Helmet } from 'react-helmet'

import { Layout } from './Layout'

import { globalStyles } from './globalStyles'
import { navigationData } from './navigationData'

const Group1 = () => <div>Group1</div>
const Group1Heading1 = () => <div>Group1Heading1</div>
const Group1Heading2 = () => <div>Group1Heading2</div>
const Group2 = () => <div>Group2</div>
const Group3 = () => <div>Group3</div>
const Group3Heading1 = () => <div>Group3Heading1</div>
const Group3Heading2 = () => <div>Group3Heading2</div>

const App = () => {
  const location = useLocation()
  return (
    <div>
      <Global styles={globalStyles} />
      <Helmet>
        <title>{navigationData.site.siteMetadata.title}</title>
        <link href='https://fonts.googleapis.com/css?family=Roboto+Mono:100,100i,300,300i,400,400i,500,500i&display=swap' rel='stylesheet' />
      </Helmet>

      <Layout location={location} data={navigationData}>
        <Routes>
          <Route path='/' element={<Group1 />} />
          <Route path='/heading1' element={<Group1Heading1 />} />
          <Route path='/heading2' element={<Group1Heading2 />} />
          <Route path='/group-2' element={<Group2 />} />
          <Route path='/group-3' element={<Group3 />} />
          <Route path='/group-3/heading1' element={<Group3Heading1 />} />
          <Route path='/group-3/heading2' element={<Group3Heading2 />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
