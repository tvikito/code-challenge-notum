import { Box, Button, TextField } from '@mui/material'
import { FC } from 'react'

/**
 * Component for displaying actions for a single tile on the map. The user can:
 *  - delete node and all its children
 *  - add a new child to the node (optionally he can enter some description)
 *      -  ID of new node is incremented automatically (e.g. if the latest node has ID 1, the new node will have ID 2)
 *  - change color of the node
 */
interface Props {}

const MapTileActions: FC<Props> = () => {
  return (
    <Box sx={{ display: 'flex', mt: 1, flexDirection: 'column', alignContent: 'center', gap: '10px' }}>
      <Button variant='contained' size='small'>
        Delete
      </Button>
      <Box sx={{ display: 'flex' }}>
        <TextField label='Description' />
        <Button variant='contained' size='small'>
          Create
        </Button>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <TextField label='Color' />
        <Button variant='contained' size='small'>
          Colorize
        </Button>
      </Box>
    </Box>
  )
}

export default MapTileActions
