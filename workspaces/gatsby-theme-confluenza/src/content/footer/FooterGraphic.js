import styled from '@emotion/styled'

const FooterGraphic = styled.div(({ imageUrl }) => ({
  marginLeft: 'auto',
  marginTop: '30px',
  width: '150px',
  height: '150px',
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'auto 100%',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat'
}))

export { FooterGraphic }
