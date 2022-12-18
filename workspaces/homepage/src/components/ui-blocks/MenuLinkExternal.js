import styled from '@emotion/styled'

const MenuLinkExternal = styled.a(
  {
    display: 'inline-block',
    color: '#D20DE7',
    fontFamily: 'Roboto Mono, monospace',
    margin: '5px 10px',
    fontSize: '10pt',
    '&:hover': {
      color: 'white',
      textDecoration: 'none'
    }
  },
  ({ styles }) => ({ ...styles })
)

export { MenuLinkExternal }
