import React from 'react'
import styled from '@emotion/styled'
import { getImage } from 'src/components/assets'

const SocialIconsRow = styled.div({
  width: '140px',
  display: 'flex',
  flexFlow: 'row nowrap',
  // justifyContent: 'space-between',
  justifyContent: 'flex-start', // @TMP
  alignItems: 'center',
  marginBottom: '30px'
})

const SocialIcon = ({ imageUrl, ...props }) => (
  <div
    css={{
      margin: 0,
      marginRight: '15px', // @TMP
      width: '32px',
      height: '32px',
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'auto 100%',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }} {...props}
  />
)

const SocialIcons = ({ data }) => (
  <SocialIconsRow css={{
    '@media (min-width: 568px)': {
      alignSelf: 'flex-start'
    }
  }}
  >
    <a aria-label='twitter' href='https://twitter.com/confluenza1'><SocialIcon imageUrl={getImage(data, 'twitter')} /></a>
    {/* <a href='https://twitter.com/identity_box'><SocialIcon imageUrl={getImage(data, 'Youtube')} css={{ width: '46px' }} /></a> */}
    <a aria-label='github' href='https://github.com/confluenza/confluenza'><SocialIcon imageUrl={getImage(data, 'github')} /></a>
  </SocialIconsRow>
)

export { SocialIcons }
