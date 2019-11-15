import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div({
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh'
})

const Text = styled.p({
  textAlign: 'center'
})

const NotFound404 = () => (
  <Wrapper>
    <h1>Not Found :(</h1>
    <Text>This is the end of the Internet. You need to restart the Internet
or just try another link ;).</Text>
  </Wrapper>
)

export default NotFound404
