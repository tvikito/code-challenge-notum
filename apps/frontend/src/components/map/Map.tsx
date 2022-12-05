import { Box, Button, Typography } from '@mui/material'

/**
 * This Map component renders whole map (their nodes) - see readme for better visual imagination.
 * Basically, it renders all nodes and handle saving.
 */
export default function Map() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant='h5'>🤗 Wonderful nodes 🚀</Typography>
      <Typography variant='h6'>Welcome</Typography>
      <Button>Save map</Button>
    </Box>
  )
}
