import { AppProps } from 'next/app'
import { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({duration: 1050})
  }, [])

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
