import { NodeDto } from '@api/models'
import Button from '@components/Button'
import { getNodes, Queries, saveNodes } from '@hooks/useApi'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import MapTile from './MapTile'

export default function Map() {
  const [currentNodes, setCurrentNodes] = useState<NodeDto[]>([])
  const [nodeOpenId, setNodeOpenId] = useState<number>()
  const { isFetching, refetch } = useQuery({
    queryKey: [Queries.nodes],
    queryFn: getNodes,
    retry: false,
    refetchOnWindowFocus: false,
    onSuccess: ({ nodes }) => setCurrentNodes(nodes),
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: saveNodes(currentNodes),
    onSettled: () => refetch(),
  })

  const addNode = (node: Omit<NodeDto, 'id'>) => {
    const lastItemId = currentNodes[currentNodes.length - 1].id
    setCurrentNodes([...currentNodes, { ...node, id: lastItemId + 1 }])
  }

  const deleteNode = (selectedId: number) => {
    let newNodes = [...currentNodes]
    // buffer array for items to be removed
    let toBeRemovedIDs: number[] = [selectedId]

    const filterNodes = (currId: number) => {
      newNodes = newNodes.filter((currNode) => {
        if (currNode.id === currId) {
          // add child nodes to buffer for remove afterwards
          toBeRemovedIDs = [...toBeRemovedIDs, ...newNodes.filter((n) => n.parentId === currId).map((n) => n.id)]
          return false
        }
        return true
      })
    }

    // loop until there are no children left
    while (!!toBeRemovedIDs.length) {
      toBeRemovedIDs.forEach((childID) => {
        filterNodes(childID)
        toBeRemovedIDs.shift()
      })
    }

    setCurrentNodes(newNodes)
  }

  const setNodeColor = (selectedId: number, color: string) => {
    // This recursive function is probably don't even necessary, enough should be passing parent node color
    // to children through props. But since the description of the taks doesn't provide any info how to save/handle
    // changed color, I decides go this way.
    let newNodes = [...currentNodes]
    let childrenIDs: number[] = [selectedId]

    const applyColor = (currId: number) => {
      newNodes = newNodes.map((currNode) => {
        if (currNode.id === currId) {
          childrenIDs = [...childrenIDs, ...newNodes.filter((n) => n.parentId === currId).map((n) => n.id)]
          // according to video presentation change color only for selected node and for nodes without color
          return { ...currNode, color: selectedId === currNode.id || !currNode.color ? color : currNode.color }
        }
        return currNode
      })
    }

    // loop until there are no children left
    while (!!childrenIDs.length) {
      childrenIDs.forEach((childID) => {
        applyColor(childID)
        childrenIDs.shift()
      })
    }

    setCurrentNodes(newNodes)
  }

  const changeNodeOpenId = (id: number) => setNodeOpenId(id === nodeOpenId ? undefined : id)

  return (
    <div>
      <div className='w-full text-center my-4'>
        <Button onClick={() => mutate()}>{isLoading ? 'Saving...' : 'Save map'}</Button>
      </div>
      <div>
        {isFetching ? (
          <div>Loading...</div>
        ) : (
          currentNodes
            .filter((n) => !n.parentId)
            .map((node) => (
              <MapTile
                key={node.id}
                node={node}
                addNode={addNode}
                deleteNode={deleteNode}
                nodes={currentNodes}
                setNodeColor={setNodeColor}
                setNodeOpenId={changeNodeOpenId}
                nodeOpenId={nodeOpenId}
              />
            ))
        )}
      </div>
    </div>
  )
}
