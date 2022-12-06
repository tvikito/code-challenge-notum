import { NodeDto } from '@api/models'
import Button from '@components/Button'
import Input from '@components/Input'
import { FC, useState } from 'react'

/**
 * Component for displaying actions for a single tile on the map. The user can:
 *  - delete node and all its children
 *  - add a new child to the node (optionally he can enter some description)
 *      -  ID of new node is incremented automatically (e.g. if the latest node has ID 1, the new node will have ID 2)
 *  - change color of the node
 */
interface Props {
  node: NodeDto
  addNode: (node: Omit<NodeDto, 'id'>) => void
  deleteNode: (id: number) => void
  setNodeColor: (id: number, color: string) => void
}

const MapTileActions: FC<Props> = ({
  node: { id, color, description, parentId },
  addNode,
  deleteNode,
  setNodeColor,
}) => {
  const [newDescription, setNewDescription] = useState('')
  const [newColor, setNewColor] = useState(color)

  const createNode = () => {
    setNewDescription('')
    addNode({ description: newDescription, color, parentId: id })
  }

  return (
    <div className='p-3 pt-0 max-w-lg mx-auto'>
      <div>{description}</div>
      {!!parentId && (
        <Button onClick={() => deleteNode(id)} className='w-full mt-5'>
          Delete
        </Button>
      )}
      <div className='flex flex-col mt-5'>
        <Input
          label='Description'
          value={newDescription}
          onChange={({ currentTarget: { value } }) => setNewDescription(value)}
        />
        <Button onClick={createNode}>Create</Button>
      </div>
      <div className='flex flex-col  mt-5'>
        <Input label='Color' value={newColor} onChange={({ currentTarget: { value } }) => setNewColor(value)} />
        <Button onClick={() => setNodeColor(id, newColor)}>Colorize</Button>
      </div>
    </div>
  )
}

export default MapTileActions
