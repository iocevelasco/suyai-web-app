import { Grid, CircularProgress } from '@mui/material'
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import routes from './routes'

const LadingPage = lazy(() => import('ui/pages/Home'))
const LoginPage = lazy(() => import('ui/pages/Login'))
const SignUpPage = lazy(() => import('ui/pages/SignUp'))

function UnAuthenticatedApp() {
  return (
    <Suspense
      fallback={
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: '100vh' }}
        >
          <CircularProgress />
        </Grid>
      }
    >
      <Routes>
        <Route path={routes.root.path} element={<LadingPage />} />
        <Route path={routes.login.path} element={<LoginPage />} />
        <Route path={routes.signup.path} element={<SignUpPage />} />
      </Routes>
    </Suspense>
  )
}

export default UnAuthenticatedApp
