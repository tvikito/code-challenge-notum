import React, { useEffect, FC, createContext, useState, Dispatch, SetStateAction } from 'react'
import type { AppProps } from 'next/app'
import '../styles/global.scss'
import Head from 'next/head'
import CustomHead from '@components/CustomHead'
import { pageview } from 'src/lib/gtag'
import { useRouter } from 'next/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface ContextLogin {
  accessToken?: string
  setAccessToken: Dispatch<SetStateAction<string>>
}

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [accessToken, setAccessToken] = useState<string | undefined>()
  const router = useRouter()
  const [queryClient] = React.useState(() => new QueryClient())

  useEffect(() => {
    const handleRouteChange = (url: URL) => pageview(url)

    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <CustomHead />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
