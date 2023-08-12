import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'src/styles/theme/default'
import { GlobalStyle } from 'src/styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
