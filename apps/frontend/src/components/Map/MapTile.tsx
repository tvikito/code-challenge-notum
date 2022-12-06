import { NodeDto } from '@api/models'
import { Box } from '@mui/material'
import { FC } from 'react'
import MapTileActions from './MapTileActions'

/**
 * Component for displaying a single tile on the map. Tile represents one node.
 *  - Content of tile contains node's ID followed by brackets with number of all children if it has some.
 *  - Background color is by default "white" but it should be overwritten by node's color property.
 *  - On tile click the node should become active. If the node is already active, it should become inactive.
 *  - If the tile is active, it has red border and we see its description and `<MapTileActions />` component.
 */

interface Props {
  node: NodeDto
}

const MapTile: FC<Props> = ({ node }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        fontSize: 15,
        borderRadius: 2,
        p: '5px',
        minHeight: '30px',
        m: '4px',
        cursor: 'pointer',
      }}
    >
      {node.id} {node.description}
      <MapTileActions />
    </Box>
  )
}

export default MapTile
