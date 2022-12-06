import { FC } from 'react'
import { getMe, Queries } from '@hooks/useApi'
import { useQuery } from '@tanstack/react-query'

const Me: FC = () => {
  const { isFetching, isError, data, error } = useQuery({
    queryKey: [Queries.me],
    queryFn: getMe,
    retry: false,
  })

  return <span>{data?.username}</span>
}

export default Me
