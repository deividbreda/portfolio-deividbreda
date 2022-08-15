import { Theme, extendTheme  } from '@chakra-ui/react'

const customTheme = {
    colors: {
        gray: {
            '100.transparent': '#f0f6fc80',
            '100': '#f0f6fc',
            '200': '#d5e6fc',
            '300': '#a0bee5',
            '400': '#1d3452',
            '700': '#0b1f3a',
            '900': '#020811',
        },

        black: {
            'transparent': '#000000a1',
        }
    },

    styles: {
        global: {
            body: {
                color: 'white',
            }
        }
    },

    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
}

export const theme = extendTheme(customTheme)