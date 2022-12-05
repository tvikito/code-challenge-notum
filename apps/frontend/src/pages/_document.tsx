// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import Analytics from '../components/Analytics'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Analytics />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
