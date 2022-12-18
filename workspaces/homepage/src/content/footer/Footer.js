import { Box } from 'src/components/ui-blocks'

import { FooterBody } from './FooterBody'
import { FooterRow } from './FooterRow'
import { SocialIcons } from './SocialIcons'
import { Copyright } from './Copyright'

const Footer = ({ data }) => (
  <Box
    backgroundStyles={{
      paddingBottom: 0,
      backgroundImage: 'none',
      backgroundColor: 'black',
      '@media (max-width: 568px)': {
        paddingTop: '20px'
      }
    }}
  >
    <FooterBody data={data} />
    <FooterRow>
      <SocialIcons data={data} />
    </FooterRow>
    <Copyright />
  </Box>
)

export { Footer }
