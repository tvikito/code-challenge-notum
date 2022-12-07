import { FC } from 'react'
import { getMe, Queries } from '@hooks/useApi'
import { useQuery } from '@tanstack/react-query'

const Me: FC = () => {
  const { isFetching, isError, data, error } = useQuery({
    queryKey: [Queries.me],
    queryFn: getMe,
    retry: false,
  })

  return (
    <div>
      Hi there <span className='font-bold'>{data?.username}</span>!
    </div>
  )
}

export default Me
