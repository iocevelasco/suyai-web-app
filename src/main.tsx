import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import theme from 'theme'
import { Grid, ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ErrorBoundary } from 'react-error-boundary'
import store from 'services/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ErrorBoundary
            fallback={
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ height: '100vh' }}
              >
                <h1>There was an error.</h1>
              </Grid>
            }
          >
            <App />
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
