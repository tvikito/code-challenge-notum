import React from 'react'
import Head from 'next/head'
import Footer from '@components/Footer'
import Login from '@components/Login'
import Map from '@components/Map/Map'
import { useQuery } from '@tanstack/react-query'
import { login } from '@hooks/useApi'
import Header from '@components/Header'

const Home: React.FC = () => {
  const loginQuery = useQuery({
    queryKey: ['login'],
    queryFn: login({ username: 'username', password: 'password' }),
    enabled: false,
  })

  const isUserLoggedIn = loginQuery?.data?.access_token

  return (
    <>
      <Head>
        <title>🤗 Wonderful nodes 🚀</title>
      </Head>

      {!isUserLoggedIn ? (
        <Login />
      ) : (
        <>
          <Header />

          <main className='flex flex-col w-full mx-auto px-4'>
            <Map />
          </main>

          <Footer />
        </>
      )}
    </>
  )
}

export default Home
