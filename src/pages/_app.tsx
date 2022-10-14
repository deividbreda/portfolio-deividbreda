import { AppProps } from 'next/app'
import { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import '../styles/globals.scss'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { ModalLoginProvider } from '../hooks/useModalLogin'
import { ApolloProvider } from '@apollo/client'
import { client } from '../services/apollo'
import { SearchProvider } from '../hooks/useSearch'
import { LoginProvider } from '../hooks/useLogin'
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({ duration: 1050 })
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <SessionProvider>
        <ModalLoginProvider>
          <LoginProvider>
            <SearchProvider>
              <ApolloProvider client={client}>
                <Component {...pageProps} />
              </ApolloProvider>
            </SearchProvider>
          </LoginProvider>
        </ModalLoginProvider>
      </SessionProvider>
    </ChakraProvider>
  )
}

export default MyApp
