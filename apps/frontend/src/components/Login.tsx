import { login, Mutations } from '@hooks/useApi'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Button from '@components/Button'
import Avatar from '@mui/material/Avatar'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC, useState } from 'react'
import Input from './Input'
import MessageAlert from './MessageAlert'

const Login: FC = () => {
  const queryClient = useQueryClient()
  const [username, setUsername] = useState('notum')
  const [password, setPassword] = useState('toMoon')

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: login({ username, password }),
    onSuccess: (data) => {
      queryClient.setQueryData([Mutations.login], data)
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate()
  }

  return (
    <main className='max-w-md flex flex-col mx-auto p-4 w-full text-center items-center'>
      <Avatar className='text-red-500 bg-slate-800'>
        <LockOutlinedIcon />
      </Avatar>
      <h1 className='text-2xl'>Sign in</h1>

      <form onSubmit={handleSubmit} className='w-full'>
        <Input
          label='Username'
          className='mt-9 w-full'
          required
          onChange={({ currentTarget: { value } }) => setUsername(value)}
          value={username}
        />

        <Input
          label='Password'
          required
          className='mt-9 w-full'
          type='password'
          onChange={({ currentTarget: { value } }) => setPassword(value)}
          value={password}
        />

        {isError && <MessageAlert className='mt-11'>Invalid credentials</MessageAlert>}

        <Button
          type='submit'
          disabled={isLoading || !password || !username}
          onClick={handleSubmit}
          className='w-full mt-6'
        >
          Login
        </Button>
      </form>
    </main>
  )
}

export default Login
