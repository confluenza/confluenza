import React from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/react'

const Wrapper = styled.div({
  padding: '25px'
})

const Home = ({ children }) => (
  <Wrapper>
    <Global styles={{
      'html,body': {
        backgroundColor: 'white',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      }
    }}
    />
    {children}
  </Wrapper>
)

export default Home
