import { AppProps } from 'next/app'
import { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import '../styles/globals.scss'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { LoginProvider } from '../hooks/useLogin'
import { ApolloProvider } from '@apollo/client'
import { client } from '../services/apollo'
import { SearchProvider } from '../hooks/useSearch'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({duration: 1050})
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <LoginProvider>
        <SearchProvider>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </SearchProvider>
      </LoginProvider>
    </ChakraProvider>
  )
}

export default MyApp
