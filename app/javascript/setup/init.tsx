import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import React, { FC } from 'react'
import type {
  RailsContext,
  ReactComponentOrRenderFunction,
} from 'react-on-rails/node_package/lib/types'
import Layout from '../layout'
import { theme } from '../styles'
import { createEmotionCache } from '../utils'

type InitOptions = Record<never, never>

export function Init(App: FC<{}>, _options?: InitOptions) {
  return function Renderer(
    props: Record<any, any>,
    _railsContext: RailsContext
  ) {
    const cache = createEmotionCache()

    return function Main() {
      return (
        <React.StrictMode>
          <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
              <CssBaseline />

              <Layout>
                <App {...props} />
              </Layout>
            </ThemeProvider>
          </CacheProvider>
        </React.StrictMode>
      )
    } as FC<{}>
  } as ReactComponentOrRenderFunction
}

export default Init
