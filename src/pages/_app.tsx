import { AppProps } from 'next/app'
import Head from 'next/head'

const MyApp = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
