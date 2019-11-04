import React from 'react'
import styled from '@emotion/styled'
import Media from 'react-media'
import { getImage } from 'src/components/assets'
import { MenuLink } from 'src/components/ui-blocks'

import { FooterRow } from './FooterRow'
import { FooterMenu } from './FooterMenu'
import { FooterGraphic } from './FooterGraphic'

const FooterBody = ({ data }) => (
  <FooterRow>
    <FooterMenu title='Confluenza'>
      <MenuLink to='/users/using-confluenza'>Using Confluenza</MenuLink>
      <MenuLink to='/developers/making-confluenza-yours'>Making Confluenza Yours</MenuLink>
      <MenuLink to='/developers/contributing'>Contributing</MenuLink>
    </FooterMenu>
    <Media
      query='(min-width: 800px)' render={() => (
        <FooterGraphic imageUrl={getImage(data, 'intro-panel')} />
      )}
    />
  </FooterRow>
)

export { FooterBody }
