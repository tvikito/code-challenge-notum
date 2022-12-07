import Head from 'next/head'
import Footer from '@components/Footer'
import Map from '@components/Map/Map'
import Header from '@components/Header'
import { GetServerSideProps } from 'next'
import { useApi } from '@hooks/useApi'

interface Props {
  accessToken: string
}

const Home: React.FC<Props> = ({ accessToken }) => {
  const { getNodes, saveNodes, getMe } = useApi(accessToken)

  return (
    <>
      <Head>
        <title>🤗 Wonderful nodes 🚀</title>
      </Head>

      <Header getMe={getMe} />

      <main className='flex flex-col w-full mx-auto px-4'>
        <Map getNodes={getNodes} saveNodes={saveNodes} />
      </main>

      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { accessToken } = context.req.cookies

  if (!accessToken) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {
      accessToken,
    },
  }
}

export default Home
