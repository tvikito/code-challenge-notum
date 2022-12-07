import { UserDto } from '@api/models'
import { Queries } from '@hooks/useApi'
import { useQuery } from '@tanstack/react-query'
import { accessTokenCookie } from '@utils/constants'
import { useRouter } from 'next/router'
import Button from './Button'
interface Props {
  getMe: () => Promise<UserDto>
}

const Header: React.FC<Props> = ({ getMe }) => {
  const router = useRouter()
  const { isFetching, isError, data, error } = useQuery({
    queryKey: [Queries.me],
    queryFn: getMe,
    retry: false,
  })

  const handleLogout = () => {
    document.cookie = `${accessTokenCookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    router.push('/login')
  }

  return (
    <header className='flex justify-between items-center p-4 bg-slate-800 color text text-white'>
      <div>🤗 Wonderful nodes 🚀</div>

      <div>
        Hi there <span className='font-bold'>{data?.username}</span>! <Button onClick={handleLogout}>Log out</Button>
      </div>
    </header>
  )
}

export default Header
