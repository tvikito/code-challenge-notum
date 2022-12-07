import { UserDto } from '@api/models'
import { Queries } from '@hooks/useApi'
import { useQuery } from '@tanstack/react-query'
interface Props {
  getMe: () => Promise<UserDto>
}

const Header: React.FC<Props> = ({ getMe }) => {
  const { isFetching, isError, data, error } = useQuery({
    queryKey: [Queries.me],
    queryFn: getMe,
    retry: false,
  })

  return (
    <header className='flex justify-between p-4 bg-slate-800 color text text-white'>
      <div>🤗 Wonderful nodes 🚀</div>

      <div>
        Hi there <span className='font-bold'>{data?.username}</span>!
      </div>
    </header>
  )
}

export default Header
