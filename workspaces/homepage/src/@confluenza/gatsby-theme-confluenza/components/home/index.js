// import React from "react";
import styled from '@emotion/styled'
import { Global } from '@emotion/react'

const Wrapper = styled.div({
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  backgroundColor: 'black',
  boxSizing: 'border-box',
  margin: 0,
  padding: 0
})

const Home = ({ children }) => (
  <Wrapper>
    <Global
      styles={{
        body: {
          backgroundColor: 'black',
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
