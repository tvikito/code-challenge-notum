import Head from 'next/head'
import React from 'react'
import Footer from '@components/Footer'
import Header from '@components/Header'

const SamplePage: React.FC = () => (
  <>
    <Head>
      <title>Sample Page</title>
      <style>
        {`:root {
        --main-color: #ff6600;
      }`}
      </style>
    </Head>

    <Header />

    <section className="video shadow--bottom">Lorem ipsum</section>

    <Footer />
  </>
)

export default SamplePage
