import { Grid, CircularProgress } from '@mui/material'
import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { OriginPathnameKey } from 'utils/hooks/useAuth'
import routes from './routes'

const LadingPage = lazy(() => import('ui/pages/Home'))
const LoginPage = lazy(() => import('ui/pages/Login'))

function NavigateWithState() {
  const location = useLocation()

  return (
    <Navigate to={routes.root.path} replace state={{ [OriginPathnameKey]: location.pathname }} />
  )
}

function UnAuthanticatedApp() {
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
      </Routes>
    </Suspense>
  )
}

export default UnAuthanticatedApp
