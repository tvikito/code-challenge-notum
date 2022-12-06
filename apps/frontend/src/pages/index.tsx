import React from 'react'
import Head from 'next/head'
import Footer from '@components/Footer'
import Login from '@components/Login'
import Map from '@components/Map/Map'
import { Container } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { login } from '@hooks/useApi'

const Home: React.FC = () => {
  const loginQuery = useQuery({
    queryKey: ['login'],
    queryFn: login({ username: 'username', password: 'password' }),
    enabled: false,
  })

  if (!loginQuery?.data?.access_token)
    return (
      <Container component='main' maxWidth='xs'>
        <Login />
      </Container>
    )

  return (
    <>
      <Head>
        <title>Next.js boiler Template</title>
      </Head>

      <Container component='main'>
        <Map />
      </Container>

      <Footer />
    </>
  )
}

export default Home
