import styled from '@emotion/styled'

const MarkerPositioner = styled.div({
  position: 'absolute',
  left: '10px'
})

const Circle = styled.div(({ radius }) => ({
  height: radius,
  width: radius,
  backgroundColor: '#F486CA',
  borderRadius: '50%'
}))

const ActiveMarker = () => (
  <MarkerPositioner>
    <Circle radius='5px' />
  </MarkerPositioner>
)

export { ActiveMarker }
