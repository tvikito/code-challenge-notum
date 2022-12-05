import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Alert, Button, TextField } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FC, useState } from 'react'

/**
 * Component for displaying the login form. It has 2 text fields for username and password and a button for submitting the form.
 * If the login is not successful, there should be message "Invalid credentials.".
 */
const Login: FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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

      <Alert severity='error' className='w-full mt-6'>
        Invalid credentials
      </Alert>

      <Button
        disabled={!password || !username}
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
