import { NodeDto } from '@api/models'
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
  nodes: NodeDto[]
  addNode: (node: Omit<NodeDto, 'id'>) => void
  deleteNode: (id: number) => void
  setNodeColor: (id: number, color: string) => void
  setNodeOpenId: (id: number) => void
  nodeOpenId: number
}

const MapTile: FC<Props> = ({ node, nodes, addNode, deleteNode, setNodeColor, setNodeOpenId, nodeOpenId }) => {
  const childrenNodes = nodes.filter((n) => n.parentId === node.id)

  const isOpen = nodeOpenId === node.id

  return (
    <div className='flex flex-col flex-1'>
      <div
        className='flex-1 border-slate-800 border rounded-lg justify-center items-center text-center mt-2 cursor-pointer'
        style={{ backgroundColor: node.color || '#fff' }}
      >
        <div className='p-3 font-bold ' onClick={() => setNodeOpenId(node.id)}>
          {node.id} {!!childrenNodes.length && `(${childrenNodes.length})`}
        </div>
        {isOpen && <MapTileActions node={node} addNode={addNode} deleteNode={deleteNode} setNodeColor={setNodeColor} />}
      </div>
      <div className='flex gap-1 items-start'>
        {childrenNodes.map((n) => (
          <MapTile
            key={n.id}
            node={n}
            addNode={addNode}
            deleteNode={deleteNode}
            nodes={nodes}
            setNodeColor={setNodeColor}
            setNodeOpenId={setNodeOpenId}
            nodeOpenId={nodeOpenId}
          />
        ))}
      </div>
    </div>
  )
}

export default MapTile
