import { Box } from 'src/components/ui-blocks'

import { Box1Content } from './Box1Content'

const Box1 = ({ data }) => (
  <Box
    backgroundStyles={{
      backgroundImage: 'none',
      backgroundColor: '#1a548c'
    }}
  >
    <Box1Content data={data} />
  </Box>
)

export { Box1 }
