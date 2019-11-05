import styled from '@emotion/styled'
import { Link } from 'gatsby'

const MenuLink = styled(Link)({
  display: 'inline-block',
  color: '#74b9ab',
  fontFamily: 'RobotoMono-Regular, Roboto Mono, monospace',
  fontSize: '10pt',
  '&:hover': {
    color: 'white',
    textDecoration: 'none'
  }
})

export { MenuLink }
