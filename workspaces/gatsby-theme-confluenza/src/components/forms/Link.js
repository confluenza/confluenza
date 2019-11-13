import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'

const Link = styled(GatsbyLink)(props => ({
  fontFamily: 'Helvetica-Oblique, sans-serif',
  fontSize: '1.2em',
  backgroundColor: '#568A80',
  color: props.disabled ? 'grey' : 'white',
  marginTop: '20px',
  marginBottom: '20px',
  borderRadius: '10px',
  borderColor: 'white',
  opacity: '1.0',
  padding: '10px 25px',
  border: '1px solid white',
  transition: 'all 0.2s ease-in-out 0s',
  '&:hover': {
    filter: props.disabled ? 'none' : 'brightness(90%)',
    textDecoration: 'none',
    color: 'white'
  }
}))

export { Link }
