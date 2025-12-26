import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { theme as baseTheme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

export const theme = extendTheme(
  {
    config: {
      initialColorMode: 'light',
      useSystemColorMode: false,
    },
    colors: {
      brand: {
        50: '#e8eef8',
        100: '#c5d3ec',
        200: '#9fb5de',
        300: '#7897d0',
        400: '#5b80c5',
        500: '#1e3c72', // Primary brand color
        600: '#1a3565',
        700: '#152b53',
        800: '#102141',
        900: '#0a1529',
      },
    },
    styles: {
      global: {
        body: {
          color: '#1c1e21',
          bg: 'white',
          fontSize: 'lg',
        },
      },
    },
    fonts: {
      heading: 'Inter Variable, Inter, sans-serif',
      body: 'Inter Variable, Inter, sans-serif',
    },
    fontSizes,
    components,
  },
  baseTheme,
)
