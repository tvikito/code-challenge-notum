import Me from '@components/Me'
import { getNodes, Queries } from '@hooks/useApi'
import { Box, Button, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import MapTile from './MapTile'

export default function Map() {
  const { isFetching, isError, data, error } = useQuery({
    queryKey: [Queries.nodes],
    queryFn: getNodes,
    retry: false,
  })

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant='h5'>🤗 Wonderful nodes 🚀</Typography>
      <Typography variant='h6'>
        Welcome <Me />
      </Typography>
      <Button>Save map</Button>
      <>
        {data?.nodes.map((node) => (
          <MapTile key={node.id} node={node} />
        ))}
      </>
    </Box>
  )
}
