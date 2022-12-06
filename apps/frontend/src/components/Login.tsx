import { login, Mutations } from '@hooks/useApi'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Alert, Button, TextField } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC, useState } from 'react'

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

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        Sign in
      </Typography>

      <TextField
        id='outlined-basic'
        label='Username'
        variant='outlined'
        fullWidth
        required
        className='mt-6'
        onChange={({ currentTarget: { value } }) => setUsername(value)}
        value={username}
      />

      <TextField
        id='outlined-basic'
        label='Password'
        variant='outlined'
        fullWidth
        required
        className='mt-6'
        type='password'
        onChange={({ currentTarget: { value } }) => setPassword(value)}
        value={password}
      />

      {isError && (
        <Alert severity='error' className='w-full mt-6'>
          Invalid credentials
        </Alert>
      )}

      <Button
        disabled={isLoading || !password || !username}
        onClick={() => mutate()}
        variant='contained'
        fullWidth
        className='mt-6'
        color='primary'
        size='large'
      >
        Contained
      </Button>
    </Box>
  )
}

export default Login
