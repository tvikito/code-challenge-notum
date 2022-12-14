import React, { useEffect, FC } from 'react'
import type { AppProps } from 'next/app'
import '../styles/global.scss'
import Head from 'next/head'
import CustomHead from '@components/CustomHead'
import { pageview } from 'src/lib/gtag'
import { useRouter } from 'next/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
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

  const isDev = process.env.NODE_ENV === 'development'

  return (
    <>
      <Head>
        <CustomHead />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        {isDev && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </>
  )
}

export default MyApp
