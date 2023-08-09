import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'src/styles/theme/default'
import { GlobalStyle } from 'src/styles/global'
import { ContextExtendNavbar } from 'src/context/extend-navbar'

function MyApp({ Component, pageProps }) {
  const [extendNavbar, setExtendNavbar] = React.useState<boolean>(false)

  return (
    <ContextExtendNavbar.Provider value={{ extendNavbar, setExtendNavbar }}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ContextExtendNavbar.Provider>
  )
}

export default MyApp
