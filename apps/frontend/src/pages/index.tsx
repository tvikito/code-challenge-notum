import React from 'react'
import Head from 'next/head'
import Footer from '@components/Footer'
import Login from '@components/login/Login'
import Map from '@components/map/Map'
import { Container } from '@mui/material'

const Home: React.FC = () => {
  const notLogged = true
  const loading = false

  if (loading) return <div>Loading...</div>

  if (notLogged)
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
