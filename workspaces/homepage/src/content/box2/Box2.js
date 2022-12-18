import { Box } from 'src/components/ui-blocks'

import { Box2Content } from './Box2Content'

const Box2 = ({ data }) => (
  <Box
    backgroundStyles={{
      backgroundImage: 'none',
      backgroundColor: '#b9cbc7'
    }}
  >
    <Box2Content data={data} />
  </Box>
)

export { Box2 }
