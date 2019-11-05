import styled from '@emotion/styled'

const FooterRow = styled.div({
  boxSizing: 'border-box',
  width: '100%',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom: '30px',
  '@media (max-width: 799px)': {
    paddingLeft: '25px'
  }
})

export { FooterRow }
