import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import React, { FC } from 'react'
import type {
  RailsContext,
  ReactComponentOrRenderFunction
} from 'react-on-rails/node_package/lib/types'
import Layout from '../layout'
import { theme } from '../styles'
import { createEmotionCache } from '../utils'

type InitOptions = Record<never, never>

export type User = {
  id: string
  name: string
  email: string
  created_at: string
  updated_at: string
}

export type DefaultProps = {
  user: User
  isLoggedIn: boolean
}

export function Init(
  App: FC<DefaultProps & Record<any, any>>,
  _options?: InitOptions
) {
  return function Renderer(
    props: { isLoggedIn: boolean; user: User } & Record<any, any>,
    _railsContext: RailsContext
  ) {
    const cache = createEmotionCache()

    return function Main() {
      return (
        <React.StrictMode>
          <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
              <CssBaseline />

              <Layout isLoggedIn={props.isLoggedIn} user={props.user}>
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
