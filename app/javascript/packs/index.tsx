import App from '@/components/app'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom'
import { theme } from '../styles'
import { createEmotionCache } from '../utils'

const cache = createEmotionCache()

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.StrictMode>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </CacheProvider>
    </React.StrictMode>,
    document.body.appendChild(document.createElement('div'))
  )
})
